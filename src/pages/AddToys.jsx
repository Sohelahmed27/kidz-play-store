const AddToys = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the form data, such as sending it to a server or updating state.
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Add toy!</h1>
          </div>
          <div className="card   shadow-2xl bg-base-100">
            <div className="card-body">
              <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
              <div className="form-control">
                  <select name="subCategory" className="select select-bordered ">
                    <option disabled selected>
                      Select a sub-category
                    </option>
                    <option name="Math Toys">Math Toys</option>
                    <option name="Language Toys">Language Toys</option>
                    <option name="Science Toys">Engineering Toys</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label"></label>
                  <input
                    type="text"
                    name="pictureUrl"
                    placeholder="pictureUrl"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">Seller Name</label>
                  <input
                    type="text"
                    name="seller-name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Seller Email</label>
                  <input
                    type="email"
                    name="seller-email"
                    className="input input-bordered"
                  />
                </div>
               
                <div className="form-control">
                  <label className="label">Price</label>
                  <input
                    type="number"
                    name="price"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Rating</label>
                  <input
                    type="number"
                    name="rating"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">Available Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="quantity"
                    className="input input-bordered"
                  />
                </div>
                <div  className="form-control flex flex-grow-1">
                  <label  className="label ">Detail Description</label>
                  <textarea 
                    name="description"
                    className="input input-bordered"
                  />
                </div>
                
              </form>
              <div className="form-control mt-6">
                <input type="submit" value='add' className="btn btn-primary"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToys;
