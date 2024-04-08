import React, { useState } from "react";
import Logo from "../../assets/images/FITlogo.png";
import SignUp from "../../components/SignUp";
import backgroundImage from "../../assets/images/login_bg.jpg";
import "./home.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginFormHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("You have sucessfully signed in ");
        window.location.replace("/Profile");
      } else {
        alert("Failed to log in");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="gradient-form ">
      <img
        className="background"
        src={backgroundImage}
        alt="background-image"
      />
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img id="logo" src={Logo} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Welcome to F.I.T</h4>
                    </div>

                    <form onSubmit={loginFormHandler}>
                      <p className="login">
                        Login to find the perfect workout partner
                      </p>

                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="login-username"
                          className="form-control"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="login-password"
                          className="form-control"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="submit"
                        >
                          Log in
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <div className="modal-body">{<SignUp />}</div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className=" side-2 col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className=" px-3 py-4 p-md-5 mx-md-4">
                    <h2 className="mb-0">Friends In Fitness</h2>
                    <h5 className="mb-4">More than just gym partners.</h5>
                    <p className="mb-4">
                      Find, match, and train with a unique mix of local gym
                      goers ranging from novice to enthusiast.
                      <br /> Find your fit, with F.I.T.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
