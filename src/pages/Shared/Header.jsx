

import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png'
import { AuthContext } from '../../Provider/AuthProvider';


const Header = () => {
  const {user, logOut} = useContext(AuthContext)
  console.log(user)

  const handleLogOut = () => {
    toast('Logout successfully.', {
      duration: 20000,
      position: 'top-center'})
     logOut()
     
     .then(() => {
      
     })
     .catch(error => console.error(error))
  }
 
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
              to="/blog"
              className="hover:text-blue-200"
              
            >
              Blog
            </Link>
          </li>
         

          {
            user? <div className='flex space-x-5'>
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
              to="/allToy"
              className="hover:text-blue-200"
              
            >
              All Toy
            </Link>
          </li>
          <li>
            <Link
              to="/addProducts"
              className="hover:text-blue-200"
              
            >
              Add Products
            </Link>
          </li>
          <div>
          <button onClick={handleLogOut} >Logout</button>
         
          </div>
            </div> :
            <li>
            <Link
              to="/login"
              className="hover:text-blue-200"
              
            >
              Login
            </Link>
          </li>
          
          }
          {
            user &&
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL
} />
          <span className="absolute top-0 left-0 bg-blue text-white px-2 py-1 opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none">
           {user.displayName
}
          </span>
        </div>
      </label>
          }
          
          
          {/* <li>
            <Link
              to="/register"
              className="hover:text-blue-200"
              
            >
              Signup
            </Link>
          </li> */}
         
        </ul>
      </div>
    </nav>
  );
};

export default Header;
