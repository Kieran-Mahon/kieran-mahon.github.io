class Node {
  constructor(x, y, radius, speed, degree) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speed = speed;
    this.degree = degree;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}

module.exports = Node;
