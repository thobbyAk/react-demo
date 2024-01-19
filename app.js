const express = require("express");

const app = express();

app.get("/names", (req, res) => {
	res.send("Thobby");
});

app.listen("9090", () => {
	console.log("server is running on port 9090");
});
