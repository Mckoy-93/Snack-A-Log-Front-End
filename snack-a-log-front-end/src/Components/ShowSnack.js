import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ShowSnack = () => {
  const { id } = useParams();
  const { snack, setSnack } = useState({});

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    axios
      .get(`${API}/snacks/${id}`)
      .then((response) => {
        setSnack(response.data.payload);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [id, setSnack]);
  console.log(snack);

  const { name, calories, fat,sodium, carbs, added_sugars } = snack;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{calories}</h3>
      <h3>{fat}</h3>
      <h3>{sodium}</h3>
      <h4>{carbs}</h4>
      <h3>{added_sugars}}</h3>
      <Link to="/snacks/edit">Edit Snack</Link>
    </div>
  );
};

export default ShowSnack;