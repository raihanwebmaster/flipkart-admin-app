import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
const Signup = () => {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                    errorMessage=""
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label=" Last Name"
                    placeholder=" Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                    errorMessage=""
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="Email"
                onChange={() => {}}
                errorMessage=""
              />

              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="Password"
                onChange={() => {}}
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

export default Signup;
