import {
  LoginStyled,
  LoginDivStyled,
  LoginImgStyled,
  LoginPStyled,
} from "./Login.style";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import meal2 from "../../assets/meal2.svg";
import { useReducer } from "react";
import { initialState, reducer } from "../../reducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userName, password, user } = state;
  const navigate = useNavigate();

  const userNameFunc = (e) => {
    dispatch({ type: "HOME", username: e.target.value });
  };

  const loginButtonFunc = (e) => {
    e.preventDefault();
    dispatch({ type: "HOME" });
    navigate("/home");
  };

  return (
    <LoginStyled>
      <LoginDivStyled>
        <LoginImgStyled src={meal2}></LoginImgStyled>
        <LoginPStyled>RECIPE APP</LoginPStyled>
        <Form className="d-flex flex-column">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="USERNAME"
              onChange={userNameFunc}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="PASSWORD"
              onChange={(e) =>
                dispatch({ type: "HOME", password: e.target.value })
              }
            />
          </Form.Group>

          <Button type="submit" variant="primary" onClick={loginButtonFunc}>
            LOGIN
          </Button>
        </Form>
      </LoginDivStyled>
    </LoginStyled>
  );
};

export default Login;
