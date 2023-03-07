require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const createChatCompletion = ({ content }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content }],
      });
      const message = completion.data.choices[0].message;

      return resolve(message);
    } catch (err) {
      console.log("Error in calling Create Chat Completion", err);
      return reject(err);
    }
  });
};
