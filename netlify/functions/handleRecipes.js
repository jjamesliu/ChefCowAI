// /netlify/functions/getRecipe.js
const { InferenceClient } = require("@huggingface/inference");

const hf = new InferenceClient(process.env.HF_TOKEN);

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they 
could make with some or all of those ingredients. You don't need to use every ingredient they mention 
in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include 
too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

exports.handler = async function(event, context) {
  const { ingredients } = JSON.parse(event.body);
  const ingredientsString = ingredients.join(", ");

  try {
    const chatCompletion = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ content: chatCompletion.choices[0].message.content }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
