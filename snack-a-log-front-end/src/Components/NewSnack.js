import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewSnack = () => {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [fat, setFat] = useState(0);
  const [sodium, setSodium] = useState(0);
  const [carbs, setCarbs] = useState(false);
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const API = process.env.REACT_APP_API_URL;

    event.preventDefault();

    const newSnackRoute = `${API}/snacks/new`;

    fetch(newSnackRoute, {
      method: "POST",
      body: JSON.stringify({
        name,
        calories,
        fat,
        sodium,
        carbs,
        image,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        navigate("/snacks");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return <form onSubmit={handleSubmit}>
    <h1>Add a New Snack!</h1>
    <label>Snack Name:</label>
    <input
        type="text"
        name="snack-name"
        onChange={(event) =>{
            setName(event.target.value)
        }}
        id='new-snack-name'
        />
        <label>Calories:</label>
        <input
            type="number"
            name="calories-count"
            onChange={(event) => {
                setCalories(event.target.value)
            }}
            id='calories-count'
            />
            <label>Fat Amount:</label>
            <input
                type='number'
                name='fat-count'
                onChange={(event) => {
                    setFat(event.target.value)
                }}
                id='fat-count'
                />
            <label>Sodium:</label>
            <input 
                type='number'
                name='sodium-count'
                onChange={(event) => {
                    setSodium(event.target.value)
                }}
                id='sodium-count'
                />
                <label>Carbs:</label>
            <input 
                type='number'
                name='carb-count'
                onChange={(event) => {
                    setCarbs(event.target.value)
                }}
                id='carb-count'
                />
            
            
            {/* <label>added sugars</label>
            <input
                type='checkbox'
                name='healthy'
                onClick={(event) => {
                    setIs_Healthy(!is_healthy)
                }}
                id='healthy'
                /> */}
            <label>Snack Image</label>
            <input
                type='text'
                alt='snack'
                name='snack-image'
                onChange={(event) => {
                    setImage(event.target.value)
                }}
                id='snack-image'
                placeholder='Place Image Link Here...'
                />

                <br></br>
                <input type='submit' value='submit'/>
  </form>;
};

export default NewSnack;