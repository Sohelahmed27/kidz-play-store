import { Link } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false)
  const [user, setUser] = useState(null)
  
  const {signUp, googleSignIn} = useContext(AuthContext)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(email, password, photo, name);
    signUp(email, password)
    .then(result => {
      const createdUser = result.user;
      setUser(createdUser);
      setLoggedIn(true)
    })
    .catch(err => {
      setError(err);
    })
  };
  return (
    <div className="hero min-h-screen bg-[#11468F] ">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center">
          <h1 className="text-3xl text-white font-bold">Register</h1>
        </div>
        <div className="card flex-shrink-0 w-80 shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo_URL"
                  className="input input-bordered"
                  name="photo"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#11468F]"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
            <div className="text-center">
              <small>
                Already have an account? Please
                <Link to="/login" className="text-primary font-bold">
                  Login
                </Link>
              </small>
              <div className="divider">OR</div>
              <GoogleButton
                onClick={() => {
                  googleSignIn()
                  .then(result => {
                    const createdUser = result.user;
                    setUser(createdUser)

                  })
                 .then(error => {
                  console.error(error)
                 })
                }}
              />
                {loggedIn ? (  <div className="text-green-500 m-4">Registered successfully!</div>
        
      ) : null}
                {error ? (
        <div className="m-4 text-red-600">Please provide a valid email and password!</div>
      ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
