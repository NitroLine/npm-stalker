# npm-stalker
This is package helps you to collect statistics about packets in your projects

## Before run

Package require your own instance of our statistics server. You can get it [here](https://gitlab.com/tumba-yumba/npm-statistics/npm-statistics-backend)

## Installation

1. `npm install npm-stalker` that install package and add command in `scripts.postinstall` field in your `package.json`
2. Must specify target server field in your `package.json`
```
...
  "tracer-server": "http://example.com",
...
```

Done. Now After every execute of `npm install` it will send statistics about server to your statistics server