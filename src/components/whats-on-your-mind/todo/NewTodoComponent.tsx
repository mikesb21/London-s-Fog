// React
import React from "react";

// Assets
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NewTodoComponent = (props: any) => {
  return (
    <Modal onHide={props.setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add new Todo!</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.setShow(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={props.setShow(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewTodoComponent;
