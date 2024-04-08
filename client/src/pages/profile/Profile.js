import React, { useState, useEffect } from "react";
import placeHold from "../../assets/images/userplaceholder.png";
import "./profile.css";

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    individualProfile();
  }, []);

  const individualProfile = async () => {
    try {
      const response = await fetch("/api/profile/profile", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setUserData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="profile-box">
      <div className="pro-card">
        {userData && (
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
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
