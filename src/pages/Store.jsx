import { useState } from "react";
import { useEffect } from "react";
import StoreCard from "./StoreCard";

const Store = () => {
  const [stores, setStores] = useState([]);
  useEffect(() => {
    fetch("https://kids-zone-server-murex.vercel.app/toys")
      .then((response) => response.json())
      .then((data) => setStores(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-20 mb-5">
        Our Popular Items
      </h1>
      <p className="text-center  text-xl  m-6">
        Empower young minds with our educational toys, sparking curiosity and
        fostering a love for learning.
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
        {stores.map((store) => (
          <StoreCard key={store.toys_id} store={store}></StoreCard>
        ))}
      </div>
    </div>
  );
};

export default Store;
