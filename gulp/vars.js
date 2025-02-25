const dirs = {
  public: 'public/**/*.*',
  src: {
    pages: ['src/pages/*.html', '!src/pages/_*.html'],
    styles: ['src/styles/*.scss', '!src/styles/_*.scss'],
    scripts: 'src/scripts/*.js',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*',
    video: 'src/video/**/*.*',
  },
  dist: {
    root: 'dist',
    styles: 'dist/styles',
    scripts: 'dist/scripts',
    img: 'dist/img/',
    fonts: 'dist/fonts',
    video: 'dist/video',
  },
  watch: {
    pages: 'src/pages/**/*.html',
    styles: 'src/styles/**/*.scss',
    scripts: 'src/scripts/**/*.js',
    img: 'src/img/**/*.*',
  },
}

export { dirs }
