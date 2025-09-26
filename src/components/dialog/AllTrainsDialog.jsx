import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table, Input, FormGroup, Label, InputGroup, InputGroupText } from 'reactstrap';

const AllTrainsDialog = ({ isOpen, toggle, trains }) => {
  const [renderedTrains, setRenderedTrains] = useState([]);
  const [trainNumberFilter, setTrainNumberFilter] = useState('');
  const [startStationFilter, setStartStationFilter] = useState('');
  const [endStationFilter, setEndStationFilter] = useState('');
  const [minTravelTime, setMinTravelTime] = useState('');
  const [maxTravelTime, setMaxTravelTime] = useState('');
  
  const formatTime = (minutes) => {
    if (!minutes || isNaN(minutes)) {
      return '未知';
    }
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let filtered = [...trains];

    if (trainNumberFilter) {
      filtered = filtered.filter(train => 
        train.train_number.toLowerCase().includes(trainNumberFilter.toLowerCase())
      );
    }

    if (startStationFilter) {
      filtered = filtered.filter(train => 
        train.start.name.toLowerCase().includes(startStationFilter.toLowerCase())
      );
    }

    if (endStationFilter) {
      filtered = filtered.filter(train => 
        train.end.name.toLowerCase().includes(endStationFilter.toLowerCase())
      );
    }

    if (minTravelTime) {
      filtered = filtered.filter(train => (train.endTime - train.startTime) >= parseInt(minTravelTime));
    }

    if (maxTravelTime) {
      filtered = filtered.filter(train => (train.endTime - train.startTime) <= parseInt(maxTravelTime));
    }

    setRenderedTrains(filtered);
  }, [trains, trainNumberFilter, startStationFilter, endStationFilter, minTravelTime, maxTravelTime]);

  const clearFilters = () => {
    setTrainNumberFilter('');
    setStartStationFilter('');
    setEndStationFilter('');
    setMinTravelTime('');
    setMaxTravelTime('');
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>全部车次信息</ModalHeader>
      <ModalBody>

        <div className="filter-container mb-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          <FormGroup style={{ flex: '1 1 200px' }}>
            <Label for="trainNumberFilter">车次编号</Label>
            <Input
              id="trainNumberFilter"
              value={trainNumberFilter}
              onChange={e => setTrainNumberFilter(e.target.value)}
              placeholder="输入车次编号"
            />
          </FormGroup>
          
          <FormGroup style={{ flex: '1 1 200px' }}>
            <Label for="startStationFilter">起点站</Label>
            <Input
              id="startStationFilter"
              value={startStationFilter}
              onChange={e => setStartStationFilter(e.target.value)}
              placeholder="输入起点站"
            />
          </FormGroup>
          
          <FormGroup style={{ flex: '1 1 200px' }}>
            <Label for="endStationFilter">终点站</Label>
            <Input
              id="endStationFilter"
              value={endStationFilter}
              onChange={e => setEndStationFilter(e.target.value)}
              placeholder="输入终点站"
            />
          </FormGroup>
          
          <FormGroup style={{ flex: '1 1 200px' }}>
            <Label>运行时间（分钟）</Label>
            <InputGroup>
              <Input
                value={minTravelTime}
                onChange={e => setMinTravelTime(e.target.value)}
                placeholder="最小"
                style={{ borderRight: 'none' }}
              />
              <InputGroupText style={{ borderLeft: 'none', borderRight: 'none' }}>-</InputGroupText>
              <Input
                value={maxTravelTime}
                onChange={e => setMaxTravelTime(e.target.value)}
                placeholder="最大"
                style={{ borderLeft: 'none' }}
              />
            </InputGroup>
          </FormGroup>
          
          <FormGroup style={{ alignSelf: 'flex-end', marginBottom: '0.5rem' }}>
            <Button color="secondary" onClick={clearFilters}>清除过滤</Button>
          </FormGroup>
        </div>

        <Table bordered size="sm">
          <thead>
            <tr>
              <th>编号</th>
              <th>起点</th>
              <th>终点</th>
              <th>开车</th>
              <th>到达</th>
              <th>运行(分钟)</th>
              <th>站点数</th>
              <th style={{ width: '300px' }}>途径站点</th>
            </tr>
          </thead>
          <tbody>
            {renderedTrains.map((train, index) => (
              <tr key={index}>
                <td>{train.train_number}</td>
                <td>{train.start.name}</td>
                <td>{train.end.name}</td>
                <td>{formatTime(train.startTime)}</td>
                <td>{formatTime(train.endTime)}</td>
                <td>{(train.endTime - train.startTime)}</td>
                <td>{train.stations.length}</td>
                <td>{train.stations.map(station => station.name).join('——')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        
        {renderedTrains.length === 0 && (
          <div className="text-center text-muted">没有符合条件的车次</div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>关闭</Button>
      </ModalFooter>
    </Modal>
  );
};

export default AllTrainsDialog;
