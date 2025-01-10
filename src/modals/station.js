class Station {
  constructor(obj) {
    this.id = obj.id;
    this.x = obj.x;
    this.y = obj.y;
    this.name = obj.name;
    this.size = obj.size; // size should be a number between 1 and 5
  }
}

export default Station