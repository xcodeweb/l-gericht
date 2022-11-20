import fs from "fs";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";
const source_folder = "src"

export const otfToTtf = () => {
  return app.gulp.src(`${app.path.src.fonts}/*.otf`)
    .pipe(fonter({
      formats: ["ttf"]
    }))
    .pipe(app.gulp.dest(app.path.src.fonts))
}

export const ttfToWoff = () => {
  return app.gulp.src(`${app.path.src.fonts}/*.ttf`)
    .pipe(fonter({
      formats: ["woff"]
    }))
    .pipe(app.gulp.dest(app.path.build.fonts))
    .pipe(app.gulp.src(`${app.path.src.fonts}/*.ttf`))
    .pipe(ttf2woff2())
    .pipe(app.gulp.dest(app.path.build.fonts))
}

export async function fontsStyle(params) {
  let file_content = fs.readFileSync(source_folder + "/css/fonts.scss");
  if (file_content == file_content) {
    fs.writeFile(source_folder + "/css/fonts.scss", "@import '../dev-scss/font';\r\n", cb);
    return fs.readdir(app.path.build.fonts, function (err, items) {
      if (items) {
        let c_fontname;
        for (var i = 0; i < items.length; i++) {
          let fontname = items[i].split(".");
          fontname = fontname[0];
          if (c_fontname != fontname) {
            fs.appendFile(
              source_folder + "/css/fonts.scss",
              '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n',
              cb
            );
          }
          c_fontname = fontname;
        }
      }
    });
  }
}

function cb() {}