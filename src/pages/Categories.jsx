import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Categories = () => {
  const handleEngineeringToys =()=> {
    console.log("Engine clicked")
  }
  
  const handleLanguageToys =()=> {
    console.log("Language clicked")
  }
  
  const handleMathToys=()=> {
    console.log("Math clicked")
  }
   
  return (
    <div>
          <h1 className="text-center text-3xl font-bold my-6">Choose By Category</h1>
      <Tabs className="mx-auto">
        <TabList className="tabs tabs-boxed items-center justify-center">
          <Tab onClick={handleEngineeringToys} className="tab ">Engineering Toys</Tab>
          <Tab onClick={handleLanguageToys} className="tab ">Language  </Tab>
          <Tab onClick={handleMathToys} className="tab">Math Toys</Tab>
        </TabList>

        <TabPanel>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
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
