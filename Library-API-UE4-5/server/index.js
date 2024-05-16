import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // config für .env

const app = express();
const PORT = 3000;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173/", "http://127.0.0.1:5173/"] }));
app.use("/api/ask", async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "Du bist ein hilfreicher Assistent." },
        { role: "user", content: req.body.message },
      ],
      model: "gpt-3.5-turbo",
    });
    // console.log(await completion.choices[0]);
    res.status(200).json({ message: completion.choices[0] });
  } catch (error) {
    // console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT);
