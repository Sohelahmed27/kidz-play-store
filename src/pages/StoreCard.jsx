import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const StoreCard = ({store}) => {
  // eslint-disable-next-line react/prop-types
  const{ name, photo, price} = store;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-10 mb-10">
    <figure>
      <img
        src={photo}
        alt="Shoes"
        height='400px'
        width="400px"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {name}
        <div className="badge badge-secondary">NEW</div>
      </h2>
    <p className="text-orange text-xl font-bold">${price}</p>
    <div className="card-actions">
      <Link to='/login'>
      <button className="btn btn-primary">Details</button>
      </Link>
    </div>
    </div>
  </div>
  );
};

export default StoreCard;