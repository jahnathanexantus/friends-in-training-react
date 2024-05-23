import React, { useState } from "react";
import "./uploadpic.css";

const UploadPic = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  console.log(file, description);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("description", description);
    formData.append("userId", localStorage.getItem("userId")); // Assuming userId is stored in localStorage
    console.log("this is the form data", formData);
    console.log(localStorage.getItem("userId"));
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("User is not authenticated. Please log in first.");
        return;
      }

      const response = await fetch("/api/picture/upload", {
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
      console.log(data);
      alert("Picture uploaded successfully!");
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
