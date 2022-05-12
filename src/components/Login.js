import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Axios from 'axios';
import { useUserAuth } from "../context/UserAuthContext";
import img from './images/user.png';


const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [ph_number, setPh_number] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Axios.post('http://us-central1-beezhive-79e2f.cloudfunctions.net/app/api/waitlist',{
    //   "id" : 1,
    //   "name": "name",
    //   "email": "email",
    //   "ph_number": "ph_number"
    // }).then(res=> console.log("wow sending", res))

    (async () => {
      const rawResponse = await fetch('http://us-central1-beezhive-79e2f.cloudfunctions.net/app/api/waitlist', {
        method: 'POST',
        body: {
            "id" : 1,
            "name": "name",
            "email": "email",
            "ph_number": "ph_number"
          }
      });
      
    
      console.log('hu');
    })();
  };



  return (
    <>
      <div className="user">
        <img src={img} width="300px" className="userimg"/>
      </div>
      <div className="p-10 box">
        <h2 className="mb-3">Join Waitlist Form</h2>
        <h6>No hidden fees, No Joining fees, No Annual fees</h6><br />
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Control
              type="string"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Control
              type="number"
              placeholder="Phone Number"
              value={ph_number}
              onChange={(e) => setPh_number(e.target.value)}
            />
          </Form.Group>


        </Form>
        <hr />


        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit" onClick={handleSubmit}>
              Sign up with Phone
            </Button>
          </div>
        </Link>
      </div>

    </>
  );
};

export default Login;
