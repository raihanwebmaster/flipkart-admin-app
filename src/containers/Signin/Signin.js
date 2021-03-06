import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Redirect } from "react-router-dom";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };
    console.log(user);
    dispatch(login(user));
  };

  if (auth.authenticate) {
    return <Redirect to={`/`} />;
  }
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
              <Input
                label="Email"
                placeholder="Email"
                value={email}
                type="Email"
                onChange={(e) => setEmail(e.target.value)}
                errorMessage=""
              />

              <Input
                label="Password"
                placeholder="Password"
                value={password}
                type="Password"
                onChange={(e) => setPassword(e.target.value)}
                errorMessage=""
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signin;
