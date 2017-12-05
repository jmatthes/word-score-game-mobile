module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		    uglify: {
		        options: {
		          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
		        },
		        build: {
		        	src: ['src/js/jquery/*.js','src/js/vendor/*.js', 'src/js/main/*.js'],
		          dest: 'js/<%= pkg.name %>.min.js'
		        }
		      },
		      
		      imagemin: {
		    	    png: {
		    	      options: {
		    	        optimizationLevel: 7,
		    	        options: { cache: false }
		    	      },
		    	      files: [
		    	        {
		    	          // Set to true to enable the following options…
		    	          expand: true,
		    	          // cwd is 'current working directory'
		    	          cwd: 'src/img/',
		    	          src: ['**/*.png'],
		    	          // Could also match cwd line above. i.e. project-directory/img/
		    	          dest: 'build/img/',
		    	          ext: '.png'
		    	        }
		    	      ]
		    	    },
		    	    jpg: {
		    	      options: {
		    	        progressive: true
		    	      },
		    	      files: [
		    	        {
		    	          // Set to true to enable the following options…
		    	          expand: true,
		    	          // cwd is 'current working directory'
		    	          cwd: 'src/img/',
		    	          src: ['**/*.jpg'],
		    	          // Could also match cwd. i.e. project-directory/img/
		    	          dest: 'img/',
		    	          ext: '.jpg'
		    	        }
		    	      ]
		    	    }
		    	  },
		      
		    	    sass: { // sass tasks
		    	        dist: {
		    	          options: {
		    	            compass: true, // enable the combass lib, more on this later
		    	            style: 'expanded' // we don't want to compress it
		    	          },
		    	          files: {
		    	            'build/styles/app.css': 'src/styles/application.scss' // this is our main scss file
		    	          }
		    	        }
		    	      },
		    	      cssmin: { // minifying css task
		    	          dist: {
		    	            files: {
		    	              'css/style.min.css': 'build/styles/app.css'
		    	            }
		    	          }
		    	        },
		    	        
		    	        
		  			  copy: { 
					//	  css: {
					//		    expand: true,
					//		    src: 'css/**',
					//		    dest: '../../../../mobile/cordova/workout-companion/www',
					//	  },
					//	  js: {
					//		    expand: true,
					//		    src: 'js/**',
					//		    dest: '../../../../mobile/cordova/workout-companion/www',
					//	  },
					//	  html: {
					//		    src: 'index.html',
					//		    dest: '../../../../mobile/cordova/workout-companion/www/index.html',
					//	  },

						},
						
		watch : {
			sass_css : {
				files : 'src/styles/*.scss',
				tasks : [ 'sass', 'cssmin' ]
			},
			js : {
				files : 'src/js/main/*.js',
				tasks : [ 'uglify']
			}
		}

	});

//	grunt.registerTask('default', [ 'watch' ]);
	grunt.registerTask('css', [ 'sass', 'cssmin' ]);
	grunt.registerTask('js', [ 'uglify' ]);
	grunt.registerTask('image', ['imagemin']);
	grunt.registerTask('bundle', ['copy']);
	grunt.registerTask('watch', ['watch']);

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
};