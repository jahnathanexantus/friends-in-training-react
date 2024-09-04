import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import placeHold from "../assets/images/userplaceholder.png";
import "./selectedprofile.css";

const SelectedProfile = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    individualProfile();
  }, [id]);

  const individualProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/results/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("this is the return on the client side", result);
      setUserData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="selected-profile">
      <div className="profile-box">
        {userData && (
          <>
            <div className="pictures-column">
              {userData.files && userData.files.length > 0 ? (
                userData.files.map((pic) => (
                  <img
                    key={pic.id}
                    src={`/${pic.image}`} // Adjusted to ensure proper path
                    alt={pic.description}
                    className="user-pic"
                  />
                ))
              ) : (
                <p>No pictures available</p>
              )}
            </div>
            <div className="pro-card">
              <div className="card-pro">
                <a href="#">
                  <img
                    src={placeHold}
                    alt="placeholder"
                    className="placeHolder-pic"
                  />
                </a>
                <div className="user-label" id="user_name">
                  <h3>
                    {userData.first_name} {userData.last_name}
                  </h3>
                </div>
                <div className="us-description" id="user_description">
                  <ul className="pro-list">
                    <li>
                      {userData.city}, {userData.state}
                    </li>
                    <li>{userData.fitness_level}</li>
                    <li>Gym: {userData.gym.name}</li>
                  </ul>
                </div>
                <Link to={`/chatpage/${id}`}>
                  <button className="chat-button">Chat</button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedProfile;
