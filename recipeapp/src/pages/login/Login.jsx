import React from "react";
import { LoginStyled, LoginDivStyled, LoginImgStyled } from "./Login.style";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import meal2 from "../../assets/meal2.svg";

const Login = () => {
  return (
    <LoginStyled>
      <LoginDivStyled>
        <LoginImgStyled src={meal2}></LoginImgStyled>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>RECIPE</Form.Label>
            <Form.Control type="text" placeholder="USERNAME" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      </LoginDivStyled>
    </LoginStyled>
  );
};

export default Login;
