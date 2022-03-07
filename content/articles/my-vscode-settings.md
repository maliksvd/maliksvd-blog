---
title: My Visual Studio Code Setup
description: In this context, my current editor of choice is Visual Studio Code.  However, this one requires some configurations presented in this post.
createdAt: "2021-05-04"
banner: "/default.png"
tags:
  - Visual Studio Code
---

## Extensions

- Bracket Pair Colorizer 2
- Bearded Icons
- freeCodeCamp Dark Theme
- French Language Pack for Visual Studio Code
- PostCSS Language Support
- Prettier - Code formatter
- Tailwind CSS IntelliSense
- Vetur

## Editor

First of all you should add dependencies to your project created by Kamona-WD.

```json
  "editor.tabSize": 2,
  "editor.renderWhitespace": "none",
  "editor.cursorStyle": "line-thin",
  "editor.fontFamily": "JetBrains Mono, SF Mono, Menlo, Monaco, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.lineHeight": 32,
  "editor.fontSize": 16,
  "editor.fontWeight": "200",
  "editor.minimap.enabled": false,
  "editor.minimap.renderCharacters": false,
  "editor.renderLineHighlight": "all",
  "editor.occurrencesHighlight": false,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.wordWrapColumn": 100,
  "editor.wordWrap": "wordWrapColumn",
```

## Prettier

```json
  "prettier.singleQuote": true,
  "prettier.printWidth": 100,
```

## Telemetry

```json
  "telemetry.enableCrashReporter": false,
  "telemetry.enableTelemetry": false,
```

## Update

```json
  "update.mode": "none",
  "extensions.autoUpdate": false,
```

## Javascript

```json
"[javascript]": {
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
```

## Workbench

```json
  "workbench.colorTheme": "freeCodeCamp Dark Theme",
  "workbench.iconTheme": "bearded-icons",
  "workbench.startupEditor": "newUntitledFile",
  "workbench.activityBar.visible": true,
```

## Extensions

```json
  "extensions.ignoreRecommendations": true
```

## Terminal

```json
  "terminal.integrated.tabs.enabled": true,
  "terminal.integrated.tabs.location": "left",
```

[View RAW Version](https://gist.github.com/maliksvd/6e95b337966a0d17baf1abf0bbf68381)
