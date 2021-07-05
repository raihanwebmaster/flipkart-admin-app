import React from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  return (
    <Form.Group >
      {props.label && <Form.Label>{props.label}</Form.Label> }
      <Form.Control value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder} {...props} />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
};

export default Input;

