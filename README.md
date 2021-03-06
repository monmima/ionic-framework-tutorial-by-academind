# ionic-tutorial-by-academind

This project uses Vue.js and the Ionic framework.

This is basically me following a [YouTube tutorial by Academind](https://www.youtube.com/watch?v=mQ4zmFy4d7Y).

## Installation of Ionic on Linux

The official documentation on how to install Ionic is here: https://cli.vuejs.org/guide/installation.html.

1. Install NodeJS
2. Install Ionic globally:
    - sudo npm install -g @vue/cli
3. Create a project folder
4. Type "ionic start" in the terminal
5. Choose your framework
    - We're going to use VueJS for this project
6. Give your project a name
    - "vue-first-app" is what we're going to use here
7. Choose a template (we're going with a blank one for this project)
8. Remove the TypeScript dependencies:
    - npm uninstall --save typescript @types/jest @typescript-eslint/eslint-plugin @typescript-eslint/parser @vue/cli-plugin-typescript @vue/eslint-config-typescript
9. Change all .ts files to .js. In a blank Ionic Vue app, this should only be router/index.ts and main.ts.
10. Remove @vue/typescript/recommended and @typescript-eslint/no-explicit-any: ‘off’, from .eslintrc.js.
11. Remove Array&lt;RouteRecordRaw&gt; from router/index.js.
12. Delete the shims-vue.d.ts file.
13. Remove lang="ts" from the script tags in any of your Vue components that have them. In a blank Ionic Vue app, this should only be App.vue and views/Home.vue.
14. The tsconfig.json file can also be deleted since it is a configuration file for TypeScript.
15. Delete the following file from router/index.js
    - import { RouteRecordRaw } from 'vue-router';

## VS Code extensions for this project

- Path Intellisense (autocompleting paths)
- Prettier (code formatting)
- Vetur (VueJS development)

## Old notes

## Installation of Ionic on Linux

If you want to create an Ionic project on Linux from scratch, this is how you do it.

To install Ionic on Linux, go here:

https://tecadmin.net/install-ionic-on-ubuntu-20-04/

If a command won't work in the Terminal, try adding "sudo" in front of it.

Tutorial: https://www.youtube.com/watch?v=mQ4zmFy4d7Y
Extensions to install explained at 8.43

Finally, you're going to run into frequent bugs if you don't use [this](https://github.com/academind/ionic-vue-getting-started/blob/master/.eslintrc.js) instead of your default .eslintrc.js file. The bug this file solves is this:

```1:1  error  Parsing error: Unexpected token <```

## Changing TypeScript (used by default) to JavaScript

Documentation: https://ionicframework.com/docs/vue/quickstart

The document tells you how to turn a TypeScript project into a JS project.

## Starting a server

Type "ionic serve" in the termimal to start a server.

