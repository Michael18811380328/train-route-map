# 更新日志

## 0.4 - 2025-01-24
- 功能：增加背景图和背景音乐，调整了设置窗口位置，避免遮挡其他信息
- 数据：重构了全部的站点信息（普速铁路站点太多，全部显示太混乱，所以重构后显示高铁线路和客运专线），增加了东北主要高铁网（沈阳枢纽，哈尔滨枢纽）

## 0.3 - 2025-01-13
- 功能：增加完善各种文档和基础信息
- 代码：数据层进行拆分
- 数据：增加5个新站点，更新部分站点的坐标信息

## 0.2 - 2025-01-11
- 功能：支持地图缩放，并存储缩放信息到 cookie
- 代码：UI 层和数据层分离，原始数据和计算属性分离，样式表分离
- 数据：增加2个数据中心点（北京枢纽，天津枢纽），增加30个站点，增加了6条线路

## 0.1 - 2025-01-10
- 功能：支持基本的火车路线图显示，包含城市、站点、列车路线和列车信息，支持静态效果展示
- 功能：支持车辆根据时间，动态显示更新位置
- 代码：初始化入口 APP，数据层 data，UI 层 Map，Stations，Trains, Routes，设置信息 Settings 组件
- 数据：增加20个站点，增加了7条线路，增加了6个车次
