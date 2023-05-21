import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EngineeringToy from "./toyTypes/EngineeringToy";

const Categories = () => {
  const [engineerings, setEngineerings] = useState([])
  const [maths, setMaths] = useState([])
  const [languages, setLanguages] = useState([])
  const handleEngineeringToys =()=> {
    console.log("Engine clicked")
    fetch('http://localhost:3000/toys/engineering')
    .then(response=>response.json())
    .then(data=>setEngineerings(data))
  }
  
  const handleLanguageToys =()=> {
    console.log("Language clicked")
  }
  
  const handleMathToys=()=> {
    console.log("Math clicked")
  }
   
  return (
    <div>
          <h1 className="text-center text-4xl font-bold mt-10 mb-5">Choose By Category</h1>
          <p className="text-center text-xl  mt-5 mb-5">Unlock the potential of child with our educational toys</p>
      <Tabs className="mx-auto">
        <TabList className="tabs tabs-boxed items-center justify-center text-xl text-bold ">
          <Tab onClick={handleEngineeringToys} className="tab text-xl text-white  hover:text-purple-600 bg-[#0C134F]">Engineering Toys</Tab>
          <Tab onClick={handleLanguageToys} className="tab ">Language  </Tab>
          <Tab onClick={handleMathToys} className="tab">Math Toys</Tab>
        </TabList>

        <TabPanel>
          <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto">
            {
              engineerings.map(engineer => <EngineeringToy key={engineer._id} engineer={engineer}></EngineeringToy>)

            }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bag!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">BOOK!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
     
    </div>
  );
};

export default Categories;
