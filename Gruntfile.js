module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readeJSON('package.json'),

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					$: true
				}
			},
			<%= pkg.name %>: {
				src: ['src/js/**/*.js']
			}
		},
	});
};