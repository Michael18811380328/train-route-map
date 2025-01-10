# 轨道交通图

一个 React 前端实现的火车路线图（包括城市，站点，车次等信息）

![demo](demo.gif)

## 需求

第一阶段：实现静态效果

第二阶段：实现动画效果

第三阶段：考虑曲线效果（贝塞尔曲线）

第四阶段：每一个站内部多个线路多个接入点

## 基本概念

### 1、底图

固定的一个 div 或者 canvas

~~~js
class Map {
  width: 1000,
  height: 800,
}
~~~

### 2、城市

一个坐标（x, y）属性（size 等级0-5等车站，type 省会，中间站，名称）坐标固定

~~~js
class Station(obj) {
  id,
  x: obj.x | number ,
  y: obj.y | number,
  name: obj.name | string,
  size: 0-5 | number,
}
~~~

### 3、路线

一个数组，每一项是一个坐标点，二维坐标连线实现（通常是城市坐标）。属性：红色黑色，单线复线。

~~~js
class Route(obj) {
  id,
  name: string,
  color: red | green | black,
  line_number: number,
  points: [
    Station,
    Station,
  ],
}
~~~

### 4、车辆信息

车次，开始城市，结束城市，（时刻表）一个列表，什么时间在什么点

~~~js
class Train() {
  id,
  train_number: 'G1025',
  start: Station,
  end: Station,
  color: 'red' | 'blue' | 'yellow',
  stations: [
    {
      time: 10,
      Station,
    },
    {
      time: 20,
      Station,
    },
    {
      time: 30,
      Station,
    },
  ],
}
~~~

## 页面渲染

### 1、静态页面

底图、城市、路线直接渲染。层级：底图0，路线1，车辆2，城市3

~~~jsx
render () {
  return (
    <div className="app">
    	<div className="map" width={1000} height={600} style={}>
        {this.renderStations()}
        {this.renderRoutes()}
        {this.renderTrains(this.state.time)}
      </div>
      <div className="settings"></div>
    </div>
  );
}
~~~

stations, routes, trains 每个渲染一个数组

### 2、时间

设置一个 state: time 动态变化，范围是0-24小时，每小时60分钟，那么 60 x 24 = 1440 分钟，设置一个循环计数器，每秒 time++

~~~js
// init
this.state = {
  time: 0,
};

// press start button
this.timer = setTimeout(() => {
  this.setState({ time: this.state.time + 1 });
  // TODO: time is 1440, reset to 0
}, 1000);

// press end button
clearTimeout(this.timer);
this.timer = null;
~~~

### 3、渲染车次

某个时间节点，某个车次的位置：

遍历全部车次，然后计算出当前车次的位置，使用绝对定位进行渲染

time++ 那么继续计算当前车次的位置，继续渲染

动画效果，根据 车辆 x y 的变化，实现动画效果

~~~js
// 初始化计算出全部车次的时间和位置：setState 可以直接读取，不需要再次计算
Train() {
  // calculate properties
  startTime: stations[0].time,
  endTime: stations[stations.length - 1].time,
}

let points = [];
let preIndex = 0;
let nextIndex = 1;
for (let t = startTime; t <= endTime; t++) {
  if (t >= stations[nextIndex].time) {
    preIndex++;
    nextIndex++;
  }
  if (stations.length === preIndex) {
    // 已经结束
    break;
  }
  if (t >= stations[preIndex].time && t < stations[nextIndex].time) {
    let { x1, y1 } = stations[preIndex];
    let { x2, y2 } = stations[nextIndex];
    // 计算比例
    let x = x1 + (x2 - x1) / ((t - stations[preIndex].time) / (stations[nextIndex].time - stations[preIndex].time ));
    let y = y1 + (y2 - y1) / ((t - stations[preIndex].time) / (stations[nextIndex].time - stations[preIndex].time ));
    points[t] = {x, y};
  }
}
~~~

渲染阶段

~~~jsx
renderTrains = (this.state.time) => {
	return trains.map(train => {
    return <Train train={train} time={this.state.time} />
  });
}
~~~

~~~jsx
class Train extends React.Component {
	const { train, time } = this.props;
	const point = train.points[time];
	// 当前节点不发车
	if (!point) {
    return null;
  }
	render () {
    return (
      <div className="train" style={{ position: x: point.x, y: point.y, color: color }}>
        <span>{train_number}</span>
        <span>{train.start.name}-{train.end.name}</span>
      </div>
    );
  }
}
~~~

~~~css
.map {
  position: relative;
}

.train {
  position: absolute;
  transition: top 1s, left 1s;
}
~~~

## 未来

1、路线变成曲线，车辆在曲线上起来：两个车站之间，我们使用贝塞尔曲线进行实现，那么就是一个曲线函数可以绘制。某一个车次在两个车站的时间是固定的，我们假设匀速行驶，那么某个时间可以计算出位置。

实际上比较困难，因为曲线的每一个坐标都需要算，碰撞检测等难度增加。

2、24点车辆位置切换

3、同一个时间1个车次多个位置的情况

4、冲撞检测：如果一个线路（单线）同时存在多个点在同一个位置，那么就是发生了冲撞检测。如果是复线或者四线，需要考虑方向。

5、新增数据：目前数据是内部写的默认数据，未来可以支持手动对站点，线路，车次等进行添加，这部分可以写到数据库中。新增时支持输入框选择，或者直接页面点击。

6、目前使用 div 实现绘制，未来能否使用 canvas 或者其他的库来处理，避免手动处理细节部分。

7、获取真实地点的经纬度，然后转换成 x y 坐标

8、支持筛选过滤操作
