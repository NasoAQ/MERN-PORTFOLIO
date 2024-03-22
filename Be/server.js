const express = require("express");
require("dotenv").config();
const cors = require("cors");

const dbConfig = require("./config/dbConfig");

const portfolioRoute = require("./routes/portfolioRoute");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
