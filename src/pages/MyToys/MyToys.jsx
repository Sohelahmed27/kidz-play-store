/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const handleDelete = id => {
    const proceed = confirm('Are You want to delete')

    if (proceed) {
       fetch(`http://localhost:3000/myToys/${id}`,
       { method: 'DELETE'})
       .then(res => res.json())
       .then((data) =>{
        console.log(data);
        if(data.deletedCount > 0){
          const remaining =toys.filter(toys._id !== id)
          setToys(remaining)
        }
       })
    }
  }
 const handleUpdate = (id) => {
   fetch(`http://localhost:3000/myToys/${id}`),{
    method:'PATCH', 
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({status:'confirm'})
   }
   .then(response =>response.json())
   .then(data => {
    console.log(data)
    if(data.modifiedCount > 0) {
      const remaining = toys.filter(toy=>toys._id !== id)
      const updated = toys.find(toy=>toy._id == id)
      updated.status = 'confirm'
      const newToys =[updated,  ...remaining]
      setToys(newToys)
    }

   })
 }

 

  useEffect(() => {
    fetch(`https://kids-zone-server-murex.vercel.app/myToys/${user?.email}`)
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
                <button>Update</button>
              </th>
              <th>Delete</th>
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
                  <button onClick={()=>handleUpdate(toy._id)} className="btn btn-outline btn-info">Update</button>
                </td>
                <td>
                  <button onClick={()=>handleDelete(toy._id)} className="btn btn-outline btn-info">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
