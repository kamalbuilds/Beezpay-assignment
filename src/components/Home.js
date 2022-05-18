import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import axios from 'axios';
import { useEffect } from "react";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(user);
  console.log('kamal');
  const join={
    "id": "1",
    "name": "user_name",
    "email": "user_email",
    "number": "user_phone"
 }
 
//axios post request on successful signup
  useEffect(() => {
    axios.post(`https://us-central1-beezhive-79e2f.cloudfunctions.net/app/api/waitlist`, { join})
      .then(res => {
        console.log(res);
        {if(res.waiting){
          alert(`You have joined Successfully and your waiting number is ${res.waiting}`);
        }
        else if(res.msg==="Error: Email Already registered"){
          alert("Please try with another email, this already exists");
        }
        else if(res.msg==="Error: Phone Number Already registered")
          alert("phone number already exists,Try to login with another number");
        }
      })
  
  }, [])
  


  return (
    <>
      <div className="p-4 box mt-3 text-center">
        You are on our waitlist My friend! <br />
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </>
  );
};

export default Home;