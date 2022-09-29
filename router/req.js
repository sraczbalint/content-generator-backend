const router = require("express").Router();
const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// post openAI response

router.post("/", async (req, res) => {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: req.body.prompt,
      temperature: 0.5,
      max_tokens: 120,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log(JSON.stringify(req.body.prompt));
    res.status(200).json({ result: response.data.choices[0].text });
  } catch (err) {
    console.log("err", err);
    res.status(500).json(err);
  }
});

module.exports = router;
