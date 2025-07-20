import React from "react";
import { NavLink, Link } from "react-router-dom"; 
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menu, setMenu] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#181818"
  };

  return (
    <header>
      <Link to="." className="logo">
        Sri Shankar Traders
      </Link>

      {width < 500 ? (
        <>
          {menu 
          ? <IoMdClose onClick={() => setMenu(prev => !prev)} style={{ fontSize: "24px", cursor: "pointer" }}/> 
          : <CiMenuBurger onClick={() => setMenu(prev => !prev)} style={{ fontSize: "24px", cursor: "pointer" }} />}
          {menu && (
            <nav className="nav-narrow">
              <NavLink
                to="/ai"
                style={({ isActive }) => isActive ? activeStyles : undefined}
                onClick={() => setMenu(false)}
              >
                AI
              </NavLink>
              <NavLink
                to="/About"
                style={({ isActive }) => isActive ? activeStyles : undefined}
                onClick={() => setMenu(false)}
              >
                About
              </NavLink>
            </nav>
          )}
        </>
      ) : (
        <nav className="nav-wide">
            <NavLink
                to="/ai"
                style={({ isActive }) => isActive ? activeStyles : undefined}
            >
                AI
            </NavLink>
            <NavLink
                to="/About"
                style={({ isActive }) => isActive ? activeStyles : undefined}
                onClick={() => setMenu(false)}
                >
                About
            </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
