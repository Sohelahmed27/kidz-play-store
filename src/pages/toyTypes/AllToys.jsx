/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);


  useEffect(() => {
    fetch('')
  })

  useEffect(() => {
    fetch(`https://kids-zone-server-murex.vercel.app/allToys`)
      .then((response) => response.json())
      .then((data) => setToys(data));
  }, [user]);
  return (
    <div>
    <h1 className="text-3xl mx-96 px-20 font-bold">My Toys</h1>
      <div className="form-control container mx-96 my-10">
        <div className="input-group mx-auto">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>
                <button>Seller</button>
              </th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr>
                <th></th>
                <td>{toy.name}</td>
                <td>{toy.subCategory}</td>
                <td>${toy.price}</td>
                <td>{toy.quantity}</td>
                <td>
                  {toy.sellerName}
                </td>
                <td>
                  <button className="btn btn-outline btn-info">Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;