![alt text](https://raw.githubusercontent.com/jim-lub/reactron/master/resources/icon.png)

# Reactron: An Electron + React extension
```
Note: Reactron is still in an early development stage and should not be used in production
```

The Reactron project is an attempt to simplify the creation of desktop Electron applications.
It aims to provide an "extended" boilerplate which at it's source provides a basic *Electron*,
*React* and *Webpack* configuration to build upon; but extends this by providing pre-build Components and Clients to simplify interaction between the main Electron process and the application.

## Features
- Write your code in Typescript OR Javascript.
- Built-in Development tools
- Default Components
- Default styling (*Easily customizable by modifying root .scss files*)
- Clients
  - **windowClient**: Control the state and position of your windows from anywhere.
  - **storeClient**: Manage state in the main process and access it from anywhere
  - **fileClient**: Read, write and update files on the filesystem
- Open Source code (*Modify / extend Reactron's source code*)
