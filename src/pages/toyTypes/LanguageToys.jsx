

const LanguageToys = ({language}) => {
  const {name, photo, price, quantity, category} = language;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src={photo}
        alt="toys"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p className="text-bold text-xl">Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    </div>
  );
};

export default LanguageToys;