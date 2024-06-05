const API_KEY = "AIzaSyA7OOp_TCDyGIEbH-Mufrtvcew8SC1xV58";
const ENDPOINT = 'https://generativelanguage.googleapis.com/v1/models/summary:generate';
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(API_KEY);

export default async function run(bookName) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Write brief summary about the book formatted in points, Also give author name and price as well " + bookName;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  return text;
}
