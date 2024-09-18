const  {GoogleGenerativeAI} = require("@google/generative-ai");
const express = require('express');
const prisma = require('../config/db');

const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.4,
  topP: 1,
  topK: 32,
  maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    geminiConfig,
  });
const router = express.Router();


router.post('/ai', async (req, res) => {

    console.log(req.body);
  const {userQuery} = req.body;
  const id = req.cookies.id;

  // Step 1: Query the database if needed
  const dbResponse = await prisma.application.findMany({
    where: {
      id: id
    },
  });

  // Step 2: Format DB result for LLM (optional)
  let dbData = dbResponse.length ? "Database results: Application array" + JSON.stringify(dbResponse) : "No data found.";

  console.log(dbData);

  // Step 3: Send query and DB data to OpenAI for processing
  const prompt = "You are a AYUSH ministry chatbot.Ayush ministry is adepartment of government that focus on ayurveda, this is aportal that enrols startup related to ayush ministry.dont return the whole database query to the user, only return the asked one Database returned: " + dbData +  ". Based on this,first read out the question user asked and then please provide a respones of the user asked query. prind the data in key-value pair and proper newline cahracter. for new line use <br/> tag format" + "User asked: " + userQuery ;
  console.log(prompt);
  try {
    const completion = await geminiModel.generateContent(prompt);
    

    // res.json({ response: gptResponse.data.choices[0].message.content });
    console.log(completion.response.text());

    res.json({ response: completion.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch response from LLM.' });
  }
});


module.exports = router;