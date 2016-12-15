var gulp = require('gulp'),
        less = require('gulp-less'),
        livereload = require('gulp-livereload');

var argv = require('yargs').argv;

gulp.task('less', function() {
      gulp.src(argv.f)
        .pipe(livereload());

});

gulp.task('watch', function() {
      livereload.listen(3000);
      // livereload.listen({ port: 1234, basePath: 'dist'  });
       gulp.watch('less/*.less', ['less']);
    
});
