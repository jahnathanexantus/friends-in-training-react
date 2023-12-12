import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const SignUp = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    state: "",
    fitnessLevel: "",
    availability: "",
    gender: "",
    gymId: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
        
      if (response.ok) {
        document.location.replace("/profile");
        alert(
          "You are signed up and logged in. Remember your password, please."
        );
      } else {
        console.log("this is in",response)
        alert("Failed to sign up this is the sign up part");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    
    <>
      <Button variant="primary" onClick={handleShow}>
        get start
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className="container">
      <form className="row g-3" onSubmit={handleSubmit}>
         <div className="col">
           <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword4"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <select
          id="inputState"
          className="form-select"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        >
          <option value=''>State...</option>
          <option value="AK">Alaska</option>
          <option value="AL">Alabama</option>
          <option value="AR">Arkansas</option>
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DC">District of Columbia</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="IA">Iowa</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MA">Massachusetts</option>
          <option value="MD">Maryland</option>
          <option value="ME">Maine</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MO">Missouri</option>
          <option value="MS">Mississippi</option>
          <option value="MT">Montana</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="NE">Nebraska</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NV">Nevada</option>
          <option value="NY">New York</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="PR">Puerto Rico</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VA">Virginia</option>
          <option value="VT">Vermont</option>
          <option value="WA">Washington</option>
          <option value="WI">Wisconsin</option>
          <option value="WV">West Virginia</option>
          <option value="WY">Wyoming</option>
        </select>

        <select
          id="fitnessLevel"
          className="form-select"
          name="fitnessLevel"
          value={formData.fitnessLevel}
          onChange={handleInputChange}
        >
          <option value="">Fitness level...</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <select
          id="availability"
          className="form-select"
          name="availability"
          value={formData.availability}
          onChange={handleInputChange}
        >
          <option value="">Availability...</option>
          <option value="Morning">Morning</option>
          <option value="Afternoon">Afternoon</option>
          <option value="Evening">Evening</option>
        </select>

        <select
          id="gender"
          className="form-select"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="">Gender...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          id="gymId"
          className="form-select"
          name="gymId"
          value={formData.gymId}
          onChange={handleInputChange}
        >
          <option value="">Select your gym...</option>
          <option value="1">24 Hour Fitness</option>
          <option value="2">Anytime Fitness</option>
          <option value="3">Crunch Fitness</option>
          <option value="4">Curves International</option>
          <option value="5">Equinox Fitness</option>
          <option value="6">Esporta Fitness</option>
          <option value="7">F45 Training</option>
          <option value="8">Gold's Gym</option>
          <option value="9">LA Fitness</option>
          <option value="10">Orangetheory Fitness</option>
          <option value="11">Planet Fitness</option>
          <option value="12">Pure Barre</option>
        </select>

        <div className="col">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUp;



// <div className="container">
    //   <form className="row g-3" onSubmit={handleSubmit}>
    //     <div className="col">
    //       <label htmlFor="firstName" className="form-label">
    //         First Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="firstName"
    //         name="firstName"
    //         value={formData.firstName}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="col">
    //       <label htmlFor="lastName" className="form-label">
    //         Last Name
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="lastName"
    //         name="lastName"
    //         value={formData.lastName}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="col-md-6">
    //       <label htmlFor="inputEmail4" className="form-label">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         id="inputEmail4"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="col-md-6">
    //       <label htmlFor="inputPassword4" className="form-label">
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         id="inputPassword4"
    //         name="password"
    //         value={formData.password}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <div className="col-md-6">
    //       <label htmlFor="inputCity" className="form-label">
    //         City
    //       </label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         id="inputCity"
    //         name="city"
    //         value={formData.city}
    //         onChange={handleInputChange}
    //       />
    //     </div>
    //     <select
    //       id="inputState"
    //       className="form-select"
    //       name="state"
    //       value={formData.state}
    //       onChange={handleInputChange}
    //     >
    //       <option value=''>State...</option>
    //       <option value="AK">Alaska</option>
    //       <option value="AL">Alabama</option>
    //       <option value="AR">Arkansas</option>
    //       <option value="AZ">Arizona</option>
    //       <option value="CA">California</option>
    //       <option value="CO">Colorado</option>
    //       <option value="CT">Connecticut</option>
    //       <option value="DC">District of Columbia</option>
    //       <option value="DE">Delaware</option>
    //       <option value="FL">Florida</option>
    //       <option value="GA">Georgia</option>
    //       <option value="HI">Hawaii</option>
    //       <option value="IA">Iowa</option>
    //       <option value="ID">Idaho</option>
    //       <option value="IL">Illinois</option>
    //       <option value="IN">Indiana</option>
    //       <option value="KS">Kansas</option>
    //       <option value="KY">Kentucky</option>
    //       <option value="LA">Louisiana</option>
    //       <option value="MA">Massachusetts</option>
    //       <option value="MD">Maryland</option>
    //       <option value="ME">Maine</option>
    //       <option value="MI">Michigan</option>
    //       <option value="MN">Minnesota</option>
    //       <option value="MO">Missouri</option>
    //       <option value="MS">Mississippi</option>
    //       <option value="MT">Montana</option>
    //       <option value="NC">North Carolina</option>
    //       <option value="ND">North Dakota</option>
    //       <option value="NE">Nebraska</option>
    //       <option value="NH">New Hampshire</option>
    //       <option value="NJ">New Jersey</option>
    //       <option value="NM">New Mexico</option>
    //       <option value="NV">Nevada</option>
    //       <option value="NY">New York</option>
    //       <option value="OH">Ohio</option>
    //       <option value="OK">Oklahoma</option>
    //       <option value="OR">Oregon</option>
    //       <option value="PA">Pennsylvania</option>
    //       <option value="PR">Puerto Rico</option>
    //       <option value="RI">Rhode Island</option>
    //       <option value="SC">South Carolina</option>
    //       <option value="SD">South Dakota</option>
    //       <option value="TN">Tennessee</option>
    //       <option value="TX">Texas</option>
    //       <option value="UT">Utah</option>
    //       <option value="VA">Virginia</option>
    //       <option value="VT">Vermont</option>
    //       <option value="WA">Washington</option>
    //       <option value="WI">Wisconsin</option>
    //       <option value="WV">West Virginia</option>
    //       <option value="WY">Wyoming</option>
    //     </select>

    //     <select
    //       id="fitnessLevel"
    //       className="form-select"
    //       name="fitnessLevel"
    //       value={formData.fitnessLevel}
    //       onChange={handleInputChange}
    //     >
    //       <option value="">Fitness level...</option>
    //       <option value="Beginner">Beginner</option>
    //       <option value="Intermediate">Intermediate</option>
    //       <option value="Advanced">Advanced</option>
    //     </select>

    //     <select
    //       id="availability"
    //       className="form-select"
    //       name="availability"
    //       value={formData.availability}
    //       onChange={handleInputChange}
    //     >
    //       <option value="">Availability...</option>
    //       <option value="Morning">Morning</option>
    //       <option value="Afternoon">Afternoon</option>
    //       <option value="Evening">Evening</option>
    //     </select>

    //     <select
    //       id="gender"
    //       className="form-select"
    //       name="gender"
    //       value={formData.gender}
    //       onChange={handleInputChange}
    //     >
    //       <option value="">Gender...</option>
    //       <option value="Male">Male</option>
    //       <option value="Female">Female</option>
    //     </select>

    //     <select
    //       id="gymId"
    //       className="form-select"
    //       name="gymId"
    //       value={formData.gymId}
    //       onChange={handleInputChange}
    //     >
    //       <option value="">Select your gym...</option>
    //       <option value="1">24 Hour Fitness</option>
    //       <option value="2">Anytime Fitness</option>
    //       <option value="3">Crunch Fitness</option>
    //       <option value="4">Curves International</option>
    //       <option value="5">Equinox Fitness</option>
    //       <option value="6">Esporta Fitness</option>
    //       <option value="7">F45 Training</option>
    //       <option value="8">Gold's Gym</option>
    //       <option value="9">LA Fitness</option>
    //       <option value="10">Orangetheory Fitness</option>
    //       <option value="11">Planet Fitness</option>
    //       <option value="12">Pure Barre</option>
    //     </select>

    //     <div className="col">
    //       <button type="submit" className="btn btn-primary">
    //         Sign Up
    //       </button>
    //     </div>
    //   </form>
    // </div>