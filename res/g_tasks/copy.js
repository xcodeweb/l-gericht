export const copy = () => {
  return app.gulp.src(app.path.src.fonts)
    .pipe(app.gulp.dest(app.path.build.html))
}

export const copyv = () => {
  return app.gulp.src(app.path.src.vid)
    .pipe(app.gulp.dest(app.path.build.vid))
}