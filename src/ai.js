export async function getRecipeFromMistral(ingredientsArr) {
  try {
    const response = await fetch("/.netlify/functions/handleRecipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    const data = await response.json();
    return data.content;
  } catch (err) {
    console.error("Error fetching recipe:", err);
    return "Failed to generate recipe.";
  }
}
