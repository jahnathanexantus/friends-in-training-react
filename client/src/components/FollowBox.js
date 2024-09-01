import React, { useState, useEffect } from "react";
import "./followBox.css"; // Ensure to import your CSS

const FollowBox = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const displayFollow = async () => {
      try {
        const response = await fetch("/api/follow/follow", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
      }
    };

    displayFollow();
  }, []);

  return (
    <div className="follow-box">
      <div className="titleBar">Homies</div>
      <div className="followers-container">
        {data.length === 0 ? (
          <div className="no-followers">No followers</div>
        ) : (
          data.map((fol) => (
            <div key={fol.id} className="follower">
              <img
                src={fol.profilePicture}
                alt={fol.name}
                className="profile-pic"
              />
              <span className="follower-name">{fol.name}</span>
            </div>
          ))
        )}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default FollowBox;
