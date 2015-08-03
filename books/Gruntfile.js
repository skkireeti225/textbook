
module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['app/scripts/*.js', 'app.js'],
      dest: 'dist/built.js'
    }
  },
    uglify: {
      dist: {
        files: {
          'dist/built.min.js': ['dist/built.js']  
        }
      }
    },
   /* uglify: {
        js: {
        dist: { 
          files: {  
        
                'dist/built2.min.js': ['dsit/built.js'] 
        
                }
              }
            }
    }, */
    jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true,
        console:true,
        guruApp:true,
        angular:true,
        $http:true,
        $:true
      },
    },
    with_overrides: {
      options: {
        curly: false,
        undef: true

      },
      files: {
        src: ['app/scripts/*.js', 'app.js']
      },
    }
  }
   });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
   
      grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
    // grunt.registerTask('concatfiles', ['concat']);
    // grunt.registerTask('uglifyfiles', ['uglify']);

};


