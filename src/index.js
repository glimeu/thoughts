const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv/config");

require("./mongo");
const Thoughts = require("./Thoughts");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (_req, res) => {
  return res.json({ Hello: "World" });
});

app.get("/thoughts", async (_, res) => {
  const result = await Thoughts.find();

  return res.json(result);
});

app.post("/thoughts", async (req, res) => {
  const { password, content } = req.body;

  if (password !== process.env.PASSWORD)
    return res.status(401).json({ error: "Senha incorreta!" });

  await Thoughts.create({ content });

  return res.json({ success: true });
});

app.listen(process.env.PORT || "3333", () => {
  console.log(`Server on ${process.env.PORT || "3333"}`);
});
