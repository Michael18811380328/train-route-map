# 技术细节

本项目是一个前端网页案例，使用 React 框架实现。

## 基本概念

### 1、底图

固定的一个 div

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
this.state = {
  time: 0,
};

this.timer = setTimeout(() => {
  this.setState({ time: this.state.time + 1 });
}, 1000);

clearTimeout(this.timer);
this.timer = null;
~~~

### 3、渲染车次

某个时间节点，某个车次的位置：

遍历全部车次，然后计算出当前车次的位置，使用绝对定位进行渲染

time++ 那么继续计算当前车次的位置，继续渲染

动画效果，根据 车辆 x y 的变化，实现动画效果

~~~js
Train() {
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
    break;
  }
  if (t >= stations[preIndex].time && t < stations[nextIndex].time) {
    let { x1, y1 } = stations[preIndex];
    let { x2, y2 } = stations[nextIndex];
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

样式处理

~~~css
.map {
  position: relative;
}

.train {
  position: absolute;
  transition: top 1s, left 1s;
}
~~~

