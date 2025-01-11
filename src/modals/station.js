class Station {
  constructor(obj) {
    this.id = obj.id;
    this.x = obj.x;
    this.y = obj.y;
    this.name = obj.name;
    // size 表示车站等级
    // 参考: https://baike.baidu.com/item/%E4%B8%AD%E5%9B%BD%E9%93%81%E8%B7%AF%E8%BD%A6%E7%AB%99%E7%AD%89%E7%BA%A7/7035733
    // 对应关系：特等：3.5 一等：3 二等：2.5 三等：2 四等：1.5 五等 1
    this.size = obj.size;
  }
}

export default Station