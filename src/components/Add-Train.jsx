import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, FormGroup, Label, Form } from 'reactstrap';
import { stationMap } from '../store/data';
import './Add-Train.css';

const initStationsIds = [];
for (let key in stationMap) {
  if (stationMap[key].size > 2) {
    initStationsIds.push(key)
  }
}

const AddTrain = () => {

  const [modal, setModal] = useState(false);

  const [rows, setRows] = useState([{ station: '', time: '' }]);

  const toggle = () => setModal(!modal);

  const handleDeleteRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { station: '', time: '' }]);
  };

  const handleStationChange = (index, e) => {
    const newRows = [...rows];
    newRows[index].station = e.target.value;
    setRows(newRows);
  };

  const handleTimeChange = (index, e) => {
    const newRows = [...rows];
    newRows[index].time = e.target.value;
    setRows(newRows);
  };

  const save = () => {
    console.log('手动保存数据:', rows.map(item => item.station));
    // 目前可以手动把数据插入到 trains 中，未来支持数据库可以处理更多信息
    setRows([{ station: '', time: '' }]);
    toggle();
  };

  const renderOptions = (row, index) => {
    if (index === 0) {
      return (
        <Input
          type="select"
          name="station"
          id={`station-${index}`}
          value={row.station || ''}
          onChange={(e) => handleStationChange(index, e)}
        >
          <option value="">请选择车站</option>
          {initStationsIds.map((stationId) => (
            <option key={stationId} value={stationId}>
              {stationMap[stationId].name}
            </option>
          ))}
        </Input>
      );
    } else {
      const lastStation = stationMap[rows[index - 1].station];
      return (
        <Input
          type="select"
          name="station"
          id={`station-${index}`}
          value={row.station}
          onChange={(e) => handleStationChange(index, e)}
        >
          <option value="">请选择车站</option>
          {[...lastStation.next, lastStation.id].map((stationId) => (
            <option key={stationId} value={stationId}>
              {stationMap[stationId].name}
            </option>
          ))}
        </Input>
      );
    }
  };

  const renderRows = (row, index) => {
    if (index < rows.length - 1) {
      const { station, time } = row;
      return (
        <div className="delete-train-row" key={index}>
          <span>{stationMap[station].name}</span>
          <span>{time}</span>
          <Button size="sm" color="warning" onClick={() => handleDeleteRow(index)}>删除</Button>
        </div>
      )
    } else {
      return (
        <div className="add-train-row" key={index}>
          {renderOptions(row, index)}
          <input type="time" onChange={(e) => handleTimeChange(index, e)}></input>
          <Button size="sm" color="primary" onClick={handleAddRow}>增加</Button>
        </div>
      );
    }
  }

  return (
    <div>
      <Button color="primary" onClick={toggle}>增加车次</Button>
      <Modal isOpen={modal} toggle={toggle} size="lg" className="add-train-modal">
        <ModalHeader toggle={toggle}>增加车次</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label>车次</Label>
            <Input type="text" name="train" id="train" />
          </FormGroup>
          <FormGroup>
            <Label>途径站点</Label>
            {rows.map((row, index) => renderRows(row, index))}
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>关闭</Button>
          <Button color="primary" onClick={save}>保存</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddTrain;
