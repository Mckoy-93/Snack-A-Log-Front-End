import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const API = process.env.REACT_APP_API_URL;


function EditSnack(){
    let { id } = useParams();
    let navigate = useNavigate();

    const [snack, setSnack] = useState({
        name: "",
        calories: 0,
        fat: 0,
        sodium:0,
        carbs: 0,
        added_sugars: false,
      });
    
      const updateSnack = (updatedSnack) => {
        axios
          .put(`${API}/snacks/${id}`, updatedSnack)
          .then(
            () => {
              navigate(`/snacks/${id}`);
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

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`).then(
          (response) => setSnack(response.data),
          (error) => navigate(`/not-found`)
        );
      }, [id, navigate]);
    
      const handleSubmit = (event) => {
        event.preventDefault();
        updateSnack(snack, id);
      };

    return (
        <form onSubmit={handleSubmit}>
          <h1>Edit Your Snack!</h1>
          <label>Snack Name:</label>
          <input
              type="text"
              name="snack-name"
              value={snack.name}
              onChange={handleTextChange}
              id='name'
              />
              <label>Calories:</label>
              <input
                  type="number"
                  name="calories-count"
                  value={snack.calories}
                  onChange={handleTextChange}
                  id='calories'
                  />
                  <label>Fat Amount:</label>
                  <input
                      type='number'
                      name='fat-count'
                      value={snack.fat}
                      onChange={handleTextChange}
                      id='fat'
                      />
                  <label>Sodium:</label>
                  <input 
                      type='number'
                      name='sodium-count'
                      value={snack.sodium}
                      onChange={handleTextChange}
                      id='sodium'
                      />
                      <label>Carbs:</label>
                  <input 
                      type='number'
                      name='carb-count'
                      value={snack.carbs}
                      onChange={handleTextChange}
                      id='carbs'
                      />
                  <label>Added Sugars:</label>
              <input
                name='added_sugars'
                id="added_sugars"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={!snack.added_sugars}
              />
                 <br></br>
          <input type='submit' value='submit'/>
        </form>
        )
}

export default EditSnack;