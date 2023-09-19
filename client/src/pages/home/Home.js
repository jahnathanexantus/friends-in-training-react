import React from "react";
import logo from "../../assets/images/FITlogo.png";
import "./home.css";

const Home = () => {
  return (
    <section className="gradient-form background-img">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src={<logo/>}
                        style={{ width: '185px' }} alt="logo" />
                      <h4 className="mt-1 mb-5 pb-1">Welcome to F.I.T</h4>
                    </div>

                    <form id="login-form">
                      <p className="login">Login to find the perfect workout partner</p>

                      <div className="form-outline mb-4">
                        <input type="email" id="login-username" className="form-control"
                          placeholder="username" />
                        {/* <label className="form-label" for="form2Example11">Username</label> */}
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="login-password" className="form-control" placeholder="password" />
                        {/* <label className="form-label" for="form2Example22">Password</label> */}
                      </div>

                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                          in</button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-danger">Get Started</button>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h2 className="mb-0">Friends In Fitness</h2>
                    <h5 className="mb-4">More than just gym partners.</h5>
                    <p className="mb-4">Find, match, and train with a unique mix of local gym goers ranging from novice to enthusiast. <br /> Find your fit, with F.I.T.</p>
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
