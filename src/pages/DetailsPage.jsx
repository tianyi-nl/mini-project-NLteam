import { useParams } from "react-router-dom";
import FoodData from "../assets/food.json"

function DetailsPage() {
const{id} = useParams();
const recipe = FoodData.find((r) => r.id === id);

 if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <img src={recipe.image} alt={recipe.name} />
      <h1>{recipe.name}</h1>
      <p>{recipe.calories} calories</p>
      <p>{recipe.servings} servings</p>
    </div>
  );
}

export default DetailsPage;