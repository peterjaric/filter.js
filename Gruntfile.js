module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    uglify: {
      options: {
        mangle: false
      },
      target: {
        files: {
          'dist/filter.min.js': ['filter.js', 'lib/json_query.js']
        }
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
          src: ['filter.js', 'lib/json_query.js'],
          dest: 'dist/filter.js',
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task
  grunt.registerTask('default', ['concat', 'uglify']);

  // Build task
  grunt.registerTask('build', ['concat', 'uglify']);
};
