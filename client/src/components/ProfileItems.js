import React, { useState, useEffect } from "react";
import placeHold from "../assets/images/userplaceholder.png";
import "./profileItem.css";

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    profileData();
  }, []);

  const profileData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/gyms", {
        method: "GET",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="profile-container">
      <div className="profile-card ">
        {data.map((item, index) => (
          <div key={index} className="card-profiles">
            <a href="#">
              <img
                src={placeHold}
                alt="placeholder"
                className="placeHolder-pic"
              />
            </a>
            <div className="rela-block user-name" id="user_name">
              <h3>
                {item.first_name} {item.last_name}
              </h3>
            </div>
            <div className="rela-block user-desc" id="user_description">
              <ul className="profile-list">
                <li>
                  {item.city}, {item.state}
                </li>
                <li>{item.fitness_level}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
