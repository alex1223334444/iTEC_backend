const express= require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("backend itec");
});

app.listen(3001, () => console.log("connected to port 3001"));
