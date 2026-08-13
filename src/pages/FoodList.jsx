import FoodData from "../assets/food.json";
import "./FoodList.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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
  const [favList, setFavList] = useState(FoodData);
  
  const handelRemoveFromList = (index) => {
    const clone = [...favList];
    clone.splice(index, 1);

    setFavList(clone);
  };

  return (
    
    <div>
      {favList.map((recipe, index) => {
        return (
         
          <div className="list-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <div>
             <Link to={`/recipe/${recipe.id}`} className="card-link"> <h2>{recipe.name}</h2></Link>
              <p>{recipe.calories}</p>
              <p>{recipe.servings}</p>
              <div className="label">{getCaloriesLabel(recipe.calories)}</div>
              <button onClick={() => handelRemoveFromList(index)}>
                delete
              </button>
            </div>
          </div>
         
        );
      })}
    </div>
      
  );
}

export default FoodList;
