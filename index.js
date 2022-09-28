const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const resRouter = require("./router/req");

const app = express();

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOpts));
app.use(express.json());

dotenv.config();

// static files
app.use(express.static("public"));

app.use("/api/req", resRouter);

app.use(express.urlencoded({ extended: true }));

console.log("PORT", process.env.PORT);

const port = app.listen(process.env.PORT || 8800, "0.0.0.0", () => {
  console.log(`Backend is running on a port: ${port}!`);
});
