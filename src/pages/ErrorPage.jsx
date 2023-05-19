import { Link } from 'react-router-dom';
import errorMessage from '../assets/404 Page.jpg'
import { HiArrowSmallLeft } from "react-icons/hi2";

const ErrorPage = () => {
  return (
    <div className=" mt-8 relative">
       
      <img src={errorMessage}  width="100%" alt="Error Message" className='items-center'/>
      <Link to="/"
        className="flex justify-center items-center gap-4 bg-[#4E31AA] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-3 left-0"
        
      >
      <HiArrowSmallLeft></HiArrowSmallLeft>
        Go back home
      </Link>
    </div>
  );
};

export default ErrorPage;