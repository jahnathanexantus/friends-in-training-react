import React, { useState, useEffect } from "react";
import ProfileItem from "../../components/ProfileItems";
import "./profile.css";

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    individualProfile();
  }, []);

  const individualProfile = async () => {
    try {
      const response = await fetch("/api/profile", {
        method: "GET",
        headers: { "content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("this is the profile fetch", result);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="main">
      {data.map((item, index) => (
        <div key={index}>
          <ul>
            <li>{item.email}</li>
            <li>{item.fitness_level}</li>
          </ul>
        </div>
      ))}
      <div className="profile-container">
        <ProfileItem />
      </div>
    </div>
  );
};

export default Profile;
