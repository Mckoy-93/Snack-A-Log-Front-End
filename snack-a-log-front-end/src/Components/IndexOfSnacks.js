import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Snack from "./Snack";

const SnackIndex = () => {
  const [snacks, setSnacks] = useState([]);

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
  console.log(snacks);

  

  // const handleDelete = (event) => {
  //   event.preventDefault();
  //   const { id } = event.target;
  //   console.log("HandleDelete:", id);
  //   const API = process.env.REACT_APP_API_URL;
  //   axios.delete(`${API}/snacks/${id}`).then((response) => {
  //     setSnacks(
  //       snacks.filter((snack) => {
  //         return snack.id !== parseInt(id);
  //       })
  //     );
  //   });
  // };

  return (
    <div className="snacks-list">
      <h1>Snack-A-Log Index</h1>
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack}/>
      })}
    </div>
  );
};

export default SnackIndex;