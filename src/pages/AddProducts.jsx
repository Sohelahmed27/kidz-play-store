
import { useForm } from 'react-hook-form';

const AddProducts = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
   console.log(data);
   
    fetch("http://localhost:3000/addToy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
   <div className='bg-[#11468F]'>
   <h1 className='text-center text-3xl font-bold text-white p-10'>Add Toys</h1>
  <div>
  <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto border border-solid border-blue-600 shadow-md rounded-lg p-10 bg-teal-500">
    <div className="mb-4">
      <label htmlFor="pictureUrl" className="block mb-1 font-bold">Picture URL</label>
      <input
        type="text"
        id="pictureUrl"
        {...register('pictureUrl', { required: true })}
        className="border rounded px-2 py-1 w-full"
      />
      {errors.pictureUrl && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-1">Name</label>
      <input
        type="text"
        id="name"
        {...register('name', { required: true })}
        className="border rounded px-2 py-1 w-full"
      />
      {errors.name && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="mb-4">
      <label htmlFor="sellerName" className="block mb-1">Seller Name</label>
      <input
        type="text"
        id="sellerName"
        {...register('sellerName')}
        className="border rounded px-2 py-1 w-full"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="sellerEmail" className="block mb-1">Seller Email</label>
      <input
        type="email"
        id="sellerEmail"
        {...register('sellerEmail')}
        className="border rounded px-2 py-1 w-full"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="subCategory" className="block mb-1">Sub-category</label>
      <select id="subCategory" {...register('subCategory', { required: true })} className="border rounded px-2 py-1 w-full">
        <option value="math">Math Toys</option>
        <option value="language">Language Toys</option>
        <option value="science">Science Toys</option>
      </select>
      {errors.subCategory && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="mb-4">
      <label htmlFor="price" className="block mb-1">Price</label>
      <input
        type="number"
        id="price"
        {...register('price', { required: true })}
        className="border rounded px-2 py-1 w-full"
      />
      {errors.price && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="mb-4">
      <label htmlFor="rating" className="block mb-1">Rating</label>
      <input
        type="number"
        id="rating"
        {...register('rating')}
        className="border rounded px-2 py-1 w-full"
      />
    </div>
    <div className="mb-4">
      <label htmlFor="quantity" className="block mb-1">Available Quantity</label>
      <input
        type="number"
        id="quantity"
        {...register('quantity', { required: true })}
        className="border rounded px-2 py-1 w-full"
      />
      {errors.quantity && <span className="text-red-500">This field is required</span>}
    </div>
    <div className="mb-4">
      <label htmlFor="description" className="block mb-1">Detail Description</label>
      <textarea
        id="description"
        {...register('description')}
        className="border rounded px-2 py-1 w-full"
      />
    </div>
    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
  </form>
  </div>
   </div>
  );
};

export default AddProducts;