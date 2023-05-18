
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png'

const Navbar = () => {
  return (
    <nav className="bg-[#0C134F] py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
          <img className='rounded' src={logo} alt="" width="80px" height="60px" />
        </Link>
        <ul className="font-bold text-xl text-white flex space-x-5">
          <li>
            <Link
             to="/"
              className="hover:text-blue-200"
           >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/toys"
              className="hover:text-blue-200"
             
            >
             Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/my-toys"
              className="hover:text-blue-200"
              
            >
              My Toys
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:text-blue-200"
              
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="hover:text-blue-200"
              
            >
              Add Toy
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
