const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "frontend/build")));

app.get("/names", (req, res) => {
	res.send("Thobby");
});

app.listen("9090", () => {
	console.log("server is running on port 9090");
});
