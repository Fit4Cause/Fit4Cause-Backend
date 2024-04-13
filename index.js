const express = require("express");
const app = express();
const { User } = require("././models/User.js");
const cors = require("cors");
const connectMongoose = require("./db.js");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.json());

const router = express.Router();

connectMongoose();

app.use("/api/", require("./routes/Ngo.js"));

app.get("/users", async (req, res) => {
  try {
    const user = await User.find({ id: "2" });
    console.log(user);
    res.send(user);
  } catch (e) {
    console.log("error fetching users details", e);
  }
});

app.listen(3000, () => {
  console.log("server is runnning at port 3000");
});
