import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "./UseContex/AuthProviders";

const Register = () => {

    // spep two
  const {user,  createUser}= useContext(AuthContex);
 console.log( createUser)

// step One  
  const handleRegesterSubmit = (event) => {
    event.preventDefault();
     const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    console.log(email, password, name);

createUser(email,password)
.then(result => {
    const logUser = (result.user)
    console.log(logUser)
    
})
.catch(error =>{
  
    console.log(error )
})

  };

  return (
    <div>
      
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Regester now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in.Provident cupiditate
              voluptatem et in{" "}
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            {/* Body */}
            <form onSubmit={handleRegesterSubmit} className="card-body">
              {/* name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <Link to="/login">
                    {" "}
                    <button className="btn btn-active text-white btn-link">
                      Alrady login acha?
                    </button>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Regester</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
