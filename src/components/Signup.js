import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./Firebase/firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import "./Signup.css";

//import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const Navigate = useNavigate("");

  const [errorMSG, setErrorMessage] = useState("");
  const [successMSG, setSuccessMSG] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const initialcartvalue = 0;
        console.log(user);
        addDoc(collection(db, "users"), {
          username: username,
          phonenumber: phonenumber,
          email: email,
          address: address,
          cart: initialcartvalue,
          uid: user.uid,
        }).then(() => {
          setSuccessMSG(
            "New user added successfully,and you will automatically redirect to login page"
          );
          setUsername("");
          setPassword("");
          setEmail("");
          setPhonenumber("");
          setErrorMessage("");
          setSuccessMSG("");
          Navigate("./Login");
        }, 4000);
      })
      .catch((error) => {
        if (error.message == "Firebase:Error(Auth/invalid-email).") {
          setErrorMessage("Please fill all required fields");
        }
        if (error.message == "Firebase:Error(Auth/email-already-in-use).") {
          setErrorMessage("User already exist");
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div className="signup-container">
        <form className="signup-from" onSubmit={handleSubmit}>
          <a>Create Your Account</a>
          {successMSG && (
            <>
              <div className="success-msg">{successMSG}</div>
            </>
          )}
          {errorMSG && (
            <>
              <div className="error-msg">{errorMSG}</div>
            </>
          )}
          <label>Enter Your Name:</label>
          <input
            type="text"
            placeholder="First Name+ Last Name"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Enter Your setPhone Number:</label>
          <input
            type="tel"
            placeholder="Mobile Number"
            onChange={(e) => setPhonenumber(e.target.value)}
          ></input>
          <label>Enter Your Email:</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label>Set Your Passward:</label>
          <input
            type="passward"
            placeholder="Passward"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <label>Enter Your Address:</label>
          <textarea
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
          <button type="submit">Create</button>
          <div>
            <span>Already have an account?</span>
            <Link to="./Login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
