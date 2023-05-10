import { Link } from "react-router-dom"

export default function Snack( { snack }) {
    return (
        <div key={snack.id}>
            <h2>Name: {snack.name}</h2>
            <h3>Calorie: {snack.calories} kcal</h3>
            {snack.added_sugars ? <h3>Added Sugar: True</h3> : <h3>Added Sugar: False</h3>}
            <Link to={`/snacks/${snack.id}`}>Click Here to See More Info❓</Link>
        </div>
    )
}

