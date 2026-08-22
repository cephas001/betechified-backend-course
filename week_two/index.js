require("dotenv").config();
const express = require("express");
const app = express();

const logRequest = require("./middleware/logRequest");

app.use(express.json());
app.use(logRequest);

app.get("/", (req, res) => {
  res.send("My Week 2 API!");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  res.json({
    message: `Hello, ${name}!`,
  });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      error: "User ID is required",
    });
  }

  res.json({
    message: `User ${id} profile`,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
