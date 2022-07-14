## Usage

### Install

```
pnpm i -D eslint @bux/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": ["@bux"]
}
```

### Config VS Code auto fix

Create .vscode/settings.json

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```