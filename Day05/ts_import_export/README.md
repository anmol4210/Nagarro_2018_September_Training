Start from an empty folder

## 1. Init NPM module
Make sure that folder is not same as any
package you'll use

```
npm init
```

## 2. Create tsconfig.json
(This needs typescript installed globally)
Make sure `npm install -g typescript`

```
tsc --init
```

## 3. Create folders

 - dist
 - src

## 4. Change tsconfig.json

```json
{
  "outDir": "./dist",
  "rootDir": "./src"
}
```

## 5. Install Typescript locally

```
npm install -D typescript
```

## 6. Add NPM scripts

```json
{
  "scripts": {
    "build": "tsc",
    "prestart": "npm run build",
    "start": "node dist/main.js"
  }
}
```

# Reduce Generated Code

## 1. Install tslib

```
npm install tslib
```

## 2. Turn on importHelpers

tsconfig.json
```json
{
  "importHelpers": true
}
```
