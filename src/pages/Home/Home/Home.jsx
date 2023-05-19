import banner from '../../../assets/b2.jpg'
const Home = () => {
  
  return (
    <div>
      <div className="relative" >
      <img src={banner} alt="" className='fluid'  width="100%" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-60 left-96 l flex flex-col items-center justify-center  text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Kids Zone</h1>
        <p className="text-lg mb-8 text-center">Explore our wide range of educational toys,<br /> Designed to ignite curiosity and inspire young minds..</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Learn More
        </button>
        <div className="bg-[url('https://ibb.co/R9Bskdn')]">

</div>
      </div>
    </div>
    </div>
   
    


  );
};

export default Home;