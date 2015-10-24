var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('streamify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var runSeq = require('run-sequence')

var path = {
    HTML: 'src/views/index.html',
    MINIFIED_OUT: 'build.min.js',
    OUT: 'build.js',
    DEST: 'dist',
    DEST_BUILD: 'dist/build',
    DEST_SRC: 'dist/src',
    ENTRY_POINT: './src/js/App.js',
    FONTS: './src/fonts',
    FONT_DEST: './dist/fonts'
};

gulp.task('copy', function() {
    gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
    gulp.watch(path.HTML, ['copy']);
    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true,
    }));
    return watcher.on('update', function() {
        watcher.bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC))
        console.log('Updated');
    })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));


});

gulp.task('buildJS', function() {
    browserify({
        entries: [path.ENTRY_POINT],
        transform:[reactify]
    })
    .bundle()
    .pipe(streamify(uglify(path.MINIFIED_OUT)))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('buildCSS', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(notify({message: 'CSS tasks complete'}));
});

gulp.task('replaceHTML', function() {
    gulp.src(path.HTML)
    .pipe(htmlreplace({
            'js': 'build/' + path.MINIFED_OUT
        }))
    .pipe(gulp.dest(path.DEST));
});
gulp.task('buildFonts', function() {
    gulp.src(path.FONTS)
    .pipe(gulp.dest(path.DEST));
    gulp.src('./src/fonts/*.otf')
    .pipe(gulp.dest(path.FONT_DEST));
})

gulp.task('production', ['replaceHTML', 'buildJS', 'buildCSS', 'buildFonts']);

gulp.task('default',function() {
    gulp.watch('./src/scss/**/*.scss', function() {
        runSeq('buildCSS');
    });
    gulp.watch(path.HTML, ['copy']);
    var watcher = watchify(browserify({
        entries: [path.ENTRY_POINT],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true,
    }));
    return watcher.on('update', function() {
        watcher.bundle()
            .pipe(source(path.OUT))
            .pipe(gulp.dest(path.DEST_SRC))
        console.log('Updated');
    })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(gulp.dest(path.DEST_SRC));

});

