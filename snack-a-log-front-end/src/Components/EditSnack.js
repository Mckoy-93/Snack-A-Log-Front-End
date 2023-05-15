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

      useEffect(() => {
        axios.get(`${API}/snacks/${id}`).then((res) => {
          setSnack(res.data[0]);
        }).catch((e) => {
          console.log(e)
          navigate(`/not-found`);
        })
      }, [id, navigate]);
    

      const handleTextChange = (event) => {
        setSnack({ ...snack, [event.target.id]: event.target.value });
      };
    
      const handleCheckboxChange = () => {
        setSnack({ ...snack, added_sugars: !snack.added_sugars });
      };
     
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${API}/snacks/${id}`, snack)
        .then((res) => {
          setSnack(res.data)
          navigate(`/snacks/${id}`)
        }).catch((e) => {
          console.log(e)
        })
      };

    return (
        <div>
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
              <br/>
              <label>Calories:</label>
              <input
                  type="number"
                  name="calories-count"
                  value={snack.calories}
                  onChange={handleTextChange}
                  id='calories'
                  min="0"
                  />
                  <br/>
                  <label>Fat Amount:</label>
                  <input
                      type='number'
                      name='fat-count'
                      value={snack.fat}
                      onChange={handleTextChange}
                      id='fat'
                      min="0"
                      />
                      <br/>
                  <label>Sodium:</label>
                  <input 
                      type='number'
                      name='sodium-count'
                      value={snack.sodium}
                      onChange={handleTextChange}
                      id='sodium'
                      min="0"
                      />
                      <br/>
                      <label>Carbs:</label>
                  <input 
                      type='number'
                      name='carb-count'
                      value={snack.carbs}
                      onChange={handleTextChange}
                      id='carbs'
                      min="0"
                      />
                      <br/>
                  <label>Added Sugars:</label>
              <input
                name='added_sugars'
                id="added_sugars"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={snack.added_sugars}
              />

              <br/>

          <input type='submit' />
        </form>
        <Link to={`/bookmarks/${id}`}>
        <button>Nevermind!</button>
      </Link>
      </div>
        )
}

export default EditSnack;