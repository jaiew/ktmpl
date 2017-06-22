# ktmpl

Simple template utility to replace environment variables in a kubernetes yaml file.

Under the covers it's just using Mustache so it could be used for any templates not just Kubernetes

Install:
```
npm install -g ktmpl
```

Usage:
```
VAR=value ktmpl template.yaml
```
