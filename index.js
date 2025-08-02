const express = require("express");
const dotenv = require("dotenv");
const { exec } = require("child_process");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/free-tier", (req, res) => {
  exec("aws freetier get-free-tier-usage --output json", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }

    try {
      const result = JSON.parse(stdout);
      res.json(result);
    } catch (parseError) {
      res.status(500).json({ error: "Failed to parse AWS CLI output!!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`FreeTier Checker service running on port ${PORT}`);
});
