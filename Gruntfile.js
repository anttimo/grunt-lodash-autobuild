/*
 * grunt-lodash-autobuild
 * https://github.com/jjt/grunt-lodash-autobuild
 *
 * Copyright (c) 2013 jjt
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    lodashAutobuild: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options': ['test/fixtures/test.js', 'test/fixtures/test-2.js'],
        },
      }
      //custom_options: {
        //options: {
          //separator: ': ',
          //punctuation: ' !!!',
        //},
        //files: {
          //'tmp/custom_options': ['test/fixtures/test.js', 'test/fixtures/test-2.js'],
        //},
      //},
    },

    lodash: {
      build: {
        dest: 'tmp/build.js'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-lodash');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'lodashAutobuild', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
