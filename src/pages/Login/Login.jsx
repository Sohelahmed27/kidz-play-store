import { useState } from "react";
import { useContext } from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState(false)

  const {logIn, googleSignIn} = useContext(AuthContext);

  const handleLogin= (event) => {
    event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log(email, password);

     logIn(email, password)
     .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
     })
     .catch(err =>setError(err));

  }
  return (
    <div className="hero min-h-screen bg-[#11468F]">
      <div className="hero-content flex-col lg:flex-col">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Please Login</h1>
        </div>
        <div className="card flex-shrink-0 w-80 shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin} >
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
            <div className="form-control mt-6">
            <input className="btn bg-[#11468F]" type="submit" value="Login" />
             
            </div>
            </form>
            <div className="text-center">
              <small>
                New User? Please <Link to="/register" className="font-bold text-indigo-700">Register</Link>
              </small>
              <div className="divider">OR</div>
              <GoogleButton
                 onClick={() => {
                  googleSignIn()
                  .then(result => {
                    const loggedUser = result.loggedUser;
                    console.log(loggedUser)

                  })
                 .then(error => {
                  console.error(error)
                 })
                }}
              />
            </div>
            {error ? (
        <div className="m-4 text-red-600">Please provide a valid email and password!</div>
      ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
