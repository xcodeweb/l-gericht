"use strict";
import "./modules/test-webp.js";
import "./modules/burger.js";
import { ImageSwitcher } from "./modules/image-switcher.js";

const switcher = new ImageSwitcher(["image-1", "image-2"], 10000);

document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
