import React, { useState } from "react";

const FollowButton = ({ followerId, followingId }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFollow = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/follow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ followerId, followingId }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsFollowing(true);
        setMessage(data.message || "You are now following this user!");
      } else {
        setMessage(data.error || "Failed to follow user");
      }
    } catch (error) {
      setMessage("An error occurred while following");
    }
    setLoading(false);
  };

  const handleUnfollow = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/unfollow", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ followerId, followingId }),
      });

      const data = await response.json();
      if (response.ok) {
        setIsFollowing(false);
        setMessage(data.message || "You have unfollowed this user.");
      } else {
        setMessage(data.error || "Failed to unfollow user");
      }
    } catch (error) {
      setMessage("An error occurred while unfollowing");
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <button disabled>Loading...</button>
      ) : isFollowing ? (
        <button onClick={handleUnfollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default FollowButton;
