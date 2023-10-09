import React, { useState, useEffect } from 'react';
import NavBar from "../../components/NavBar";
import ProfileItem from "../../components/ProfileItems";

const Profile = () => {
  const [data,setData]=useState('')
  


  // useEffect(()=>{
  //   individualProfile()
  // },[]);


  // const individualProfile = async()=>{
  //   try{
  //     const response = await fetch('/api/profile',{
  //       method: 'GET',
  //       headers:{'content-Type':'application/json'}
  //     })
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     console.log("this is the profile fetch",result)
  //     setData(result);
  //     console.log(result)
  //   }catch (error) {
  //     console.error('Error fetching data:', error);
  // }
  // }
  return (<div className="main">
    <div className="header">
    <NavBar/>
    </div>
    
    <div className="body-content">
      <ProfileItem/>
    </div>
  </div>
  )
};

export default Profile;
