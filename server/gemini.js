const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBNODU5k0AqmicMXlQqpd6ymeMP_3p9cGo",
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

