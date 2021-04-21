import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";

const Signin = () => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '50px'}}>
          <Col md={{span: 6, offset: 3}}>
            <Form>
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

export default Signin;
