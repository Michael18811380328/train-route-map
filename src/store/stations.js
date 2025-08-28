import Cookies from 'js-cookie';
import { Station } from '../modals'
import { calculateStations } from '../utils'

const zoom = Number(Cookies.get('map-zoom')) || 1;

let stations = [];

// 北京（01）
stations.push(
  new Station({ id: '01-001', x: 4402, y: 1770, name: '北京朝阳', size: 3 }),
  new Station({ id: '01-002', x: 4438, y: 1741, name: '密云', size: 2 }),
  new Station({ id: '01-020', x: 4389, y: 1811, name: '北京', size: 3 }),
  new Station({ id: '01-021', x: 4394, y: 1847, name: '北京南', size: 3 }),
  new Station({ id: '01-022', x: 4348, y: 1806, name: '北京西', size: 3 }),
  new Station({ id: '01-023', x: 4337, y: 1859, name: '丰台', size: 3 }),
  new Station({ id: '01-024', x: 4350, y: 1769, name: '北京北', size: 3 }),
  new Station({ id: '01-025', x: 4334, y: 1735.5, name: '延庆', size: 2 }),
);

// 天津-02
stations.push(
  new Station({ id: '02-001', x: 4470, y: 1895, name: '天津', size: 3 }),
  new Station({ id: '02-002', x: 4455, y: 1971, name: '天津南', size: 2 }),
  new Station({ id: '02-003', x: 4505, y: 1950, name: '滨海', size: 2 }),
  new Station({ id: '02-004', x: 4539, y: 1893, name: '滨海北', size: 2 }),
  new Station({ id: '02-005', x: 4483, y: 1852, name: '宝坻', size: 2 }),
  new Station({ id: '02-006', x: 4440, y: 1870, name: '武清', size: 2 }),
);

// 黑龙江(03)
stations.push(
  new Station({ id: '03-001', x: 5319, y: 980, name: '哈尔滨', size: 4 }),
  new Station({ id: '03-002', x: 5312, y: 1043, name: '双城', size: 2 }),
  new Station({ id: '03-003', x: 5088, y: 904, name: '大庆', size: 3 }),
  new Station({ id: '03-004', x: 4953, y: 812, name: '齐齐哈尔', size: 3 }),
  new Station({ id: '03-005', x: 5341, y: 845, name: '绥化', size: 3 }),
  new Station({ id: '03-006', x: 5538, y: 1050, name: '牡丹江', size: 3 }),
  new Station({ id: '03-007', x: 5702, y: 1098, name: '绥芬河', size: 2 }),
  new Station({ id: '03-008', x: 5076, y: 511, name: '嫩江', size: 2 }),
  new Station({ id: '03-009', x: 5224, y: 644, name: '北安', size: 2 }),
  new Station({ id: '03-010', x: 5127, y: 574, name: '五大连池', size: 2 }),
  new Station({ id: '03-011', x: 5259, y: 509, name: '孙吴', size: 2 }),
  new Station({ id: '03-012', x: 5161, y: 300, name: '黑河', size: 3 }),
  new Station({ id: '03-013', x: 5008, y: 708, name: '富裕', size: 2 }),
  new Station({ id: '03-014', x: 5034, y: 634, name: '讷河', size: 2 }),
  new Station({ id: '03-015', x: 5182, y: 952, name: '肇东', size: 2 }),
  new Station({ id: '03-016', x: 5286, y: 730, name: '绥棱', size: 2 }),
  new Station({ id: '03-017', x: 5397, y: 1017, name: '尚志', size: 2 }),
  new Station({ id: '03-018', x: 5450, y: 1041, name: '亚布力', size: 2 }),
  new Station({ id: '03-019', x: 5633, y: 1053, name: '下城子', size: 2 }),
);


// 吉林（04）
stations.push(
  new Station({ id: '04-001', x: 5233, y: 1188, name: '长春', size: 3 }),
  new Station({ id: '04-002', x: 5303, y: 1088, name: '扶余', size: 2 }),
  new Station({ id: '04-003', x: 5268, y: 1138, name: '德惠', size: 2 }),
  new Station({ id: '04-004', x: 5204, y: 1221, name: '公主岭', size: 2 }),
  new Station({ id: '04-005', x: 5155, y: 1320, name: '四平', size: 3 }),
  new Station({ id: '04-006', x: 5276, y: 1173, name: '龙嘉', size: 2 }),
  new Station({ id: '04-007', x: 5311, y: 1182, name: '九台', size: 2 }),
  new Station({ id: '04-008', x: 5349, y: 1196, name: '吉林', size: 3 }),
  new Station({ id: '04-009', x: 5543, y: 1250, name: '安图', size: 2 }),
  new Station({ id: '04-010', x: 5604, y: 1258, name: '延吉', size: 2 }),
  new Station({ id: '04-011', x: 5643, y: 1214, name: '图们', size: 2 }),
  new Station({ id: '04-012', x: 5702, y: 1225, name: '珲春', size: 3 }),
  new Station({ id: '04-013', x: 5414, y: 1210, name: '蛟河', size: 2 }),
  new Station({ id: '04-014', x: 5478, y: 1231, name: '敦化', size: 2 }),
);

// 辽宁（05）
stations.push(
  // 沈丹高铁
  new Station({ id: '05-014', x: 5000, y: 1515, name: '沈阳', size: 4 }),
  new Station({ id: '05-015', x: 4995, y: 1570, name: '沈阳南', size: 2 }),
  new Station({ id: '05-017', x: 5050, y: 1598, name: '本溪', size: 2 }),
  new Station({ id: '05-018', x: 5070, y: 1618, name: '南芬', size: 2 }),
  new Station({ id: '05-020', x: 5110, y: 1658, name: '凤城', size: 2 }),
  new Station({ id: '05-021', x: 5130, y: 1678, name: '五龙背', size: 2 }),
  new Station({ id: '05-022', x: 5135, y: 1710, name: '丹东', size: 3 }),
  // 丹大高铁
  new Station({ id: '05-024', x: 5113, y: 1752, name: '东港', size: 2 }),
  new Station({ id: '05-025', x: 5061, y: 1748, name: '北井子', size: 2 }),
  new Station({ id: '05-027', x: 5030, y: 1780, name: '青堆', size: 2 }),
  new Station({ id: '05-028', x: 5017, y: 1796, name: '庄河', size: 2 }),
  new Station({ id: '05-030', x: 4978, y: 1822, name: '城子坦', size: 2 }),
  new Station({ id: '05-031', x: 4973, y: 1857, name: '皮口', size: 2 }),
  new Station({ id: '05-035', x: 4893, y: 1917, name: '金州', size: 2 }),
  new Station({ id: '05-036', x: 4873, y: 1932, name: '大连', size: 3 }),
  // 哈大高铁
  new Station({ id: '05-049', x: 5142, y: 1365, name: '昌图', size: 2 }),
  new Station({ id: '05-048', x: 5093, y: 1388, name: '开原', size: 2 }),
  new Station({ id: '05-047', x: 5058, y: 1438, name: '铁岭', size: 2 }),
  new Station({ id: '05-046', x: 5023, y: 1488, name: '沈阳北', size: 2 }),
  new Station({ id: '05-039', x: 4962, y: 1624, name: '鞍山', size: 2 }),
  new Station({ id: '05-040', x: 4949, y: 1667, name: '海城', size: 2 }),
  new Station({ id: '05-041', x: 4962, y: 1710, name: '营口', size: 2 }),
  new Station({ id: '05-042', x: 4924, y: 1753, name: '盖州', size: 2 }),
  new Station({ id: '05-043', x: 4911, y: 1796, name: '鲅鱼圈', size: 2 }),
  new Station({ id: '05-044', x: 4934, y: 1839, name: '瓦房店', size: 2 }),
  new Station({ id: '05-045', x: 4921, y: 1874, name: '金普', size: 2 }),
  // 秦沈客专
  new Station({ id: '05-058', x: 4735, y: 1763, name: '山海关', size: 3 }),
  new Station({ id: '05-059', x: 4775, y: 1732, name: '东戴河', size: 2 }),
  new Station({ id: '05-060', x: 4781, y: 1703, name: '绥中', size: 2 }),
  new Station({ id: '05-061', x: 4808, y: 1677, name: '兴城', size: 2 }),
  new Station({ id: '05-062', x: 4830, y: 1647, name: '葫芦岛', size: 2 }),
  new Station({ id: '05-063', x: 4883, y: 1636, name: '锦州', size: 3 }),
  new Station({ id: '05-064', x: 4910, y: 1612, name: '凌海', size: 2 }),
  new Station({ id: '05-065', x: 4937, y: 1588, name: '盘锦', size: 2 }),
  new Station({ id: '05-066', x: 4964, y: 1564, name: '台安', size: 2 }),
  // 京哈高铁
  new Station({ id: '05-067', x: 4657, y: 1674, name: '平泉', size: 2 }),
  new Station({ id: '05-068', x: 4717, y: 1648, name: '喀左', size: 2 }),
  new Station({ id: '05-069', x: 4777, y: 1622, name: '朝阳', size: 2 }),
  new Station({ id: '05-070', x: 4807, y: 1609, name: '北票', size: 2 }),
  new Station({ id: '05-071', x: 4867, y: 1583, name: '阜新', size: 2 }),
  new Station({ id: '05-072', x: 4897, y: 1570, name: '黑山', size: 2 }),
);


// 河北（06）
stations.push(
  new Station({ id: '06-001', x: 4235, y: 2164, name: '石家庄', size: 3 }),
  new Station({ id: '06-003', x: 4472, y: 1792, name: '大厂', size: 2 }),
  new Station({ id: '06-004', x: 4506, y: 1786, name: '香河', size: 2 }),
  new Station({ id: '06-005', x: 4574, y: 1774, name: '玉田', size: 2 }),
  new Station({ id: '06-006', x: 4612, y: 1812, name: '唐山', size: 3 }),
  new Station({ id: '06-007', x: 4502, y: 1682, name: '安匠', size: 2 }),
  new Station({ id: '06-008', x: 4596, y: 1662, name: '承德', size: 3 }),
  new Station({ id: '06-009', x: 4710, y: 1790, name: '秦皇岛', size: 3 }),
  new Station({ id: '06-010', x: 4658, y: 1814, name: '滦河', size: 2 }),
  new Station({ id: '06-011', x: 4692, y: 1817, name: '北戴河', size: 3 }),
  new Station({ id: '06-012', x: 4340, y: 1991, name: '任丘', size: 2 }),
  new Station({ id: '06-013', x: 4342, y: 1935, name: '霸州', size: 2 }),
  // 京广高铁
  new Station({ id: '06-025', x: 4287, y: 1900, name: '涿州', size: 2 }),
  new Station({ id: '06-026', x: 4261, y: 1950, name: '高碑店', size: 2 }),
  new Station({ id: '06-027', x: 4235, y: 2000, name: '保定', size: 2 }),
  new Station({ id: '06-028', x: 4220, y: 2080, name: '定州', size: 2 }),
  new Station({ id: '06-029', x: 4243, y: 2130, name: '正定', size: 2 }),
  new Station({ id: '06-030', x: 4410, y: 1896, name: '廊坊', size: 2 }),
  new Station({ id: '06-031', x: 4433, y: 2057, name: '沧州', size: 2 }),
  new Station({ id: '06-032', x: 4224, y: 2207, name: '高邑', size: 2 }),
  new Station({ id: '06-033', x: 4227, y: 2255, name: '邢台', size: 2 }),
  new Station({ id: '06-034', x: 4227, y: 2319, name: '邯郸', size: 3 }),
  // 石济客专
  new Station({ id: '06-045', x: 4276, y: 2167, name: '辛集', size: 2 }),
  new Station({ id: '06-046', x: 4336, y: 2182, name: '衡水', size: 2 }),
  new Station({ id: '06-047', x: 4326, y: 2073, name: '肃宁', size: 2 }),
  new Station({ id: '06-048', x: 4505, y: 2045, name: '黄骅', size: 2 }),
  new Station({ id: '06-049', x: 4185, y: 1732, name: '怀安', size: 2 }),
  new Station({ id: '06-050', x: 4261, y: 1724, name: '张家口', size: 3 }),
);

// 内蒙古（07）
stations.push(
  new Station({ id: '07-001', x: 3862, y: 1745.5, name: '呼和浩特', size: 3 }),
  new Station({ id: '07-002', x: 4003, y: 1720.5, name: '乌兰察布', size: 2 }),
  new Station({ id: '07-003', x: 3744, y: 1772.5, name: '包头', size: 3 }),
  new Station({ id: '07-004', x: 4104, y: 1725.5, name: '兴和', size: 2 }),
  new Station({ id: '07-005', x: 3934, y: 1735.5, name: '卓资', size: 2 }),
  new Station({ id: '07-006', x: 3871, y: 1843.5, name: '准格尔', size: 2 }),
  new Station({ id: '07-007', x: 3743, y: 1885, name: '鄂尔多斯', size: 2 }),
  new Station({ id: '07-008', x: 3519, y: 1778.5, name: '临河', size: 2 }),
  new Station({ id: '07-009', x: 3448, y: 1900.5, name: '乌海', size: 3 }),
);

// 08 待定

// 09 待定

// 山西（10）
stations.push(
  // 大西高铁
  new Station({ id: '10-003', x: 4027, y: 2186, name: '太原', size: 3 }),
  new Station({ id: '10-004', x: 4057, y: 1884, name: '大同', size: 3 }),
  new Station({ id: '10-005', x: 3858, y: 2491, name: '运城', size: 3 }),
  new Station({ id: '10-006', x: 3948, y: 2318, name: '临汾', size: 2 }),
  new Station({ id: '10-007', x: 4035, y: 2143, name: '忻州', size: 2 }),
  new Station({ id: '10-008', x: 3998, y: 1985, name: '朔州', size: 2 }),
  new Station({ id: '10-009', x: 4092, y: 2165, name: '阳泉', size: 2 }),
  new Station({ id: '10-010', x: 4051, y: 2344, name: '长治', size: 2 }),
  new Station({ id: '10-011', x: 4059, y: 2407, name: '晋城', size: 2 }),
  new Station({ id: '10-012', x: 3901, y: 2421, name: '侯马', size: 2 }),
  new Station({ id: '10-013', x: 4022, y: 2089, name: '原平', size: 3 }),
  new Station({ id: '10-014', x: 4026, y: 2224, name: '晋中', size: 2 }),
  new Station({ id: '10-015', x: 4036, y: 1958, name: '怀仁', size: 2 }),
  new Station({ id: '10-016', x: 4024, y: 2048, name: '雁门关', size: 2 }),
  new Station({ id: '10-017', x: 3981, y: 2277, name: '平遥', size: 2 }),
  new Station({ id: '10-018', x: 3805, y: 2532, name: '永济', size: 2 }),
  new Station({ id: '10-019', x: 4156, y: 1789, name: '天镇', size: 2 }),
  new Station({ id: '10-020', x: 4050, y: 2292, name: '榆社', size: 2 }),
  // 神黄铁路
  new Station({ id: '10-021', x: 3948, y: 2077, name: '神池', size: 2 }),
  new Station({ id: '10-022', x: 3850, y: 2062, name: '保德', size: 2 }),
  new Station({ id: '10-023', x: 3874, y: 2002, name: '河曲', size: 2 }),
);

// 山东（11）
stations.push(
  new Station({ id: '11-001', x: 4480, y: 2299, name: '济南', size: 3 }),
  new Station({ id: '11-002', x: 4365, y: 2316, name: '聊城', size: 3 }),
  new Station({ id: '11-003', x: 4413, y: 2309, name: '长清', size: 2 }),
  new Station({ id: '11-004', x: 4430, y: 2170, name: '德州', size: 2 }),
  new Station({ id: '11-005', x: 4493, y: 2393, name: '泰安', size: 2 }),
  new Station({ id: '11-006', x: 4506, y: 2449, name: '曲阜', size: 2 }),
  new Station({ id: '11-007', x: 4516, y: 2511, name: '枣庄', size: 2 }),
  new Station({ id: '11-010', x: 4564, y: 2288, name: '淄博', size: 2 }),
  new Station({ id: '11-011', x: 4666, y: 2278, name: '潍坊', size: 2 }),
  new Station({ id: '11-012', x: 4806, y: 2275, name: '青岛', size: 3 }),
  new Station({ id: '11-013', x: 4573, y: 2114, name: '滨州', size: 2 }),
  new Station({ id: '11-014', x: 4658, y: 2110, name: '东营', size: 2 }),
  new Station({ id: '11-015', x: 4907, y: 2098, name: '烟台', size: 2 }),
  new Station({ id: '11-016', x: 5000, y: 2093, name: '威海', size: 3 }),
  new Station({ id: '11-017', x: 4680, y: 2195, name: '寿光', size: 2 }),
  new Station({ id: '11-018', x: 4793, y: 2153, name: '莱州', size: 2 }),
  new Station({ id: '11-019', x: 4805, y: 2218, name: '莱西', size: 2 }),
  new Station({ id: '11-020', x: 4727, y: 2392, name: '日照', size: 3 }),
  new Station({ id: '11-021', x: 4591, y: 2450, name: '临沂', size: 2 }),
  new Station({ id: '11-022', x: 4383, y: 2459, name: '菏泽', size: 2 }),
);

// 河南（12）
stations.push(
  // 京广高铁
  new Station({ id: '12-001', x: 4152, y: 2566, name: '郑州', size: 3 }),
  new Station({ id: '12-002', x: 4215, y: 2505, name: '新乡', size: 2 }),
  new Station({ id: '12-003', x: 4219, y: 2443, name: '鹤壁', size: 2 }),
  new Station({ id: '12-004', x: 4224, y: 2395, name: '安阳', size: 2 }),
  new Station({ id: '12-005', x: 4140, y: 2612, name: '许昌', size: 2 }),
  new Station({ id: '12-006', x: 4128, y: 2660, name: '漯河', size: 2 }),
  new Station({ id: '12-007', x: 4115, y: 2710, name: '驻马店', size: 2 }),
  new Station({ id: '12-008', x: 4103, y: 2760, name: '明港', size: 2 }),
  new Station({ id: '12-009', x: 4091, y: 2810, name: '信阳', size: 2 }),  
  // 徐兰高铁
  new Station({ id: '12-013',  x: 4412, y: 2584, name: '商丘', size: 2 }),
  new Station({ id: '12-014',  x: 4318, y: 2578, name: '兰考', size: 2 }),
  new Station({ id: '12-015',  x: 4224, y: 2573, name: '开封', size: 2 }),
  new Station({ id: '12-016',  x: 4075, y: 2571, name: '巩义', size: 2 }),
  new Station({ id: '12-017',  x: 4012, y: 2576, name: '洛阳', size: 3 }),
  new Station({ id: '12-018',  x: 3897, y: 2571, name: '三门峡', size: 2 }),
  new Station({ id: '12-019',  x: 3833, y: 2576, name: '灵宝', size: 2 }),
  // 济郑高铁
  new Station({ id: '12-020', x: 4245, y: 2467, name: '滑浚', size: 2 }),
  new Station({ id: '12-021', x: 4295, y: 2430, name: '濮阳', size: 2 }),
  new Station({ id: '12-012',  x: 4102, y: 2510, name: '焦作', size: 2 }),
);

// 安徽（13）
stations.push(
  new Station({ id: '13-010', x: 4477, y: 2577, name: '砀山', size: 2 }),
  new Station({ id: '13-011', x: 4596, y: 2677, name: '宿州', size: 2 }),
  new Station({ id: '13-012', x: 4657, y: 2773, name: '蚌埠', size: 2 }),
  new Station({ id: '13-013', x: 4683, y: 2821, name: '滁州', size: 2 }),
);

// 陕西（14）
stations.push(
  // 陇海线
  new Station({ id: '14-001', x: 3672, y: 2593, name: '西安', size: 4 }),
  new Station({ id: '14-002', x: 3722, y: 2581, name: '渭南', size: 2 }),
  new Station({ id: '14-003', x: 3784, y: 2580, name: '华山', size: 2 }),
  new Station({ id: '14-004', x: 3629, y: 2589, name: '咸阳', size: 2 }),
  new Station({ id: '14-005', x: 3545, y: 2587, name: '宝鸡', size: 3 }),
  new Station({ id: '14-006', x: 3749, y: 2547, name: '大荔', size: 2 }),
  // 神黄铁路
  new Station({ id: '14-007', x: 3871, y: 1943, name: '神木', size: 2 }),
  new Station({ id: '14-008', x: 3746.5, y: 2057, name: '榆林', size: 3 }),
  new Station({ id: '14-009', x: 3763.5, y: 2212, name: '绥德', size: 2 }),
  new Station({ id: '14-010', x: 3706.5, y: 2303, name: '延安', size: 3 }),
  new Station({ id: '14-011', x: 3719.5, y: 2415, name: '富县', size: 2 }),
  new Station({ id: '14-012', x: 3677.5, y: 2522, name: '铜川', size: 2 }),
  new Station({ id: '14-013', x: 3731.5, y: 2665, name: '商洛', size: 2 }),
  new Station({ id: '14-014', x: 3819.5, y: 2723, name: '蓝田', size: 2 }),
);

// 江苏（15）
stations.push(
  // 沪宁高铁
  new Station({ id: '15-001', x: 4711, y: 2852, name: '南京', size: 3 }),
  new Station({ id: '15-002', x: 4757, y: 2862, name: '镇江', size: 2 }),
  new Station({ id: '15-003', x: 4803, y: 2872, name: '丹阳', size: 2 }),
  new Station({ id: '15-004', x: 4850, y: 2882, name: '常州', size: 2 }),
  new Station({ id: '15-005', x: 4897, y: 2892, name: '无锡', size: 2 }),
  new Station({ id: '15-006', x: 4944, y: 2902, name: '苏州', size: 2 }),
  // 徐连高铁
  new Station({ id: '15-007', x: 4551, y: 2564, name: '徐州', size: 3 }),
  new Station({ id: '15-010', x: 4620, y: 2560, name: '邳州', size: 2 }),
  new Station({ id: '15-011', x: 4684, y: 2545, name: '东海', size: 2 }),
  new Station({ id: '15-012', x: 4718, y: 2495, name: '连云港', size: 3 }),
  // 宁启高铁
  new Station({ id: '15-013', x: 4781, y: 2814, name: '扬州', size: 2 }),
  new Station({ id: '15-014', x: 4849, y: 2772, name: '海安', size: 2 }),
  new Station({ id: '15-015', x: 4903, y: 2795, name: '南通', size: 2 }),
  new Station({ id: '15-016', x: 5028, y: 2815, name: '启东', size: 3 }),
  // 青盐客专
  new Station({ id: '15-017', x: 4836, y: 2659, name: '盐城', size: 2 }),
  new Station({ id: '15-018', x: 4795, y: 2568, name: '阜宁', size: 2 }),
  new Station({ id: '15-019', x: 4670, y: 2623, name: '宿迁', size: 2 }),
  new Station({ id: '15-020', x: 4768, y: 2653, name: '淮安', size: 2 }),
  new Station({ id: '15-021', x: 4777, y: 2722, name: '宝应', size: 2 }),
  new Station({ id: '15-022', x: 4785, y: 2765, name: '高邮', size: 2 }),
);

// 湖北(16)
stations.push(
  new Station({ id: '16-001', x: 4082, y: 2965, name: '武汉', size: 4 }),
  new Station({ id: '16-002', x: 3838, y: 2784, name: '十堰', size: 2 }),
  new Station({ id: '16-003', x: 4080, y: 2860, name: '孝感', size: 2 }),
  new Station({ id: '16-004', x: 4002, y: 2945, name: '云梦', size: 2 }),
  new Station({ id: '16-006', x: 3989, y: 2895, name: '随州', size: 2 }),
  new Station({ id: '16-007', x: 3958, y: 2872, name: '枣阳', size: 2 }),
  new Station({ id: '16-008', x: 3927, y: 2849, name: '襄阳', size: 3 }),
  new Station({ id: '16-010', x: 3866, y: 2803, name: '丹江口', size: 2 }),
);

// 上海(20)
stations.push(
  new Station({ id: '20-001', x: 5033, y: 2922, name: '上海', size: 4 }),
  new Station({ id: '20-002', x: 4991, y: 2912, name: '昆山', size: 2 }),
);

if (zoom > 1) {
  stations = calculateStations(stations, zoom);
}

const stationMap = {}

for (let i = 0; i < stations.length; i++) {
  stationMap[stations[i].id] = stations[i];
}

export { stations, stationMap };
