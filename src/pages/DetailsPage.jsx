import { useParams } from "react-router-dom";
import FoodData from "../assets/food.json"
import "./DetailPage.css";

function DetailsPage() {
const{id} = useParams();
const recipe = FoodData.find((r) => r.id === id);

 if (!recipe) {
    return <p>Recipe not found.</p>;
  }

 return (
  <div className="detail-page">
    <img
      className="detail-image"
      src={recipe.image}
      alt={recipe.name}
    />

    <div className="detail-info">
      <h1>{recipe.name}</h1>

      <p>{recipe.calories} calories</p>
      <p>{recipe.servings} servings</p>
    </div>
  </div>
);
}

export default DetailsPage;