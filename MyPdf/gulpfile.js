var gulp = require('gulp')
var argv = require('yargs').argv,
    spawn = require('child_process').spawn,
    node;
var livereload = require('gulp-livereload');

gulp.task('server', function() {
      if (node) node.kill()
      node = spawn('node', ['app.js',argv.f], {stdio: 'inherit'})
    node.on('close', function (code) {
        if (code === 8) {
                  gulp.log('Error detected, waiting for changes...');
        }
    });

})
gulp.task('default',function(){
    gulp.run('server')
    console.log('watching',argv.f)
    gulp.watch(argv.f)
        .on('change',function(event){
        console.log('File',event.path,'was',event.type)
            livereload.listen();
    })
})
process.on('exit', function() {
        if (node) node.kill()

})
          
