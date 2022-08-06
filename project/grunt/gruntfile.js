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
        src: ["../lib/jquery/jquery.min.js", "../js/**/*.js"],
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
          "../../App/js/app.js": ["../dist/js/app.js"],
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
      js: {
        files: ["../js/**/*.js"],
        tasks: ["concat:js", "uglify"],
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

  grunt.registerTask("default", ["concat", "cssmin", "uglify", "watch"]);
};
