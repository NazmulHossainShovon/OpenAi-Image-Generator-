const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;

const app = express();

//this is needed to receive JSON data
app.use(express.json());
//this is needed to receive form data
app.use(express.urlencoded({ extended: false }));

app.use("/openai", require("./routes/openaiRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
