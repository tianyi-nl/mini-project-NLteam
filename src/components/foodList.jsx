import foodData from '../data/foodData';


function foodList() {
    foods.map((food) => (
        <div key={food.id} className="food-item">
            <h2>{food.name}</h2>
            <p>Calories: {food.calories}</p>
        </div>
    ))
}

export default foodList;