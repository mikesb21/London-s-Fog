// React
import React, { useState } from "react";

// Assets
import { PictureIcon } from "../assets/icons/picture-icon";
import { TextIcon } from "../assets/icons/text-icon";
import { TodoIcon } from "../assets/icons/todo-icon";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// Components
import BlogComponent from "../components/whats-on-your-mind/BlogComponent";
import DropzoneComponent from "../components/whats-on-your-mind/DropzoneComponent";
import TodoComponent from "../components/whats-on-your-mind/TodoComponent";
import TextAreaComponent from "../components/common/TextAreaComponent";

const iconSize: number = 32;

const WhatsOnYourMind = () => {
  const [toggleDropzone, setToggleDropzone] = useState(false);
  const [toggleTodo, setToggleTodo] = useState(false);
  const [toggleTextInput, setToggleTextInput] = useState(false);
  const [show, setShow] = useState(false);

  const displayDropzone = () => {
    setToggleDropzone(true);
    setToggleTextInput(false);
    setToggleTodo(false);
  };

  const displayTodo = () => {
    setToggleDropzone(false);
    setToggleTextInput(false);
    setToggleTodo(true);
  };

  const displayTextInput = () => {
    setToggleDropzone(false);
    setToggleTextInput(true);
    setToggleTodo(false);
  };

  return (
    <div className="container container-woym">
      <Modal show={show} onHide={() => setShow(false)}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Add new Todo!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="I want too..."
              />
              <small id="emailHelp" className="form-text text-muted">
                What should I focus on next?
              </small>
            </div>
            <div className="form-group">
              <label>Description</label>
              <TextAreaComponent
                rows={4}
                placeholder={"Steps and path to accomplish"}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
      <div>
        <h1 className="title">What's on your mind?</h1>
        <div className="row d-flext justify-content-center">
          <button className="btn button-primary" onClick={displayDropzone}>
            <PictureIcon width={iconSize} heigth={iconSize} />
          </button>
          <button className="btn button-primary" onClick={displayTodo}>
            <TodoIcon width={iconSize} heigth={iconSize} />
          </button>
          <button className="btn button-primary" onClick={displayTextInput}>
            <TextIcon width={iconSize} heigth={iconSize} />
          </button>
        </div>
      </div>
      <div>
        {toggleDropzone && (
          <div>
            <DropzoneComponent />
            <button className="btn button-primary">Upload!</button>
          </div>
        )}
        {toggleTodo && (
          <div>
            <TodoComponent />
            <button
              className="btn button-primary"
              onClick={() => setShow(true)}
            >
              Add Todo
            </button>
            <button className="btn button-primary">Save Todo List</button>
          </div>
        )}
        {toggleTextInput && (
          <div>
            <BlogComponent />
            <button className="btn button-primary">Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsOnYourMind;
