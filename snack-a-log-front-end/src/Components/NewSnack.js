import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Snack from "./Snack";


export default function NewSnack() {
  const [ snack, setSnack ] = useState({
    name: "",
    calories: 0,
    fat: 0,
    sodium:0,
    carbs: 0,
    added_sugars: false,
  });


  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

    function addSnack (newSnack){
      axios
        .post(`${API}/snacks`, newSnack)
        .then(
          () => {
            navigate(`/snacks`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };

    const handleTextChange = (event) => {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    };

  const handleCheckboxChange = () => {
    setSnack({ ...snack, added_sugars: !snack.added_sugars });
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      addSnack(Snack);
    };


  return (
  <form onSubmit={handleSubmit}>
    <h1>Add a New Snack!</h1>
    <label>Snack Name:</label>
    <input
        type="text"
        name="snack-name"
        onChange={handleTextChange}
        id='name'
        />
        <br/>
        <label>Calories:</label>
        <input
            type="number"
            name="calories-count"
            onChange={handleTextChange}
            id='calories'
            />
            <br/>
            <label>Fat Amount:</label>
            <input
                type='number'
                name='fat-count'
                onChange={handleTextChange}
                id='fat'
                />
                <br/>
            <label>Sodium:</label>
            <input 
                type='number'
                name='sodium-count'
                onChange={handleTextChange}
                id='sodium'
                />
                <br/>
                <label>Carbs:</label>
            <input 
                type='number'
                name='carb-count'
                onChange={handleTextChange}
                id='carbs'
                />
                <br/>
            <label>Added Sugars:</label>
        <input
          name='added_sugars'
          id="added_sugars"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={!snack.added_sugars}
        />
           

                <br></br>
                <input type='submit' value='Submit'/>
  </form>
  )
}
