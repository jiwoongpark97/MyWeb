import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from '../../images/menu.gif'
import menu from '../../images/menu.png'

const Header = () => {
    const [play, setPlay] = useState(false)
  return (
    <div
      style={{
        height: "15vh",
        justifyContent: "space-around",
        width: "100vw",
        alignItems: "center",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <NavLink to="/">
        <a href="/">
          <img
            style={{ width: 200, heigh: 200 }}
            src={require("../../images/logo.png")}
          />
        </a>
      </NavLink>
      <div onMouseOver={() => setPlay(true)} onMouseOut={() => setPlay(false)}>
        {
            play ?
            <a>
                <img style={{marginBottom: 20}} width={50} height={50} src={logo}/>
            </a>
            :
            <a>
                <img style={{marginBottom: 20}} width={50} height={50} src={menu}/>
            </a>
        }
      </div>
    </div>
  );
};

export default Header;
