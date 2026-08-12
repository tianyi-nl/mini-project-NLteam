import { NavLink } from "react-router-dom";


function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
