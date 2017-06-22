#!/usr/bin/env node

const M = require('mustache')
const fs = require('fs')

function help() {
  console.log('Usage: VAR=value ktmpl template')
}

function processTokens(tokens) {

  tokens.forEach((tokenArr) => {
    if (tokenArr[0] == 'name') {
      var token = tokenArr[1];
      if (!process.env[token]) {
        console.warn(`Warning: ${token} is not defined and no default is set, replacing by empty`)
      }
    }
  });

}

if (process.argv.length != 3) {
  help()
  process.exit(1);
}

let templateFile = process.argv[2];

if (fs.existsSync(templateFile)) {
  let template = fs.readFileSync(templateFile, 'utf8');

  try {
    let tokens = M.parse(template);
    processTokens(tokens);
    console.log(M.render(template, process.env));
  } catch (e) {
    console.error('Error: Unable to parse template')
    process.exit(1)
  }
} else {
  help()
  process.exit(1);
}

