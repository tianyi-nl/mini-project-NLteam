import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
