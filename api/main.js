require("dotenv").config();
const express = require("express");
const axios = require("axios");
const app = express();
const port = 80;

app.get("/", async (req, res) => {
  try {
    const message = req.query.message;
    const response = await axios.post(process.env.WEBHOOK_URL, { message });
    res.json({ message: response.data });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
