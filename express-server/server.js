const express = require("express");
const app = express();

// Get all dealers
app.get("/dealers", (req, res) => {
    res.json([
        {id:1, name:"Dealer One", state:"Kansas"},
        {id:2, name:"Dealer Two", state:"Texas"}
    ]);
});

// Get dealer by ID
app.get("/dealer/:id", (req, res) => {
    res.json({id:1, name:"Dealer One", state:"Kansas"});
});

// Get dealer reviews
app.get("/dealer/:id/reviews", (req, res) => {
    res.json([
        {name:"John", review:"Great service", sentiment:"positive"}
    ]);
});

// Filter by state
app.get("/dealersByState", (req, res) => {
    res.json([
        {id:1, name:"Dealer One", state:"Kansas"}
    ]);
});

app.listen(3030, () => console.log("Server running on 3030"));