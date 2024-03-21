const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error during db connection"));
db.once("open", () => {
	console.log("Database connected");
});

module.exports = mongoose;
