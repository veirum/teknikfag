class Tile {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    this.type = 1;
  }

  show() {
    rect(this.x, this.y, this.w, this.h);
  }
}
