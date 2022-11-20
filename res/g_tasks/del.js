import {deleteAsync} from "del";

export const rh = () => {
  return deleteAsync(app.path.clean.html);
};

export const rc = () => {
  return deleteAsync(app.path.clean.css);
};

export const rjs = () => {
  return deleteAsync(app.path.clean.js);
};

export const rimg = () => {
  return deleteAsync(app.path.clean.imgs);
};

export const rsvg = () => {
  return deleteAsync(app.path.clean.svgs);
};

export const rsvgb = () => {
  return deleteAsync(`${app.path.build.imgs}/stack`);
};