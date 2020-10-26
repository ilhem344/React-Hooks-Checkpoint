import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Movie({ LastId,add }) {
  /*LocalHooks of the new Movie*/
  const [show, setShow] = useState(false);
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [src, setURLPoster] = useState("");
  const [rating, setrating] = useState("0");
  const [id, setid] = useState("0");

  const Movie = [
    {
    
      name: name,
      rating: rating,
      src: src,
      description: description,
    },
  ];
  /*event functions*/
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => setShow(true);
  /******************************************** */

  return (
    <>
      <Button
        style={{ marginLeft: "500px" }}
        variant="primary"
        onClick={handleShow}
      >
        Add
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) => setname(e.target.value)}
                type="Text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                onChange={(e) => setdescription(e.target.value)}
                type="Text"
                placeholder="Enter Description"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Poster</Form.Label>
              <Form.Control
                onChange={(e) => {
                  setURLPoster(e.target.value);
                }}
                type="Text"
                placeholder="Paste poster URL"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                onChange={(e) => setrating(e.target.value)}
                type="Text"
                placeholder="Paste poster URL"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSave();
              add(Movie);
              console.log(Movie);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Movie;
