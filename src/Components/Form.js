import React, { useState } from "react";
import img from "../assets/image.png";
import googleImg from "../assets/google.png";
import facebookImg from "../assets/facebook.png";
import "./Form.css";

const Form = () => {
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const formValidation = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.password === "" ||
      formData.confirmPassword === ""
    ) {
      setMessage("Error: All fields are mandatory!");
      return false;
    }
    if (!formData.email.includes("@")) {
      setMessage("Error: Enter a valid email address!");
      return false;
    }

    if (formData.password.length < 8 || formData.confirmPassword.length < 8) {
      setMessage("Error: Password must be at least eight characters long!");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage(
        "Error: Please make sure your passwords and confirm passwords match!"
      );
      return false;
    }

    return true;
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (formValidation()) {
      console.log("Form Submitted Successfully");
      setMessage("Account created successfully!");
      setMessageStyle("success-message");

      // Reset the form once the form is submitted
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      setMessageStyle("error-message");
    }
  };

  return (
    <div className="page">
      <div className="left">
        <p>Find 3D Objects, Mockups and Illustrations here</p>
        <img src={img} alt="image" />
      </div>
      <div className="right">
        <div className="distance">
          <p className="heading">Create Account</p>
          <div className="buttons">
            <button className="google">
              <img src={googleImg} alt="google" />
              Sign up with Google
            </button>
            <button className="facebook">
              <img src={facebookImg} alt="facebook " />
              Sign up with Facebook
            </button>
          </div>
          <p className="or">- OR -</p>
          <form className="form" onSubmit={submitForm}>
            <input
              type="text"
              onChange={inputChangeHandler}
              name="name"
              value={formData.name}
              placeholder="Full Name"
            />
            <input
              type="text"
              onChange={inputChangeHandler}
              name="email"
              value={formData.email}
              placeholder="Email Address"
            />
            <input
              type="password"
              onChange={inputChangeHandler}
              name="password"
              value={formData.password}
              placeholder="Password"
            />
            <input
              type="password"
              onChange={inputChangeHandler}
              name="confirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
            />
            <button className="submit" type="submit">
              Create Account
            </button>
          </form>
          <p className={messageStyle}>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
