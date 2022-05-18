import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import img from './images/user.png';


const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();





  return (
    <>
      <div className="user">
        <img src={img} width="300px" className="userimg"/>
      </div>
      <div className="p-10 box">
        <h2 className="mb-3">Join Waitlist Form</h2>
        <h6>No hidden fees, No Joining fees, No Annual fees</h6><br />
        {error && <Alert variant="danger">{error}</Alert>}
        <Form>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="string"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>


        </Form>
        <hr />


        <Link to="/phonesignup">
          <div className="d-grid gap-2 mt-3">
            <Button variant="success" type="Submit">
              Sign up with Phone
            </Button>
          </div>
        </Link>
      </div>

    </>
  );
};

export default Login;
