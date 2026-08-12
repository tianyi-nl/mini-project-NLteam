import FoodData from "../assets/food.json";
import "./FoodList.css";

function getCaloriesLabel(calNum) {
  if (calNum <= 250) {
    return "✔️ Healthy";
  } else if (calNum >= 350) {
    return "❌ Unhealthy";
  } else {
    return "⚠️ Moderate";
  }
}


function FoodList() {
  return (
    <div>
      {FoodData.map((recipe) => {
        return (
          <div className="list-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <div>
              <h2>{recipe.name}</h2>
              <p>{recipe.calories}</p>
              <p>{recipe.servings}</p>
              <div className="label">{getCaloriesLabel(recipe.calories)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FoodList;
