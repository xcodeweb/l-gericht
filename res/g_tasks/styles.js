import mainSass from "sass";
import gulpSass from "gulp-sass";
import gulpLess from "gulp-less";
import rename from "gulp-rename";
import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcssfix";
import autoprefixer from "gulp-autoprefixer";
import groupQueries from "gulp-group-css-media-queries";

const sass = gulpSass(mainSass);

export const scss = () => {
  return app.gulp
    .src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>"
        })
      )
    )
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(app.plugins.if(app.isBuild, groupQueries()))
    .pipe(
      webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
      })
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 5 versions"],
          cascade: true
        })
      )
    )
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(app.plugins.replace(/@vid\//g, "../video/"))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};

export const less = () => {
  return app.gulp
    .src(app.path.src.less, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "LESS",
          message: "Error: <%= error.message %>"
        })
      )
    )
    .pipe(gulpLess())
    .pipe(app.plugins.if(app.isBuild, groupQueries()))
    .pipe(
      webpcss({
        webpClass: ".webp",
        noWebpClass: ".no-webp"
      })
    )
    .pipe(
      app.plugins.if(
        app.isBuild,
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 5 versions"],
          cascade: true
        })
      )
    )
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(app.plugins.replace(/@img\//g, "../img/"))
    .pipe(app.plugins.replace(/@vid\//g, "../video/"))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browsersync.stream());
};

export const fontsCss = () => {
  return app.gulp
    .src(app.path.src.fontCss, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error: <%= error.message %>"
        })
      )
    )
    .pipe(
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(app.plugins.if(app.isBuild, cleanCss()))
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(app.gulp.dest(app.path.build.css));
};
