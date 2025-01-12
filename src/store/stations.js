import cookie from 'react-cookies'
import { Station, Train, Route } from '../modals'
import { calculateStations, calculateRoutes, calculateTrains } from '../utils'

const zoom = Number(cookie.load('map-zoom')) || 1;

// mock data
let stations = [
  // id 省份标识-序列号

  // 北京部分
  new Station({ id: '01-001', x: 420, y: 250, name: '北京南', size: 3.5 }),
  new Station({ id: '01-002', x: 350, y: 200, name: '北京西', size: 3.5 }),
  new Station({ id: '01-003', x: 450, y: 200, name: '北京', size: 3.5 }),
  new Station({ id: '01-004', x: 500, y: 200, name: '北京东', size: 3 }),
  new Station({ id: '01-005', x: 350, y: 150, name: '北京北', size: 2.5 }),
  new Station({ id: '01-006', x: 300, y: 100, name: '清河', size: 2.5 }),
  new Station({ id: '01-007', x: 220, y: 20, name: '八达岭长城', size: 2 }),
  new Station({ id: '01-008', x: 500, y: 150, name: '北京朝阳', size: 2.5 }),
  new Station({ id: '01-009', x: 550, y: 220, name: '通州', size: 2.5 }),
  new Station({ id: '01-010', x: 340, y: 250, name: '北京丰台', size: 3.5 }),
  new Station({ id: '01-011', x: 100, y: 10, name: '延庆', size: 2 }),
  
  // 京原（石景山-十渡已完成）
  new Station({ id: '01-012', x: 310, y: 205, name: '石景山', size: 3 }),
  new Station({ id: '01-013', x: 300, y: 230, name: '大灰厂', size: 1.5 }),
  new Station({ id: '01-014', x: 290, y: 235, name: '上万', size: 1.5 }),
  new Station({ id: '01-015', x: 265, y: 235, name: '南观村', size: 1.5 }),
  new Station({ id: '01-016', x: 240, y: 235, name: '燕山', size: 1.5 }),
  new Station({ id: '01-017', x: 235, y: 250, name: '良各庄', size: 2.5 }),
  new Station({ id: '01-018', x: 205, y: 255, name: '云居寺', size: 1.5 }),
  new Station({ id: '01-019', x: 190, y: 240, name: '十渡', size: 1.5 }),


  // 天津部分
  new Station({ id: '02-001', x: 600, y: 420, name: '天津西', size: 3 }),
  new Station({ id: '02-002', x: 610, y: 480, name: '天津南', size: 2.5 }), 
  new Station({ id: '02-003', x: 650, y: 460, name: '天津', size: 3.5 }),
  new Station({ id: '02-004', x: 770, y: 450, name: '塘沽', size: 2 }),
  new Station({ id: '02-005', x: 800, y: 450, name: '滨海', size: 2 }),
  new Station({ id: '02-006', x: 650, y: 275, name: '蓟州', size: 2 }),
  new Station({ id: '02-007', x: 650, y: 350, name: '宝坻', size: 2 }),
  new Station({ id: '02-008', x: 650, y: 410, name: '天津北', size: 2.5 }),
  new Station({ id: '02-009', x: 760, y: 380, name: '滨海北', size: 2 }),
  new Station({ id: '02-010', x: 740, y: 420, name: '滨海西', size: 2.5 }),
  new Station({ id: '02-011', x: 705, y: 462, name: '军粮城南', size: 2 }),
  new Station({ id: '02-012', x: 765, y: 340, name: '芦台', size: 2 }),


  // 河北部分
  // 京山
  new Station({ id: '03-002', x: 500, y: 350, name: '廊坊', size: 2.5 }),
  new Station({ id: '03-003', x: 780, y: 300, name: '唐山', size: 3 }),
  new Station({ id: '03-004', x: 750, y: 250, name: '唐山北', size: 2.5 }),
  new Station({ id: '03-005', x: 850, y: 230, name: '滦县', size: 2 }),
  new Station({ id: '03-006', x: 905, y: 205, name: '昌黎', size: 2 }),
  new Station({ id: '03-007', x: 950, y: 150, name: '北戴河', size: 2.5 }),
  new Station({ id: '03-008', x: 1000, y: 125, name: '秦皇岛', size: 3 }),
  new Station({ id: '03-009', x: 1050, y: 100, name: '山海关', size: 2.5 }),
  new Station({ id: '03-010', x: 600, y: 250, name: '燕郊', size: 2 }),
  new Station({ id: '03-011', x: 700, y: 275, name: '玉田县', size: 2 }),
  new Station({ id: '03-012', x: 850, y: 180, name: '迁安', size: 2 }),
  new Station({ id: '03-013', x: 900, y: 130, name: '卢龙', size: 2 }),

  // 京广
  new Station({ id: '03-014', x: 250, y: 370, name: '高碑店', size: 2.5 }),
  new Station({ id: '03-015', x: 160, y: 470, name: '徐水', size: 2.5 }),
  new Station({ id: '03-016', x: 120, y: 530, name: '保定', size: 3 }),
  new Station({ id: '03-017', x: 280, y: 290, name: '涿州', size: 2 }),

  // 京九
  new Station({ id: '03-018', x: 370, y: 430, name: '霸州', size: 2 }),
  new Station({ id: '03-019', x: 450, y: 510, name: '任丘', size: 2.5 }),
  new Station({ id: '03-020', x: 360, y: 360, name: '固安', size: 2.5 }),

  // 京原（野三坡-涞源已完成）
  new Station({ id: '01-020', x: 180, y: 250, name: '野三坡', size: 1.5 }),
  new Station({ id: '01-021', x: 170, y: 260, name: '百里峡', size: 1.5 }),
  new Station({ id: '01-022', x: 160, y: 280, name: '福山口', size: 1.5 }),
  new Station({ id: '01-023', x: 140, y: 290, name: '白涧', size: 2 }),
  new Station({ id: '01-024', x: 140, y: 295, name: '板城', size: 1.5 }),
  new Station({ id: '01-025', x: 130, y: 300, name: '南城司', size: 1.5 }),
  new Station({ id: '01-026', x: 120, y: 305, name: '奇峰塔', size: 1.5 }),
  new Station({ id: '01-027', x: 110, y: 305, name: '紫荆关', size: 1.5 }),
  new Station({ id: '01-028', x: 100, y: 305, name: '大盘石', size: 1.5 }),
  new Station({ id: '01-029', x: 90, y: 310, name: '塔崖驿', size: 1.5 }),
  new Station({ id: '01-030', x: 80, y: 315, name: '王安镇', size: 1.5 }),
  new Station({ id: '01-031', x: 70, y: 320, name: '浮图峪', size: 1.5 }),
  new Station({ id: '01-032', x: 60, y: 315, name: '北屯', size: 1.5 }),
  new Station({ id: '01-033', x: 40, y: 320, name: '涞源', size: 2 }),

  // 京广（保定-邯郸南已完成）
  new Station({ id: '03-034', x: 110, y: 567, name: '保定南', size: 1.5 }),
  new Station({ id: '03-035', x: 95, y: 580, name: '于家庄', size: 1.5 }),
  new Station({ id: '03-036', x: 81, y: 600, name: '完县', size: 1.5 }),
  new Station({ id: '03-037', x: 67, y: 620, name: '望都', size: 2 }),
  new Station({ id: '03-038', x: 54, y: 640, name: '清风店', size: 1.5 }),
  new Station({ id: '03-039', x: 41, y: 660, name: '定州', size: 2.5 }),
  new Station({ id: '03-040', x: 28, y: 680, name: '寨西店', size: 1.5 }),
  new Station({ id: '03-041', x: 15, y: 700, name: '承安铺', size: 1.5 }),
  new Station({ id: '03-042', x: 12, y: 720, name: '新乐', size: 2 }),
  new Station({ id: '03-043', x: 10, y: 740, name: '新安村', size: 1.5 }),
  new Station({ id: '03-044', x: 20, y: 760, name: '正定', size: 2.5 }),
  new Station({ id: '03-045', x: 31, y: 780, name: '柳辛庄', size: 1.5 }),
  new Station({ id: '03-046', x: 50, y: 800, name: '石家庄', size: 3.5 }),
  new Station({ id: '03-058', x: 60, y: 830, name: '平南', size: 1.5 }),
  new Station({ id: '03-059', x: 70, y: 860, name: '窦妪', size: 1.5 }),
  new Station({ id: '03-060', x: 75, y: 880, name: '元氏', size: 2 }),
  new Station({ id: '03-061', x: 80, y: 900, name: '高邑', size: 2 }),
  new Station({ id: '03-062', x: 75, y: 920, name: '鸭鸽营', size: 1.5 }),
  new Station({ id: '03-063', x: 70, y: 940, name: '临城', size: 2 }),
  new Station({ id: '03-064', x: 60, y: 960, name: '隆尧县', size: 1.5 }),
  new Station({ id: '03-065', x: 50, y: 980, name: '内邱', size: 2 }),
  new Station({ id: '03-066', x: 50, y: 1000, name: '官庄', size: 1.5 }),
  new Station({ id: '03-067', x: 60, y: 1050, name: '邢台', size: 3 }),
  new Station({ id: '03-068', x: 70, y: 1060, name: '小康庄', size: 1.5 }),
  new Station({ id: '03-069', x: 80, y: 1100, name: '留客', size: 1.5 }),
  new Station({ id: '03-070', x: 85, y: 1130, name: '沙河市', size: 2.5 }),
  new Station({ id: '03-071', x: 90, y: 1150, name: '临洺关', size: 1.5 }),
  new Station({ id: '03-072', x: 80, y: 1170, name: '黄粱梦', size: 1.5 }),
  new Station({ id: '03-073', x: 60, y: 1200, name: '邯郸', size: 3 }),
  new Station({ id: '03-074', x: 60, y: 1220, name: '邯郸南', size: 2.5 }),

  // 京广高铁（北京丰台-邯郸东已完成）
  // new Station({ id: '01-010', x: 340, y: 250, name: '北京丰台', size: 2 }), 已有点
  new Station({ id: '03-048', x: 310, y: 315, name: '涿州东', size: 2 }),
  new Station({ id: '03-049', x: 300, y: 380, name: '高碑店东', size: 2 }),
  new Station({ id: '03-050', x: 230, y: 480, name: '徐水东', size: 2 }),
  new Station({ id: '03-051', x: 175, y: 540, name: '保定东', size: 2 }),
  new Station({ id: '03-052', x: 150, y: 680, name: '定州东', size: 2 }),
  new Station({ id: '03-053', x: 100, y: 760, name: '正定机场', size: 2 }),
  // new Station({ id: '03-046', x: 130, y: 970, name: '石家庄', size: 2 }), 已有点
  new Station({ id: '03-055', x: 57, y: 910, name: '高邑西', size: 2 }),
  new Station({ id: '03-056', x: 120, y: 1050, name: '邢台东', size: 2 }),
  new Station({ id: '03-057', x: 100, y: 1200, name: '邯郸东', size: 2 }),

  // 京沪高铁（北京南——枣庄已完成）北京南、廊坊、天津南已有
  new Station({ id: '03-075', x: 621, y: 626, name: '沧州西', size: 2 }),
  new Station({ id: '04-002', x: 670, y: 730, name: '德州东', size: 2 }),
  new Station({ id: '04-003', x: 747, y: 910, name: '济南西', size: 2 }),
  new Station({ id: '04-004', x: 810, y: 980, name: '泰安', size: 2 }),
  new Station({ id: '04-005', x: 873, y: 1050, name: '曲阜东', size: 2 }),
  new Station({ id: '04-006', x: 936, y: 1100, name: '滕州东', size: 2 }),
  new Station({ id: '04-007', x: 999, y: 1200, name: '枣庄', size: 2 }),

  // 京港高铁
  // new Station({ id: '01-010', x: 340, y: 250, name: '北京丰台', size: 3.5 }), 已有
  new Station({ id: '05-002', x: 400, y: 370, name: '雄安', size: 3 }),
  new Station({ id: '05-003', x: 405, y: 520, name: '任丘西', size: 2 }),
  new Station({ id: '05-004', x: 430, y: 600, name: '肃宁东', size: 2 }),
  new Station({ id: '05-005', x: 441, y: 660, name: '深州东', size: 2 }),
  new Station({ id: '05-006', x: 435, y: 730, name: '衡水南', size: 2 }),
  new Station({ id: '05-007', x: 450, y: 800, name: '枣强南', size: 2 }),
  new Station({ id: '05-008', x: 460, y: 880, name: '清河西', size: 2 }),
  new Station({ id: '05-009', x: 470, y: 930, name: '临清东', size: 2 }),
  new Station({ id: '05-010', x: 485, y: 970, name: '聊城西', size: 2 }),
  new Station({ id: '05-011', x: 540, y: 1050, name: '阳谷东', size: 2 }),
  new Station({ id: '05-012', x: 560, y: 1130, name: '台前东', size: 2 }),
  new Station({ id: '05-013', x: 580, y: 1170, name: '梁山', size: 2 }),

  // 石济高速铁路
  // 石家庄已有
  new Station({ id: '03-080', x: 70, y: 800, name: '石家庄东', size: 2.5 }),
  new Station({ id: '03-081', x: 190, y: 790, name: '藁城南', size: 2 }),
  new Station({ id: '03-082', x: 307, y: 744, name: '辛集南', size: 2 }),
  new Station({ id: '03-083', x: 410, y: 690, name: '衡水北', size: 2 }),
  new Station({ id: '03-084', x: 557, y: 730, name: '景州', size: 2 }),
  // 德州东站 已有
  new Station({ id: '03-085', x: 693, y: 776, name: '平原东', size: 2 }),
  new Station({ id: '03-086', x: 712, y: 822, name: '禹城东', size: 2 }),
  new Station({ id: '03-087', x: 760, y: 863, name: '齐河', size: 2 }),
  new Station({ id: '03-088', x: 821, y: 910, name: '济南东', size: 2 }),
  // 济郑高铁
  new Station({ id: '03-089', x: 800, y: 910, name: '济南', size: 2.5 }),
  new Station({ id: '03-090', x: 650, y: 950, name: '长清', size: 2 }),
  new Station({ id: '03-091', x: 540, y: 960, name: '茌平南', size: 2 }),
  // 唐山联络线
  new Station({ id: '03-092', x: 720, y: 325, name: '唐山西', size: 2 }),
  new Station({ id: '03-093', x: 830, y: 295, name: '唐山南', size: 2 }),
  new Station({ id: '03-094', x: 605, y: 320, name: '香河', size: 2 }),
  new Station({ id: '03-095', x: 800, y: 370, name: '曹妃甸', size: 2 }),
]

if (zoom > 1) {
  stations = calculateStations(stations, zoom);
}

const stationMap = {}
for (let i = 0; i < stations.length; i++) {
  stationMap[stations[i].id] = stations[i];
}

export { stations, stationMap };
