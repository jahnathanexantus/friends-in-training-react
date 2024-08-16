import React, { useState, useEffect } from "react";
import "./uploadpic.css";

const UploadPic = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      console.error(
        "UserId is not found in localStorage. Please log in again."
      );
    }
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!userId) {
      alert("UserId is not found. Please log in again.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    formData.append("userId", userId);

    console.log("this is the form data before sending:");
    console.log("File:", {
      name: file.name,
      type: file.type,
      size: file.size,
    });
    console.log("Description:", description);
    console.log("UserId:", userId);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("User is not authenticated. Please log in first.");
        return;
      }

      const response = await fetch("/api/uploads/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || response.statusText);
      }

      const data = await response.json();
      console.log("Response from server:", data);
      alert("File uploaded successfully!");
    } catch (error) {
      console.error("There was an error uploading the picture!", error);
      alert("Failed to upload picture. Please try again. " + error.message);
    }
  };

  return (
    <div className="upload-pic-container">
      <div className="upload-pic-card">
        <h2>Upload Picture</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="file">Select file:</label>
            <input type="file" id="file" onChange={handleFileChange} required />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </div>
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default UploadPic;
