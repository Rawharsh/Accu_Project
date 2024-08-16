import React from "react";
import './EmployeeProfile.css'

const EmployeeProfile = ()=>{

    return (
        <div class="profile-container">
        <h3>Welcome,</h3>
        <div class="profile-photo">
            <img src="../public/profile.png" alt="Employee Photo"/>
        </div>
        <div class="profile-details">
            <h1>Reena Devi</h1>
            <p><strong>Position:</strong> Software Engineer</p>
            <p><strong>Department:</strong> Development</p>
            <p><strong>Employee ID:</strong> 8523649</p>
            <p><strong>Location:</strong> Uttar Pradesh</p>
        </div>
        <div class="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> Reenadevi984@gmail.com</p>
            <p><strong>Phone:</strong> +91-9568855683</p>
        </div>

        <div class="profile-button">
            <button class="profile-btn" id="request-btn">Request</button>
            <button class="profile-btn" id="MyListing-btn">MyListing</button>
        </div>

    </div>    
    )
}


export default EmployeeProfile