module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
	  minify: {
		  src: 'css/main.css',
		  dest: 'css/main.min.css'
		}
	},
	uglify: {
		options: {
		  mangle: false
		},
		my_target: {
		  files: {
			'js/slipstream.min.js': ['js/slipstream.js']
		  }
		}
	  }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task(s).
  grunt.registerTask('default', ['cssmin']);
  //grunt.registerTask('uglify', ['uglify']);
};