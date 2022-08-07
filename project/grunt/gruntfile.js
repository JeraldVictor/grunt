module.exports = function (grunt) {
  grunt.initConfig({
    concat: {
      options: {
        separator: "\n",
        sourceMap: true,
        banner: `/*Created on ${new Date()}*/\n`,
      },
      css: {
        src: ["../css/**/*.css"],
        dest: "../dist/css/style.css",
      },
      js: {
        src: ["../js/**/*.js"],
        dest: "../dist/js/app.js",
      },
    },
    cssmin: {
      target: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1,
        },
        files: {
          "../../App/css/style.css": ["../dist/css/style.css"],
        },
      },
    },
    uglify: {
      target: {
        options: {
          sourceMap: true,
        },
        files: {
          "../dist/js/app.min.js": ["../dist/js/app.js"],
        },
      },
    },
    copy: {
      lib: {
        files: [
          {
            expand: true,
            src: ["../lib/**"],
            dest: "../../App/lib/",
          },
        ],
      },
    },
    obfuscator: {
      options: {
        banner: "// obfuscated with grunt-contrib-obfuscator.\n",
        debugProtection: true,
        debugProtectionInterval: true,
        // domainLock: ['www.example.com']
      },
      js: {
        files: {
          "../../App/js/app.js": "../dist/js/app.min.js",
        },
      },
    },
    sass: {
      dist: {
        options: {
          style: "expanded",
        },
        files: {
          "../css/scss/app.css": "../scss/**/*.scss",
        },
      },
    },
    watch: {
      css: {
        files: ["../css/**/*.css"],
        tasks: ["concat:css", "cssmin"],
        options: {
          spawn: false,
        },
      },
      sass: {
        files: ["../scss/**/*.scss"],
        tasks: ["sass", "concat:css", "cssmin"],
        options: {
          spawn: false,
        },
      },
      js: {
        files: ["../js/**/*.js"],
        tasks: ["concat:js", "uglify", "obfuscator"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-concat"); // Concat Files plugin
  grunt.loadNpmTasks("grunt-contrib-watch"); // Watch file save Plugin
  grunt.loadNpmTasks("grunt-contrib-cssmin"); // Css min plugin
  grunt.loadNpmTasks("grunt-contrib-uglify"); // Js min plugin
  grunt.loadNpmTasks("grunt-contrib-copy"); // Copy file from src to dest plugin
  grunt.loadNpmTasks("grunt-contrib-obfuscator"); // Js Obfuscation plugin
  grunt.loadNpmTasks("grunt-contrib-sass"); // Sass plugin

  grunt.registerTask("default", [
    "copy",
    "concat",
    "sass",
    "cssmin",
    "uglify",
    "obfuscator",
    "watch",
  ]);
};
