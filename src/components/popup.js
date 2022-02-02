import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function Popup({
  btn,
  title,
  status,
  image,
  charge,
  setHistory,
  history,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   console.log(btn, title, status, charge);
  const [inputName, setInputName] = useState("");
  const [inputVahicleName, setInputVahicleName] = useState("");
  const [inputVahicleNumber, setInputVahicleNumber] = useState("");
  //   console.log(inputName);

  const handleSubmit = () => {
    if (
      inputName === "" ||
      inputVahicleName === "" ||
      inputVahicleNumber === ""
    ) {
      toast.warning("Please Enter all details");
      return;
    }
    let passValues = [
      {
        name: inputName,
        vahicleName: inputVahicleName,
        vahicleNumber: inputVahicleNumber,
        charge: charge,
        image: image,
      },
    ];
    // console.log(history);
    setHistory(
      history && history.length ? [...history, ...passValues] : passValues
    );
    toast.success("Parking Booked");
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="w-100">
        {btn}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h6 className="mb-1">
              {status ? "Parking Available" : "Parking Full"}
            </h6>
            <h6 className="mb-1">For 1 hour : ₹{charge}</h6>
          </div>
          <div className="m-2 mt-4">
            <label htmlFor="name">Name</label>{" "}
            <input
              name="name"
              id="name"
              onChange={(event) => setInputName(event.target.value)}
            ></input>
          </div>
          <div className="m-2">
            <label htmlFor="vahicleName">Vahicle Name</label>{" "}
            <input
              name="vahicleName"
              id="vahicleName"
              onChange={(event) => setInputVahicleName(event.target.value)}
            ></input>
          </div>
          <div className="m-2">
            <label htmlFor="vahicleNumber">Vahicle Number</label>{" "}
            <input
              name="vahicleNumber"
              id="vahicleNumber"
              onChange={(event) => setInputVahicleNumber(event.target.value)}
            ></input>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Confirm Ticket
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
