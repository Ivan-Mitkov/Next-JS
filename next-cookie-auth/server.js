const next = require("next");
const express = require("express");
const axios = require("axios");
const cookieParser = require("cookie-parser");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.port || 3000;
const app = next({ dev });

const handler = app.getRequestHandler();
const AUTH_USER_TYPE = "authenticated";
const COOKIE_SECRET = "dsarfewgds";
const COOKIE_OPTIONS = {
  //prevents client side access to the cookie
  httpOnly: true,
  //only with https
  secure: !dev,
  signed: true
};

const authenticate = async (email, password) => {
  //using https://jsonplaceholder.typicode.com/users
  //password is website

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data.find(user => {
    if (user.email === email && user.website === password) {
      return user;
    }
  });
};

//custom server
app.prepare().then(() => {
  const server = express();

  //parsing json in express like bodyparser
  server.use(express.json());
  server.use(express.urlencoded());
  //get data from cookies cookie secret is for signed cookies
  server.use(cookieParser(COOKIE_SECRET));

  //authenticate
  server.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    // res.json({ email, password, success: true });
    const user = await authenticate(email, password);
    if (!user) {
      return res.status(403).send("Invalid email or password");
    }
    const userData = {
      name: user.name,
      email: user.email,
      type: AUTH_USER_TYPE
    };
    res.cookie("token", userData, COOKIE_OPTIONS);
    res.json(userData);
  });
  //logout user
  server.post('/api/logout',(req,res)=>{
    //need to clear cookie 
    res.clearCookie('token',COOKIE_OPTIONS);
    //send back status 204 no content
    res.sendStatus(204)
  })

  //profile route
  server.get("/api/profile", async (req, res) => {
    const { signedCookies = {} } = req;

    const { token } = signedCookies;
    // console.log("req signedCookie", token);


    if (token && token.email) {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      const userProfile = data.find(user => user.email === token.email);
      return res.json({ user: userProfile });
    }
   
    res.sendStatus(404);
  });

  //handle pages
  server.get("*", (req, res) => handler(req, res));

  server.listen(port, err => {
    if (err) {
      console.log(err.message);
      throw err;
    }
    console.log(`Listen on ${port}`);
  });
});
