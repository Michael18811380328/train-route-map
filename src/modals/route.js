class Route {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.color = obj.color || 'black'; // red, green, or black
    this.speed = obj.speed || 100; // 100, 200, 350
    this.line_number = obj.line_number;
    this.points = obj.points; // array of Station objects
  }
}

export default Route;
