// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public")); //use public folder as static folder
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");

});

app.get("/signup", function(req,res) {
    res.sendFile(__dirname + "/signup.html");
});

function tryme() {
    res.sendFile(__dirname + "/signup.html");
}

app.listen(3000, function() {
    console.log("Server running in port 3000");
});