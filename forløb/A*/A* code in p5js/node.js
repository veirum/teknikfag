class Node {
  constructor(i, j) {
    this.h = 0;
    this.g = 0;
    this.f = 0;
    this.x = i;
    this.y = j;
  }

  show(col) {
    fill(col);
    noStroke();
    rect(
      this.x * (width / cols),
      this.y * (height / rows),
      width / cols - 1,
      height / rows - 1
    );
  }
}
