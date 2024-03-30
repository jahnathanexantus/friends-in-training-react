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
      const response = await fetch("/api/results", {
        method: "GET",
        headers: { "content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("result:", result);
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
              {item.first_name} {item.last_name}
            </div>
            <div className="rela-block user-desc" id="user_description">
              <ul className="profile-list">
                <li>
                  {item.city}, {item.state}
                </li>
                {/* <li>{item.gender}</li> */}
                <li>{item.fitness_level}</li>
                {/* <li>{item.gym?.name}</li> */}
                {/* <li>{item.availability}</li> */}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
