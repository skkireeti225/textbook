
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
   /* uglify: {
      dist: {
        files: {
          'dist/built.min.js': ['dist/built.js']  
        }
      }
    }, */
     uglify: { 
      
        minjs1: {
                src: ['dist/built.js'],
                dest: 'dist/built.min.js'
            },
        minjs2: {
            src: [''],
            dest: ''
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
    cssmin :{
        
        stylemin:{      
                src: ['app/styles/homeStyle.css'],
                dest: 'dist/built.min.css'
        }
    }, 
      
    karma: {
            unit : {
                configFile : './test/karma.conf.js',
                autoWatch : false,
                singleRun : true
            }
    },
        
        
      
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-karma');
   
      grunt.registerTask('default', ['jshint', 'concat', 'uglify:minjs1', 'cssmin' ]);
    
    // grunt.registerTask('concatfiles', ['concat']);
    // grunt.registerTask('uglifyfiles', ['uglify']);
       grunt.registerTask('test:unit', ['karma:unit']);
    // grunt.registerTask('uglify123js', ['uglify:minjs1', 'uglify:minjs2', 'uglify:minjs1']);
    

};


