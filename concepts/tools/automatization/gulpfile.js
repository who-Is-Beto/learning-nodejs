const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', (callback) => {
  console.log('building')
  setTimeout(
    console.log('starting...')
    , 1200
  )
})

gulp.task('serve', (callback) => {
  gulp.src('www')
    .pipe(server({
      livereload: true,
      ope: true,
    }))
})

/* gulp.task('serve', (callback) => {
  browserSync.init({
    server: './www',
    port: 8080
  })

  gulp.watch('www/*.html').on('change', browserSync.reload)
}) */

gulp.task('default', gulp.series('build', 'serve'))