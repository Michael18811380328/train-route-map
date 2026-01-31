class Station {
  constructor(obj) {
    this.id = obj.id; // 站点ID，唯一
    this.x = obj.x; // 站点的x坐标
    this.y = obj.y; // 站点的y坐标
    this.name = obj.name; // 站点名称
    this.size = obj.size; // 表示等级，1-5，数字越大等级越高
    this.province_id = obj.province_id; // 省份ID
  }
}

export default Station;
