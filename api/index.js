const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api", async (req, res) => {
  try {
    const message = req.query.message;
    const response = await axios.post(process.env.WEBHOOK_URL, { message });
    res.json({ message: response.data });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = (req, res) => {
  return app(req, res);
};
