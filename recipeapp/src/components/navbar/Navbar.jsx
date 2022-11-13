import { useReducer } from "react";
import { Link } from "react-router-dom";
import { initalState, reducer } from "../../context/reducer";
import { NavBarStyle, NavBarLinkStyle } from "./Navbar.style";

const Navbar = () => {
    const [state, dispatch] = useReducer(reducer, initalState);
    console.log(state);
  return (
    <NavBarStyle>
      <div>RECIPE APP</div>
      <NavBarLinkStyle>
        <Link to="/about">ABOUT</Link>
        <a href="https://github.com/musttafaaktepe" target="blank">GITHUB</a>
        <Link to={"/"}>LOGOUT</Link>
      </NavBarLinkStyle>
    </NavBarStyle>
  );
};

export default Navbar;
