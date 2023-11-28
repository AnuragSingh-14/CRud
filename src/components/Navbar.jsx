import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" style={{ background: "black" }}>
      <ul className="ul">
      <NavLink to="/">
          <li>Home</li>
        </NavLink>

        <NavLink to="adduser">
          <li>AddUser</li>
        </NavLink>

        <NavLink to="users">
          <li>Users</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
