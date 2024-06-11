const axios = require("axios");

module.exports = async (req, res) => {
  try {
    const message = req.query.message;
    const response = await axios.post(process.env.WEBHOOK_URL, { message });
    res.json({ message: message });
  } catch (error) {
    res.status(500).send(error);
  }
};
