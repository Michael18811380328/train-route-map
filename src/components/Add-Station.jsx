import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, FormGroup, Label } from 'reactstrap';

const AddStation = () => {
  
  const [modal, setModal] = useState(false);
  const [clickPoint, setClickPoint] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      window.emitter.on('clickMap', (clickPoint) => {
        setClickPoint(clickPoint);
      });
    }, 0);
  }, []);

  const handleAddStation = () => {
    if (!clickPoint) {
      alert('请先在地图上点击一个点');
    } else {
      setModal(true);
    }
  };
  
  const handleOnSave = () => {
    const stationName = document.getElementById('stationName').value.trim();
    const stationX = document.getElementById('stationX').value;
    const stationY = document.getElementById('stationY').value;
    const stationSize = document.getElementById('stationSize').value;
    if (!stationName) {
      alert('请输入站点名称');
      return;
    }
    const newStation = {
      name: stationName,
      x: parseFloat(stationX),
      y: parseFloat(stationY),
      size: parseInt(stationSize),
    };
    console.log(JSON.stringify(newStation));
    // TODO: save to database
    window.emitter.emit('addStation', newStation);
    setModal(false);
    setClickPoint(null);
  };

  return (
    <>
      <Button color="primary" onClick={handleAddStation} style={{ marginLeft: '10px' }}>增加站点</Button>
      <Modal isOpen={modal} toggle={() => setModal(false)}>
        <ModalHeader toggle={() => setModal(false)}>增加站点</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="stationName">站点名称</Label>
            <Input type="text" name="stationName" id="stationName" />
          </FormGroup>
          {clickPoint &&
            <FormGroup>
              <Label for="stationX">站点X坐标</Label>
              <Input type="number" className='mb-3' name="stationX" id="stationX" value={clickPoint.x.toFixed(0)} readOnly />
              <Label for="stationY">站点Y坐标</Label>
              <Input type="number" className='mb-3' name="stationY" id="stationY" value={clickPoint.y.toFixed(0)} readOnly />
            </FormGroup>
          }
          <FormGroup>
            <Label for="stationSize">站点等级</Label>
            <Input type="select" name="stationSize" id="stationSize" defaultValue={3}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleOnSave}>确定</Button>{' '}
          <Button color="secondary" onClick={() => setModal(false)}>取消</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default AddStation;
