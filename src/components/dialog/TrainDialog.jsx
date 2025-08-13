import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function TrainDialog({ isOpen, toggle, train }) {
  if (!train) return null;

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {train.train_number}
      </ModalHeader>
      <ModalBody>
        <p>起点: {train.start.name}</p>
        <p>终点: {train.end.name}</p>
        <p>途径站点及时刻表</p>
        <ul>
          {train.stations && train.times && train.stations.map((station, index) => (
            <li key={index}>
              {station.name}: {formatTime(train.times[index])}
            </li>
          ))}
        </ul>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          关闭
        </Button>
      </ModalFooter>
    </Modal>
  );
}

function formatTime(minutes) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

export default TrainDialog;
