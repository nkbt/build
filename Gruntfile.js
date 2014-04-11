'use strict';

module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		mocha_phantomjs: {
			options: {
				reporter: 'spec'
			},
			all: ['public/test/**/*.html']
		},
		requirejs: {
			compile: {
				options: {
					baseUrl: 'js',
					appDir: 'tmp/public',
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
					mainConfigFile: './tmp/public/js/prod.js',
					useStrict: true,
					preserveLicenseComments: false,
					findNestedDependencies: true,
//					No optimizations
//					optimize: 'uglify2',
//					generateSourceMaps: true,
					optimize: 'none',

					buildCSS: true,
					separateCSS: false,
					optimizeCss: 'node',
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
			browser: {
				src: ['public/js/**/*.js', '!public/js/vendor/**/*.js', '!public/test/**/*.js'],
				options: {
					jshintrc: 'public/.jshintrc'
				}
			},
			browserTest: {
				src: ['public/test/**/*.js', '!public/test/mocha.js', '!public/test/chai.js'],
				options: {
					jshintrc: 'public/test/.jshintrc'
				}
			}
		},
		watch: {
			gruntfile: {
				files: 'Gruntfile.js',
				tasks: ['jshint:gruntfile']
			},
			browser: {
				files: ['public/js/**/*.js', '!public/js/vendor/**/*.js'],
				tasks: ['jshint:browser']
			}
		},
		svgmin: {
			options: {
				plugins: [
					{
						removeViewBox: false
					},
					{
						removeUselessStrokeAndFill: false
					}
				]
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'tmp/public/img',
						src: ['**/*.svg'],
						dest: 'tmp/public/img',
						ext: '.svg'
					}
				]
			}
		},
		clean: {
			entity: {
				src: 'public/js/entity/**/*.js'
			},
			build: {
				src: 'build/'
			},
			tmp: {
				src: 'tmp/'
			}
		},
		copy: {
			main: {
				files: [
					{expand: true, src: ['public/**'], dest: 'tmp/'}
				]
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			dist: {
				expand: true,
				src: 'tmp/public/css/**/*.css'
			}
		}
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-mocha-phantomjs');
	grunt.loadNpmTasks('grunt-svgmin');
	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

//	grunt.registerTask('test', ['jshint', 'mocha_phantomjs']);
	grunt.registerTask('test', ['jshint']);
	grunt.registerTask('build', ['clean:build', 'copy', 'autoprefixer', 'svgmin', 'requirejs', 'clean:tmp']);
	grunt.registerTask('default', ['test', 'build']);
	grunt.registerTask('frontend', ['jshint:browser', 'jshint:browserTest', 'mocha_phantomjs']);
};
