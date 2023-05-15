import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;


export default function ShowSnack() {
    const [snack, setSnack] = useState([]);

    const { id } = useParams()
    const navigate = useNavigate();
    let walking = 0
    let jumpRope = 0
    let hiking = 0
    let yoga = 0
  
    useEffect(() => {
      axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data[0])
      }).catch((e) => {
        console.log("catch", e)
      })
    }, [id]);

    walking = (snack.calories / 100) * 30;
    jumpRope = (snack.calories / 100) * 7;
    hiking = (snack.calories / 100) * 15;
    yoga = (snack.calories / 100) * 30;

    
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
    <p>How to burn these calories:</p>
    <p> Walking for <strong>{walking.toFixed(2)}</strong> minutes</p>
    <p> Jump Roping for <strong>{jumpRope.toFixed(2)}</strong> minutes </p>
    <p>Hiking for <strong>{hiking.toFixed(2)}</strong> minutes</p>
    <p>Doing yoga for <strong>{yoga.toFixed(2)}</strong> minutes</p>
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