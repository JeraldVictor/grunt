## Grunt Demo

### Project Structure

```
.
├── App
│   ├── css
│   │   ├── style.css
│   │   └── style.css.map
│   ├── index.html
│   ├── js
│   │   ├── app.js
│   │   └── app.js.map
│   └── lib
│       └── jquery
│           └── jquery.js
├── project
│   ├── css
│   │   ├── Home
│   │   │   └── index.css
│   │   ├── home.css
│   │   └── page.css
│   ├── dist
│   │   ├── css
│   │   │   ├── style.css
│   │   │   └── style.css.map
│   │   └── js
│   │       ├── app.js
│   │       ├── app.js.map
│   │       ├── app.min.js
│   │       └── app.min.js.map
│   ├── grunt
│   │   ├── gruntfile.js
│   │   └── package.json
│   ├── js
│   │   └── index.js
│   └── lib
│       └── jquery
│           └── jquery.js
└── README.md

15 directories, 20 files
```

### Getting Started

1.  Clone the project
2.  Building Grunt
    ```
    $ rm -rf node_modules
    $ sudo npm install -g grunt-cli
    $ cd project/grunt
    $ npm install
    ```
3.  Running Grunt
    To run the watch task

    ```
    $ grunt --force
    ```

    Tasks are configured under `.vscode/tasks.json`. Change your grunt file location to make use of the VS Code tasks.
