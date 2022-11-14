import { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../context/context";
import { initalState, reducer } from "../../context/reducer";
import { NavBarStyle, NavBarLinkStyle } from "./Navbar.style";

const Navbar = () => {
  const {
    data,
    data: { user },
    setData,
  } = useContext(MainContext);

  return (
    <NavBarStyle>
      <div>RECIPE APP</div>
      <NavBarLinkStyle>
        <Link className="text-decoration-none" to="/about">ABOUT</Link>
        <a
          className="text-decoration-none"
          href="https://github.com/musttafaaktepe"
          target="blank"
        >
          GITHUB
        </a>
        <Link
          to={"/"}
          className="text-decoration-none"
          onClick={(e) =>
            setData({ ...data, user: false, userName: "", password: "" })
          }
        >
          LOGOUT
        </Link>
      </NavBarLinkStyle>
    </NavBarStyle>
  );
};

export default Navbar;
