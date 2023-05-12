import { useState, useEffect } from "react";
import { confirmAlert } from 'react-confirm-alert';
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


export default function ShowSnack() {
    const [snack, setSnack] = useState([]);

    const { id } = useParams()
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data[0])
      }).catch((e) => {
        console.log("catch", e)
      })
    }, [id]);

    
      function deleteSnack() {
        axios
          .delete(`${API}/snacks/${id}`)
          .then(() => {
            navigate(`/snacks`);
          })
          .catch((e) => {
            console.warn("catch:", e);
          });
      };

    return(
        <article>
            <h2>Name: {snack.name}</h2>
    <h3>{snack.added_sugars ? <p>Contains Added Sugars</p> : <p>Does Not Contain Added Sugars</p>}</h3>
    <h5>Calories: {snack.calories}Kcal </h5>
    <h5>Fat: {snack.fat}g</h5>
    <h5>Carbs: {snack.carbs}g</h5>
    <h5>Sodium: {snack.sodium}mg</h5>
    <div className="showNavigation">
      <div>
        <Link to={`/snacks`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/snacks/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={() => {
    const confirmBox = window.confirm(
      "Do you really want to delete this Snack?"
    )
    if (confirmBox === true) {
      deleteSnack()
    }
  }}>
          Delete</button>
      </div>
    </div>
  </article>
    )
};