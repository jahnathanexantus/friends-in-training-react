import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeHold from "../assets/images/userplaceholder.png";
import "./profileItem.css";

const ProfileItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    profileData();
  }, []);

  const profileData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/results/match", {
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
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        {data.map((item, index) => (
          <div key={index} className="card-profiles">
            <Link to={`/selectedprofile/${item.id}`}>
              <img
                src={placeHold}
                alt="placeholder"
                className="placeHolder-pic"
              />
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
            </Link>
            <Link to={`/chat/${item.id}`}>
              <button className="chat-button">Chat</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileItem;
