const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.port || 3000;
const app = next({ dev });

const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //parsing json in express like bodyparser
  server.use(express.json());

  server.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    res.json({ email, password, success: true });
  });
  server.get("*", (req, res) => handler(req, res));
  server.listen(port, err => {
    if (err) {
      console.log(err.message);
      throw err;
    }
    console.log(`Listen on ${port}`);
  });
});
