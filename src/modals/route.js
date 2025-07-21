class Route {
  constructor(obj) {
    this.id = obj.id; // 路线ID，唯一
    this.name = obj.name; // 路线名称
    this.color = obj.color || 'black'; // 路线颜色，表示路线等级，默认为黑色
    this.speed = obj.speed || 100; // 路线速度，单位为km/h，默认为100
    this.line_number = obj.line_number; // 路线个数，表示单线或者复现，范围 1-4，默认为1
    this.points = obj.points; // 路线经过的站点，每一项是 Station 对象的 ID 数组
  }
}

export default Route;
