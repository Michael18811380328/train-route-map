import cookie from 'react-cookies'
import { Station, Train, Route } from '../modals'
import { calculateStations, calculateRoutes, calculateTrains } from '../utils'

const zoom = Number(cookie.load('map-zoom')) || 1;

let stations = [];

// 东北
stations.push(
  new Station({ id: '05-014', x: 5000, y: 1515, name: '沈阳', size: 3 }),
  new Station({ id: '05-015', x: 4995, y: 1570, name: '沈阳南', size: 2 }),
  new Station({ id: '05-016', x: 5030, y: 1578, name: '本溪新城', size: 2 }),
  new Station({ id: '05-017', x: 5050, y: 1598, name: '本溪', size: 2 }),
  new Station({ id: '05-018', x: 5070, y: 1618, name: '南芬北', size: 2 }),
  new Station({ id: '05-019', x: 5090, y: 1638, name: '通远堡西', size: 2 }),
  new Station({ id: '05-020', x: 5110, y: 1658, name: '凤城东', size: 2 }),
  new Station({ id: '05-021', x: 5130, y: 1678, name: '五龙背东', size: 2 }),
  new Station({ id: '05-022', x: 5135, y: 1710, name: '丹东', size: 3 }),

  // 丹大高铁
  new Station({ id: '05-023', x: 5133, y: 1737, name: '丹东西', size: 2 }),
  new Station({ id: '05-024', x: 5113, y: 1752, name: '东港北', size: 2 }),
  new Station({ id: '05-025', x: 5061, y: 1748.5, name: '北井子', size: 2 }),
  new Station({ id: '05-026', x: 5045, y: 1765.5, name: '大孤山', size: 2 }),
  new Station({ id: '05-027', x: 5030, y: 1780.5, name: '青堆', size: 2 }),
  new Station({ id: '05-028', x: 5017, y: 1796.5, name: '庄河北', size: 2 }),
  new Station({ id: '05-029', x: 5000, y: 1804.5, name: '花园口', size: 2 }),
  new Station({ id: '05-030', x: 4978, y: 1822.5, name: '城子坦', size: 2 }),
  new Station({ id: '05-031', x: 4973, y: 1857, name: '皮口', size: 2 }),
  new Station({ id: '05-032', x: 4953, y: 1872, name: '杏树屯', size: 2 }),
  new Station({ id: '05-033', x: 4933, y: 1887, name: '登沙河', size: 2 }),
  new Station({ id: '05-034', x: 4913, y: 1902, name: '广宁寺', size: 2 }),
  new Station({ id: '05-035', x: 4893, y: 1917, name: '金州', size: 2 }),
  new Station({ id: '05-036', x: 4873, y: 1932, name: '大连北', size: 2 }),
  new Station({ id: '05-037', x: 4880, y: 1924, name: '大连', size: 3 }),

  // 哈大高铁
  new Station({ id: '05-068', x: 5370, y: 990, name: '哈尔滨', size: 3 }),
  new Station({ id: '05-056', x: 5350, y: 1020, name: '哈尔滨西', size: 3 }),
  new Station({ id: '05-055', x: 5338, y: 1038.5, name: '双城北', size: 2 }),
  new Station({ id: '05-054', x: 5303, y: 1088.5, name: '扶余北', size: 2 }),
  new Station({ id: '05-053', x: 5268, y: 1138.5, name: '德惠西', size: 2 }),
  new Station({ id: '05-052', x: 5233, y: 1188.5, name: '长春西', size: 2 }),
  new Station({ id: '05-051', x: 5198, y: 1238.5, name: '公主岭南', size: 2 }),
  new Station({ id: '05-050', x: 5163, y: 1288.5, name: '四平东', size: 2 }),
  new Station({ id: '05-049', x: 5128, y: 1338.5, name: '昌图西', size: 2 }),
  new Station({ id: '05-048', x: 5093, y: 1388.5, name: '开原西', size: 2 }),
  new Station({ id: '05-047', x: 5058, y: 1438.5, name: '铁岭西', size: 2 }),
  new Station({ id: '05-046', x: 5023, y: 1488.5, name: '沈阳北', size: 2 }),
  new Station({ id: '05-038', x: 4975.3, y: 1581, name: '辽阳', size: 2 }),
  new Station({ id: '05-039', x: 4962.6, y: 1624, name: '鞍山西', size: 2 }),
  new Station({ id: '05-040', x: 4949.9, y: 1667, name: '海城西', size: 2 }),
  new Station({ id: '05-041', x: 4962, y: 1710, name: '营口东', size: 2 }),
  new Station({ id: '05-042', x: 4924.5, y: 1753, name: '盖州西', size: 2 }),
  new Station({ id: '05-043', x: 4911.8, y: 1796, name: '鲅鱼圈', size: 2 }),
  new Station({ id: '05-044', x: 4934, y: 1839, name: '瓦房店西', size: 2 }),
  new Station({ id: '05-045', x: 4921, y: 1874.5, name: '金普', size: 2 }),

  // 秦沈客专
  new Station({ id: '05-057', x: 4721, y: 1780, name: '秦皇岛', size: 2 }),
  new Station({ id: '05-058', x: 4735, y: 1763, name: '山海关', size: 2 }),
  new Station({ id: '05-059', x: 4775, y: 1732, name: '东戴河', size: 2 }),
  new Station({ id: '05-060', x: 4781, y: 1703, name: '绥中北', size: 2 }),
  new Station({ id: '05-061', x: 4808, y: 1677, name: '兴城西', size: 2 }),
  new Station({ id: '05-062', x: 4830, y: 1647, name: '葫芦岛北', size: 2 }),
  new Station({ id: '05-063', x: 4883, y: 1636, name: '锦州南', size: 2 }),
  new Station({ id: '05-064', x: 4910, y: 1612, name: '凌海南', size: 2 }),
  new Station({ id: '05-065', x: 4937, y: 1588, name: '盘锦北', size: 2 }),
  new Station({ id: '05-066', x: 4964, y: 1564, name: '台安', size: 2 }),
  new Station({ id: '05-067', x: 4991, y: 1540, name: '辽中', size: 2 }),
);

stations.push(
  // 北京地区
  new Station({ id: '01-020', x: 4404, y: 1804, name: '北京', size: 3 }),
  new Station({ id: '01-021', x: 4415, y: 1829, name: '北京南', size: 3 }),
  new Station({ id: '01-022', x: 4354, y: 1801, name: '北京西', size: 3 }),
  new Station({ id: '01-023', x: 4347, y: 1834, name: '北京丰台', size: 2.5 }),
  // 京哈高铁
  new Station({ id: '01-001', x: 4417, y: 1778, name: '北京朝阳', size: 3 }),
  new Station({ id: '01-002', x: 4447, y: 1765, name: '顺义西', size: 2 }),
  new Station({ id: '01-003', x: 4477, y: 1752, name: '怀柔南', size: 2 }),
  new Station({ id: '01-004', x: 4507, y: 1739, name: '密云', size: 2 }),
  new Station({ id: '01-005', x: 4537, y: 1726, name: '兴隆西', size: 2 }),
  new Station({ id: '01-006', x: 4567, y: 1713, name: '安匠', size: 2 }),
  new Station({ id: '01-007', x: 4597, y: 1700, name: '承德南', size: 2 }),
  new Station({ id: '01-008', x: 4627, y: 1687, name: '承德县北', size: 2 }),
  new Station({ id: '01-009', x: 4657, y: 1674, name: '平泉北', size: 2 }),
  new Station({ id: '01-010', x: 4687, y: 1661, name: '牛河梁', size: 2 }),
  new Station({ id: '01-011', x: 4717, y: 1648, name: '喀左', size: 2 }),
  new Station({ id: '01-012', x: 4747, y: 1635, name: '奈林皋', size: 2 }),
  new Station({ id: '01-013', x: 4777, y: 1622, name: '辽宁朝阳', size: 2 }),
  new Station({ id: '01-014', x: 4807, y: 1609, name: '北票', size: 2 }),
  new Station({ id: '01-015', x: 4837, y: 1596, name: '乌兰木图', size: 2 }),
  new Station({ id: '01-016', x: 4867, y: 1583, name: '阜新', size: 2 }),
  new Station({ id: '01-017', x: 4897, y: 1570, name: '黑山北', size: 2 }),
  new Station({ id: '01-018', x: 4927, y: 1557, name: '新民北', size: 2 }),
  new Station({ id: '01-019', x: 4959, y: 1511, name: '沈阳西', size: 2 }),

  // 京唐城际
  // new Station({ id: '01-020', x: 4404, y: 1804, name: '北京', size: 3 }),
  new Station({ id: '02-002', x: 4438, y: 1798, name: '燕郊', size: 2 }),
  new Station({ id: '02-003', x: 4472, y: 1792, name: '大厂', size: 2 }),
  new Station({ id: '02-004', x: 4506, y: 1786, name: '香河', size: 2 }),
  new Station({ id: '02-005', x: 4540, y: 1780, name: '宝坻', size: 2 }),
  new Station({ id: '02-006', x: 4574, y: 1774, name: '玉田南', size: 2 }),
  new Station({ id: '02-007', x: 4596, y: 1800.5, name: '唐山西', size: 2 }),
  new Station({ id: '02-001', x: 4612, y: 1812.5, name: '唐山', size: 2 }),

  // 京沪高铁
  new Station({ id: '01-028', x: 4428, y: 1923, name: '廊坊', size: 2 }),
  new Station({ id: '01-029', x: 4455, y: 1971, name: '天津南', size: 2 }),
  new Station({ id: '01-030', x: 4459, y: 2079, name: '沧州西', size: 2 }),
  new Station({ id: '01-031', x: 4467, y: 2205, name: '德州东', size: 2 }),
  new Station({ id: '01-032', x: 4480, y: 2299, name: '济南西', size: 2 }),
  new Station({ id: '01-033', x: 4493, y: 2393, name: '泰安', size: 2 }),
  new Station({ id: '01-034', x: 4506, y: 2449, name: '曲阜东', size: 2 }),
  new Station({ id: '01-035', x: 4509, y: 2481, name: '滕州东', size: 2 }),
  new Station({ id: '01-036', x: 4516, y: 2511, name: '枣庄', size: 2 }),
  new Station({ id: '01-037', x: 4551, y: 2564, name: '徐州东', size: 2 }),
  new Station({ id: '01-038', x: 4596, y: 2677, name: '宿州东', size: 2 }),
  new Station({ id: '01-039', x: 4657, y: 2773, name: '蚌埠南', size: 2 }),
  new Station({ id: '01-040', x: 4683, y: 2821, name: '滁州南', size: 2 }),
  new Station({ id: '01-041', x: 4711.5, y: 2852, name: '南京南', size: 2 }),
  new Station({ id: '01-043', x: 4757.5, y: 2862, name: '镇江南', size: 2 }),
  new Station({ id: '01-044', x: 4803.5, y: 2872, name: '丹阳北', size: 2 }),
  new Station({ id: '01-045', x: 4850.5, y: 2882, name: '常州北', size: 2 }),
  new Station({ id: '01-046', x: 4897.5, y: 2892, name: '无锡东', size: 2 }),
  new Station({ id: '01-047', x: 4944.5, y: 2902, name: '苏州北', size: 2 }),
  new Station({ id: '01-048', x: 4991.5, y: 2912, name: '昆山南', size: 2 }),
  new Station({ id: '01-042', x: 5033.5, y: 2922, name: '上海虹桥', size: 2 }),
  
  // 京津高铁
  // new Station({ id: '01-021', x: 4415, y: 1829, name: '北京南', size: 3 }),
  new Station({ id: '01-050', x: 4440, y: 1870, name: '武清', size: 2 }),
  new Station({ id: '01-051', x: 4470, y: 1895, name: '天津', size: 3 }),
  new Station({ id: '01-052', x: 4485, y: 1910, name: '军粮城北', size: 2 }),
  new Station({ id: '01-053', x: 4500, y: 1930, name: '塘沽', size: 2 }),
  new Station({ id: '01-054', x: 4505, y: 1950.5, name: '滨海', size: 2 }),  
)

// 长珲城际铁路
stations.push(
  new Station({ id: '06-001', x: 5259, y: 1187, name: '长春', size: 2 }),
  new Station({ id: '06-002', x: 5280, y: 1191, name: '龙嘉', size: 2 }),
  new Station({ id: '06-003', x: 5349, y: 1195, name: '九台南', size: 2 }),
  new Station({ id: '06-004', x: 5394, y: 1199, name: '双吉', size: 2 }),
  new Station({ id: '06-005', x: 5439, y: 1203, name: '吉林', size: 2 }),
  new Station({ id: '06-006', x: 5484, y: 1207, name: '蛟河西', size: 2 }),
  new Station({ id: '06-007', x: 5529, y: 1211, name: '敦化', size: 2 }),
  new Station({ id: '06-008', x: 5574, y: 1215, name: '大石头南', size: 2 }),
  new Station({ id: '06-009', x: 5619, y: 1219, name: '安图西', size: 2 }),
  new Station({ id: '06-010', x: 5664, y: 1223, name: '延吉西', size: 2 }),
  new Station({ id: '06-011', x: 5699, y: 1227, name: '图们北', size: 2 }),
  new Station({ id: '06-012', x: 5716, y: 1196, name: '珲春', size: 2 }),
);

// 京广高铁（北京-武汉）
stations.push(
  // new Station({ id: '01-023', x: 4347, y: 1834, name: '北京丰台', size: 2.5 }),
  new Station({ id: '06-025', x: 4287, y: 1900, name: '涿州东', size: 2 }),
  new Station({ id: '06-026', x: 4261, y: 1950, name: '高碑店东', size: 2 }),
  new Station({ id: '06-027', x: 4235, y: 2000, name: '保定东', size: 2 }),
  new Station({ id: '06-028', x: 4220, y: 2080, name: '定州东', size: 2 }),
  new Station({ id: '06-029', x: 4243, y: 2130, name: '正定机场', size: 2 }),
  new Station({ id: '06-024', x: 4235, y: 2164.5, name: '石家庄', size: 2 }),
  new Station({ id: '06-032', x: 4224, y: 2207, name: '高邑西', size: 2 }),
  new Station({ id: '06-033', x: 4227, y: 2255, name: '邢台东', size: 2 }),
  new Station({ id: '06-034', x: 4227, y: 2319, name: '邯郸东', size: 2 }),
  new Station({ id: '06-035', x: 4224, y: 2395.5, name: '安阳东', size: 2 }),
  new Station({ id: '06-036', x: 4219, y: 2443, name: '鹤壁东', size: 2 }),
  new Station({ id: '06-037', x: 4215, y: 2505.5, name: '新乡东', size: 2 }),
  new Station({ id: '06-030', x: 4152, y: 2566, name: '郑州东', size: 2 }),
  new Station({ id: '06-038', x: 4140, y: 2612, name: '许昌东', size: 2 }),
  new Station({ id: '06-039', x: 4128, y: 2660, name: '漯河西', size: 2 }),
  new Station({ id: '06-040', x: 4115, y: 2710, name: '驻马店西', size: 2 }),
  new Station({ id: '06-041', x: 4103, y: 2760, name: '明港东', size: 2 }),
  new Station({ id: '06-042', x: 4091, y: 2810, name: '信阳东', size: 2 }),
  new Station({ id: '06-043', x: 4080, y: 2860, name: '孝感北', size: 2 }),
  new Station({ id: '06-031', x: 4082, y: 2965.5, name: '武汉', size: 2 }),

  // 石济客专
  // new Station({ id: '06-024', x: 4235, y: 2164.5, name: '石家庄', size: 2 }),
  new Station({ id: '06-044', x: 4300, y: 2180, name: '藁城南', size: 2 }),
  new Station({ id: '06-045', x: 4350, y: 2190, name: '辛集南', size: 2 }),
  new Station({ id: '06-046', x: 4400, y: 2200, name: '衡水北', size: 2 }),
  new Station({ id: '06-047', x: 4450, y: 2205, name: '景州', size: 2 }),
  // new Station({ id: '01-031', x: 4467, y: 2205, name: '德州东', size: 2 }),
  new Station({ id: '06-048', x: 4494, y: 2205, name: '平原东', size: 2 }),
  new Station({ id: '06-049', x: 4492, y: 2240.5, name: '禹城东', size: 2 }),
  new Station({ id: '06-050', x: 4517, y: 2276, name: '齐河', size: 2 }),
  new Station({ id: '06-051', x: 4525, y: 2288.5, name: '济南东', size: 2 }),
  new Station({ id: '06-052', x: 4502, y: 2295.5, name: '济南', size: 2 }),

  // 济郑高铁
  // new Station({ id: '06-030', x: 4152, y: 2566, name: '郑州东', size: 2 }),
  new Station({ id: '06-053', x: 4185, y: 2544.5, name: '新乡南', size: 2 }),
  // new Station({ id: '06-037', x: 4215, y: 2505.5, name: '新乡东', size: 2 }),
  new Station({ id: '06-054', x: 4220, y: 2486, name: '卫辉南', size: 2 }),
  new Station({ id: '06-055', x: 4245, y: 2467, name: '滑浚', size: 2 }),
  new Station({ id: '06-056', x: 4270, y: 2448, name: '内黄', size: 2 }),
  new Station({ id: '06-057', x: 4295, y: 2430, name: '濮阳东', size: 2 }),
  new Station({ id: '06-058', x: 4320, y: 2411, name: '南乐', size: 2 }),
  new Station({ id: '06-059', x: 4345, y: 2392, name: '莘县', size: 2 }),
  new Station({ id: '06-060', x: 4370, y: 2373, name: '聊城西', size: 2 }),
  new Station({ id: '06-061', x: 4395, y: 2354, name: '茌平南', size: 2 }),
  new Station({ id: '06-062', x: 4420, y: 2335, name: '长清', size: 2 }),
  // new Station({ id: '01-032', x: 4480, y: 2299, name: '济南西', size: 2 }),

  // 津秦高速铁路:
  new Station({ id: '06-064', x: 4517, y: 1926.5, name: '滨海西', size: 2 }),
  new Station({ id: '06-065', x: 4539, y: 1893.5, name: '滨海北', size: 2 }),
  new Station({ id: '06-067', x: 4658, y: 1814.5, name: '滦河', size: 2 }),
  new Station({ id: '06-068', x: 4703, y: 1801.5, name: '北戴河', size: 2 }),
)



if (zoom > 1) {
  stations = calculateStations(stations, zoom);
}

const stationMap = {}
for (let i = 0; i < stations.length; i++) {
  stationMap[stations[i].id] = stations[i];
}

export { stations, stationMap };
