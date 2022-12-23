import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { auth } from "./fierbase-auth";

function App() {
  var [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home name={userName} />}>
            Home
          </Route>
          <Route path="/signup" element={<Signup />}>
            SignUp
          </Route>
          <Route path="/login" element={<Login />}>
            Login
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
