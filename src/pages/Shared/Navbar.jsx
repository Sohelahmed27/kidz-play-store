
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          Logo
        </Link>
        <ul className="flex space-x-4">
          <li>
            <NavLink
              exact
              to="/"
              className="text-white hover:text-blue-200"
              activeClassName="text-blue-200"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/toys"
              className="text-white hover:text-blue-200"
              activeClassName="text-blue-200"
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-toys"
              className="text-white hover:text-blue-200"
              activeClassName="text-blue-200"
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className="text-white hover:text-blue-200"
              activeClassName="text-blue-200"
            >
              Blogs
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
