import svgmin from "gulp-svgmin";
import cheerio from "gulp-cheerio";
import gulpSvg from "gulp-svg-sprite";

export const svgSprite = () => {
  return app.gulp
    .src(app.path.src.svgs)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    // .pipe(
    //   cheerio({
    //     run: function ($) {
    //       $("[fill]").removeAttr("fill");
    //       $("[stroke]").removeAttr("stroke");
    //       $("[style]").removeAttr("style");
    //     },
    //     parserOptions: {
    //       xmlMode: true
    //     }
    //   })
    // )
    .pipe(
      gulpSvg({
        mode: {
          stack: {
            sprite: `../sprite/sprite`,
            example: app.isBuild ? false : true
          }
        }
      })
    )
    .pipe(app.gulp.dest(app.path.build.imgs));
};

export const svgSpriteBuild = () => {
  return app.gulp
    .src(`${app.path.build.imgs}/sprite/sprite.svg`, { allowEmpty: true })
    .pipe(
      svgmin()
    )
    .pipe(app.gulp.dest(`${app.path.build.imgs}/sprite`));
};
