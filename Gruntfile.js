module.exports = function(grunt) {

  grunt.initConfig({

    coffee: {
      compile: {
        expand: true,
        cwd: 'app/scripts/coffee',
        src: ['**/*.coffee'],
        dest:'app/scripts/js',
        ext: '.js'
      }
    },

    jasmine: {
      "component": {
        "src": "app/scripts/js/index.js",
        "options": {
          "specs": "tests/unit/index.js",
          "vendor": [
            "bower_components/rsvp/rsvp.js",
            "bower_components/zepto/zepto.js"
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-jasmine");

  grunt.registerTask('build', [
    'coffee',
    'jasmine'
  ]);

};
