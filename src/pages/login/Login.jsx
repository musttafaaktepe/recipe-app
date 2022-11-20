import {
  LoginStyled,
  LoginDivStyled,
  LoginImgStyled,
  LoginPStyled,
} from "./Login.style";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import meal2 from "../../assets/meal2.svg";
import { MainContext } from "../../context/context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    data,
    data: { userName, password },
    setData,
  } = useContext(MainContext);
 

  const navigate = useNavigate();

  const LoginButtonFunc = (e) => {
    e.preventDefault();
    if (userName && password) {
      setData({...data, user:true})
      navigate("/home");
    } else {
      navigate("/");
    }
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
              onChange={(e) => setData({ ...data, userName: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="PASSWORD"
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </Form.Group>

          <Button type="submit" variant="primary" onClick={LoginButtonFunc}>
            LOGIN
          </Button>
        </Form>
      </LoginDivStyled>
    </LoginStyled>
  );
};

export default Login;
