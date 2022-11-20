import webpack from "webpack-stream";
import { configWebpack } from "../g_config/webpack.config.js";

export const scripts = () => {
  return app.gulp
    .src(app.path.src.js, { sourcemaps: app.isDev })
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "JS",
          message: "Error: <%= error.message %>"
        })
      )
    )
    .pipe(webpack(configWebpack()))
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browsersync.stream());
};
