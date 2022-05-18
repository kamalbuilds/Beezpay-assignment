import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Landing from './components/Landing.js';
import Header from './components/Header.js';

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
      
              {/* <Route path="/landing" elements={{ <Header /> ,<Landing />}} > */}
              <Route path="/" element={<> <Header /> ,<Landing /></>}/>
              <Route path="/signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/phonesignup" element ={<PhoneSignUp />} />
              
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
