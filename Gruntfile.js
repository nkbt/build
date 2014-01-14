'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		buster: {
			test: {
				config: 'test/buster.js'
			}
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: 'js',
					appDir: 'public',
					dir: 'build',
					siteRoot: '../',
					modules: [
						{
							name: 'prod'
						}
					],
					paths: {
						underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
						dom: '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
						bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.2/js/bootstrap.min'
					},
					mainConfigFile: './public/js/prod.js',
					useStrict: true,
					generateSourceMaps: true,
					preserveLicenseComments: false,
					findNestedDependencies: true,
					optimize: 'uglify2',

					buildCSS: true,
					separateCSS: false,
					optimizeCss: "node",
					cssBase: "css/"
				}

			}
		},
		jshint: {
			options: {
			},
			gruntfile: {
				src: 'Gruntfile.js',
				options: {
					jshintrc: '.jshintrc'
				}
			},
			test: {
				src: ['test/**/*.js'],
				options: {
					jshintrc: '.jshintrc'
				}
			},
			browser: {
				src: [
					'public/js/**/*.js',
					'!public/js/vendor/**/*.js'
				],
				options: {
					jshintrc: 'public/.jshintrc'
				}
			}
		},
		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			test: {
				files: '<%= jshint.test.src %>',
				tasks: ['jshint:test', 'buster']
			},
			browser: {
				files: '<%= jshint.browser.src %>',
				tasks: ['jshint:browser']
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-buster');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	// Default task.
	grunt.registerTask('default', ['jshint', 'buster', 'requirejs']);

};
