import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import placeHold from "../assets/images/userplaceholder.png";
import "./matchProfile.css";

const MatchProfiles = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state
  const [error, setError] = useState(null); // Add an error state

  // Define the function before using it in useEffect
  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }

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
      setError(error.message);
    } finally {
      setLoading(false); // Ensure loading is set to false in both success and failure
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error state
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        {data.length === 0 ? (
          <div>No profiles found</div>
        ) : (
          data.map((item) => (
            <div key={item.id} className="card-profiles">
              <Link to={`/selectedprofile/${item.id}`}>
                <img
                  src={item.profile_image || placeHold} // Use user's profile image if available
                  alt={`${item.first_name} ${item.last_name}`}
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
          ))
        )}
      </div>
    </div>
  );
};

export default MatchProfiles;
