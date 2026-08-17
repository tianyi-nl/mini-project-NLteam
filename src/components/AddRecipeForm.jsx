import React from "react";
import { useState } from "react";

function AddRecipeForm({onAdd}) {
  const [newName, setNewName] = useState("");
  const [newCalories, setNewCalories] = useState("");
  const [newServings, setNewServings] = useState("");
  const [newImage, setNewImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      id: crypto.randomUUID(),
      name: newName,
      calories: Number(newCalories),
      servings: Number(newServings),
      image: newImage,
    };

    onAdd(newRecipe);

    setNewName("");
    setNewCalories("");
    setNewServings("");
    setNewImage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Calories"
        value={newCalories}
        onChange={(e) => setNewCalories(e.target.value)}
      />
      <input
        type="number"
        placeholder="Servings"
        value={newServings}
        onChange={(e) => setNewServings(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newImage}
        onChange={(e) => setNewImage(e.target.value)}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
    
}

export default AddRecipeForm;
