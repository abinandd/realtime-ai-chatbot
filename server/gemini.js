const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: process.env.API_KEY,
});

async function main(data) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: data,
    });
    console.log(response.text);
    return response.text;
  } catch (error) {
    throw new Error("Generation failed");
  }
}

module.exports = main;
