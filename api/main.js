const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  try {
    const message = req.query.message;
    const response = await axios.post(
      "https://webhook.site/3a9dbce0-5f51-4f1f-a2b9-120fa83ea39a",
      { message }
    );
    res.json({ message: message });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
