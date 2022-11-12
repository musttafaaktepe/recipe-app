import React from "react";
import {
  LoginStyled,
  LoginDivStyled,
  LoginImgStyled,
  LoginPStyled,
} from "./Login.style";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import meal2 from "../../assets/meal2.svg";

const Login = () => {
  return (
    <LoginStyled>
      <LoginDivStyled>
        <LoginImgStyled src={meal2}></LoginImgStyled>
        <LoginPStyled>RECIPE APP</LoginPStyled>
        <Form className="d-flex flex-column">

          <Form.Group className="mb-3" controlId="formBasicEmail">

            <Form.Control type="text" placeholder="USERNAME" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="PASWORD" />
          </Form.Group>
          <Button className="" variant="primary" type="submit">
            LOGIN
          </Button>
        </Form>
      </LoginDivStyled>
    </LoginStyled>
  );
};

export default Login;
