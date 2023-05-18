import errorMessage from '../assets/404 Page.jpg'

const ErrorPage = () => {
  return (
    <div>
      
      <img src={errorMessage}  width="100%" alt="Error Message" className='items-center'/>
    </div>
  );
};

export default ErrorPage;