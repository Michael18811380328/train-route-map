class Train {
  constructor(obj) {
    this.id = obj.id; // 火车ID，唯一
    this.train_number = obj.train_number; // 火车编号，唯一
    this.start = obj.start; // 火车起点站ID
    this.end = obj.end; // 火车终点站ID
    this.color = obj.color; // 火车颜色，表示火车等级，默认为黑色
    this.times = obj.times; // 火车运行时刻表数组，单位分钟，0 表示 0:00，例如 [480, 485] 表示火车在 8:00、8:05 分别到达各个站点
    this.stations = obj.stations; // 火车经过的站点 id 数组，每一项是 Station 对象的 ID 数组
  }
}

export default Train;
