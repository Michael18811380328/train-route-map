class Train {
  constructor(obj) {
    this.id = obj.id;
    this.train_number = obj.train_number;
    this.start = obj.start;
    this.end = obj.end;
    this.color = obj.color;
    this.times = obj.times;
    this.stations = obj.stations;
  }
}

export default Train;
