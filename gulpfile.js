// Pref
const devindex = mhtml; // mhtml, mpug
const devstyle = scss;
// End pref

// main
import gulp from "gulp";
import { path } from "./res/g_config/path.js";
import { plugins } from "./res/g_config/plugins.js";
import { server } from "./res/g_tasks/server.js";
// tasks
import * as resets from "./res/g_tasks/del.js";
import { copy, copyv } from "./res/g_tasks/copy.js";
import { mhtml, mpug } from "./res/g_tasks/html.js";
import { scss, less, fontsCss } from "./res/g_tasks/styles.js";
import { scripts } from "./res/g_tasks/scripts.js";
import { images } from "./res/g_tasks/imgs.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./res/g_tasks/fonts.js";
import { svgSprite, svgSpriteBuild } from "./res/g_tasks/sprites.js";

// Globs
global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path,
  gulp,
  plugins
};

function overwatch() {
  gulp.watch(app.path.watch[devindex.name], {delay: 800}, gulp.series(resets.rh, devindex));
  gulp.watch(app.path.watch[devstyle.name], {delay: 800}, gulp.series(resets.rc, devstyle));
  gulp.watch(app.path.watch.js, gulp.series(resets.rjs, scripts));
  gulp.watch(app.path.watch.imgs, gulp.series(resets.rimg, images));
  gulp.watch(app.path.watch.svgs, gulp.series(resets.rsvg, svgSprite));
  gulp.watch(app.path.watch.vid, copyv);
}

const fonts = gulp.series(copy, otfToTtf, ttfToWoff, fontsStyle);
const fontcss = gulp.series(fontsCss)
const vid = copyv;
const resetGulp = gulp.series(resets.rh, resets.rc, resets.rjs, resets.rimg, resets.rsvg);
const baseGulp = gulp.parallel(devindex, devstyle, scripts, images, svgSprite);
const dev = gulp.series(resetGulp, baseGulp, gulp.parallel(overwatch, server));
const build = gulp.series(resetGulp, baseGulp, fontcss, resets.rsvgb, svgSpriteBuild);

gulp.task("default", dev);

//exports

export { dev };
export { build };
export { resetGulp };
export { svgSprite };
export { fonts };
export { fontcss };
export { vid };
