import { Link } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Nav = () => {
  const [snacks, setSnacks] = useState([]);
  let calories = 0

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/snacks`)
      .then((response) => {
        setSnacks(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  for (let i = 0; i < snacks.length; i++){
    calories += snacks[i].calories
  }


  return (
    <div className="nav" id="nav">
      <h2>Snack-A-Log!</h2>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <br></br>
      <Link className="nav-link" to="/snacks">
        Snack List
      </Link>
      <br></br>
      <Link className="nav-link" to="/snacks/new">
        New Snack
      </Link>
      <strong>Cal Counter: {calories}</strong>
      <br></br>
    </div>
  );
};

export default Nav;
