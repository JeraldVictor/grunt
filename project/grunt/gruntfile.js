module.exports = function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.initConfig({
        concat: {
          options: {
              separator: '\n',
              sourceMap:true,
          },
          dist:{
            src:['../css/*.css'],
            dest:'../../App/css/style.css'
          }
        }
      });
   
   
    grunt.registerTask('default',['concat']);
}