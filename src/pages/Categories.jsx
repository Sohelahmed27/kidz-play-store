import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EngineeringToy from "./toyTypes/EngineeringToy";
import LanguageToys from "./toyTypes/LanguageToys";
import MathToys from "./toyTypes/MathToys";

const Categories = () => {
  const [engineerings, setEngineerings] = useState([]);
  const [maths, setMaths] = useState([]);
  const [languages, setLanguages] = useState([]);
  const handleEngineeringToys = () => {
    fetch("https://kids-zone-server-murex.vercel.app/toys/engineering")
      .then((response) => response.json())
      .then((data) => setEngineerings(data));
  };

  const handleLanguageToys = () => {
    fetch("https://kids-zone-server-murex.vercel.app/toys/language")
      .then((response) => response.json())
      .then((data) => setLanguages(data));
  };

  const handleMathToys = () => {
    fetch("https://kids-zone-server-murex.vercel.app/toys/math")
      .then((response) => response.json())
      .then((data) => setMaths(data));
  };

  return (
    <div>
      <h1 className="text-center text-5xl font-bold mt-10 mb-5">
        Choose By Category
      </h1>
      <p className="text-center text-xl  mt-5 mb-5">
        Unlock the potential of child with our educational toys
      </p>
      <Tabs className="mx-auto my-10">
        <TabList className="tabs tabs-boxed items-center justify-center text-xl text-bold ">
          <Tab
            onClick={handleEngineeringToys}
            className="tab  text-xl text-white  hover:bg-primary bg-[#253090]"
          >
            Engineering Toys
          </Tab>
          <Tab
            onClick={handleLanguageToys}
            className="tab tab-active mx-4 text-xl text-white  hover:bg-primary bg-[#253090]"
          >
            Language Toys{" "}
          </Tab>
          <Tab
            onClick={handleMathToys}
            className="tab text-xl text-white  hover:bg-primary bg-[#253090]"
          >
            Math Toys
          </Tab>
        </TabList>

        <TabPanel>
          <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto">
            {engineerings.map((engineer) => (
              <EngineeringToy
                key={engineer._id}
                engineer={engineer}
              ></EngineeringToy>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto tab-active">
            {languages.map((language) => (
              <LanguageToys
                key={language._id}
                language={language}
              ></LanguageToys>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto">
            {maths.map((math) => (
              <MathToys key={math._id} math={math}></MathToys>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
