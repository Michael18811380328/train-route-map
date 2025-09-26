import React, { useState, useEffect, useMemo } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Table, Input } from 'reactstrap';

const AllStationsDialog = ({ isOpen, toggle, stations, trains }) => {
  const [filteredName, setFilteredName] = useState('');
  const [renderedStations, setRenderedStations] = useState([]);

  const stationTrainsMap = useMemo(() => {
    if (!trains || !trains.length) {
      return {};
    }
    const map = {};
    stations?.forEach(station => {
      const passingTrains = trains.filter(train => 
        train.stations.some(item => item.id === station.id)
      );
      map[station.id] = passingTrains.map(train => train.train_number).join(', ');
    });
    return map;
  }, [stations, trains]);

  useEffect(() => {
    if (!stations) {
      setRenderedStations([]);
      return;
    }
    if (!filteredName.trim()) {
      setRenderedStations(stations);
    } else {
      const filtered = stations.filter(station =>
        station.name.toLowerCase().includes(filteredName.toLowerCase()) ||
        station.id.toString().includes(filteredName)
      );
      setRenderedStations(filtered);
    }
  }, [stations, filteredName]);

  const handleFilterChange = (e) => {
    setFilteredName(e.target.value);
  };

  const clearFilter = () => {
    setFilteredName('');
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>全部车站信息</ModalHeader>
      <ModalBody>
        <div className="mb-3">
          <Input
            type="text"
            placeholder="输入车站名称或编号"
            value={filteredName}
            onChange={handleFilterChange}
          />
          {filteredName && (
            <Button
              color="link"
              size="sm"
              className="mt-1"
              onClick={clearFilter}
            >
              清除筛选
            </Button>
          )}
        </div>

        <Table bordered size="sm">
          <thead>
            <tr>
              <th>编号</th>
              <th>名称</th>
              <th style={{width: '500px'}}>车次</th>
            </tr>
          </thead>
          <tbody>
            {renderedStations.map((station, index) => (
              <tr key={station.id || index}>
                <td>{station.id}</td>
                <td>{station.name}</td>
                <td>{stationTrainsMap[station.id] || ''}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        
        {(!stations || stations.length === 0) && (
          <div className="text-center text-muted">暂无车站数据</div>
        )}
        
        {stations && stations.length > 0 && renderedStations.length === 0 && (
          <div className="text-center text-muted">没有符合条件的车站</div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>关闭</Button>
      </ModalFooter>
    </Modal>
  );
};

export default AllStationsDialog;
