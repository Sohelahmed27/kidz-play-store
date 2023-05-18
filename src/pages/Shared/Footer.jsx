import logo from '../../assets/logo2.png'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="bg-accent text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center">
            <img src={logo} alt="Website Logo" className="h-20 w-20" />
            <span className="font-bold text-lg ml-2">Kids Zone</span>
          </div>
          <p className=" text-sm mt-4">&copy; {new Date().getFullYear()} All rights reserved</p>
          <p className=" text-sm">Contact: example@example.com</p>
          <p className="text-sm">Address: 123 Main Street, City, Country</p>
        </div>
        <div>
          <h3 className=" font-semibold text-lg">Quick Links</h3>
          <ul className="mt-4">
            <li><a href="/" className=" hover:text-blue-500">Home</a></li>
            <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="/products" className=" hover:text-blue-500">Products</a></li>
            <li><a href="/blog" className=" hover:text-blue-500">Blog</a></li>
            <li><a href="/contact" className=" hover:text-blue-500">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className=" font-semibold text-lg">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500"
            >
             <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-pink-500"
            >
              
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 text-center text-sm">
        <p>Terms of Service | Privacy Policy</p>
        <p>Designed and developed by <a href="https://example.com" className="text-blue-500 hover:text-blue-600">Cosmic traveler</a></p>
      </div>
    </footer>
  );
};

export default Footer;

