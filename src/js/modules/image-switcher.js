// Class props = array of images names

export class ImageSwitcher {
  constructor(imgs, timer = 10000, section = "header") {
    try {
      if (!Array.isArray(imgs)) {
        throw new Error("Incorrect attr in switcher. First attr is <Array>");
      }
    } catch (err) {
      console.log(err.message);
    }

    this.image = document.querySelector(`.${section}__image`);
    this.imgs = imgs;
    this.section = section;
    this.currentSlide = 0;
    this.createPaths();
    this.setSwitcher(timer);
  }
  createPaths() {
    const path = `img/${this.section}/`;
    const pathsArray = [];

    for (let i = 0; i < this.imgs.length; i++) {
      const item = path + this.imgs[i];
      pathsArray.push(item);
    }
    this.pathsArray = pathsArray;
  }

  setSwitcher(interval) {
    setInterval(() => {
      this.image
        .querySelector("img")
        .setAttribute("src", this.pathsArray[this.currentSlide] + ".jpg");

      this.image
        .querySelector("source")
        .setAttribute("srcset", this.pathsArray[this.currentSlide] + ".webp");

      if (this.currentSlide >= this.pathsArray.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide++;
      }
    }, interval);
  }
}
