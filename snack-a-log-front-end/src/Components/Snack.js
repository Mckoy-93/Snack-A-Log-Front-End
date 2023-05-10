
export default function Snack( { snack }) {
    return (
        <div key={snack.id}>
            <h2>Name: {snack.name}</h2>
            <h3>Calorie: {snack.calories} kcal</h3>
            <h3>Fat: {snack.fat} g</h3>
            <h3>Sodium: {snack.sodium} mg</h3>
            <h3>Carbs: {snack.carbs} g</h3>
            {snack.added_sugars ? <h3>Added Sugar: True</h3> : <h3>Added Sugar: False</h3>}
        </div>
    )
}

