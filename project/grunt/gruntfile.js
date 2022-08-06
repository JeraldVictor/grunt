module.exports = function(grunt){
    grunt.initConfig({
        concat: {
          options: {
              separator: '\n',
              sourceMap:true,
              banner:`/*Created on ${new Date()}*/\n`,
          },
          css:{
            src:['../css/**/*.css'],
            dest:'../../App/css/style.css'
          },
          js:{
            src:['../lib/jquery/jquery.min.js','../js/**/*.js'],
            dest:'../../App/js/app.js'
          }
        },
        watch: {
          css: {
            files: ['../css/**/*.css'],
            tasks: ['concat'],
            options: {
              spawn: false,
            },
          },
        },
      });
   
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-watch');
  
   
    grunt.registerTask('default',['concat','watch']);
}