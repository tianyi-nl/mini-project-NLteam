import { useState } from "react";
import { useParams } from "react-router-dom";
import FoodData from "../assets/food.json";
import "./DetailsPage.css";

function DetailsPage() {
  const { id } = useParams();

  const saved = localStorage.getItem("recipes");
  const favList = saved ? JSON.parse(saved) : FoodData;
  const recipe = favList.find((r) => r.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(recipe ? recipe.name : "");
  const [calories, setCalories] = useState(recipe ? recipe.calories : "");
  const [servings, setServings] = useState(recipe ? recipe.servings : "");
  const [image, setImage] = useState(recipe ? recipe.image : "");

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  function handleSave(e) {
    e.preventDefault();

    const updatedRecipe = {
      ...recipe,
      name,
      calories: Number(calories),
      servings: Number(servings),
      image,
    };

    const updatedList = favList.map((r) =>
      r.id === id ? updatedRecipe : r
    );

    localStorage.setItem("recipes", JSON.stringify(updatedList));
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <form className="edit-form" onSubmit={handleSave}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />
        <input
          type="number"
          value={servings}
          onChange={(e) => setServings(e.target.value)}
        />
        <input value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </form>
    );
  }

  return (
    <div className="detail-page">
      <img src={recipe.image} alt={recipe.name} className="detail-image" />
      <div className="detail-info">
        <h1>{recipe.name}</h1>
        <p>{recipe.calories} calories</p>
        <p>{recipe.servings} servings</p>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    </div>
  );
}

export default DetailsPage;
