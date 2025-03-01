class Route {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.color = obj.color || 'black';
    this.speed = obj.speed || 100;
    this.line_number = obj.line_number;
    this.points = obj.points;
  }
}

export default Route;
