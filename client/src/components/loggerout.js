import React from "react";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await fetch("/logout", {
        method: "POST",
        credentials: "same-origin", // Include cookies in the request
      });
      if (response.ok) {
        // Logout successful, perform any additional actions
      } else {
        throw new Error("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      // Handle logout error
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
