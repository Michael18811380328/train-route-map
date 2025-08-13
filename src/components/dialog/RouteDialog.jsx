import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

function RouteDialog({ isOpen, toggle, route }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{route.name}</ModalHeader>
      <ModalBody>
        <p>途径站点: {route.points.map(point => point.name).join(' - ')}</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>关闭</Button>
      </ModalFooter>
    </Modal>
  );
}

export default RouteDialog;
