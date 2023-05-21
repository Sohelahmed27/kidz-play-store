import { useState } from "react";
import  { useEffect } from "react";
import StoreCard from "./StoreCard";

const Store = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(data=> setStores(data))
  
  }, [])
  return (
    <div>
    
      <h1 className="text-3xl text-center font-bold m-6">Our popular Items</h1>
      <p className="text-center font-bold m-6">Empower young minds with our educational toys, sparking curiosity and fostering a love for learning.</p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          stores.map(store =><StoreCard key={store.toys_id} store={store}></StoreCard>)
        }
      </div>
    </div>
  );
};

export default Store;
