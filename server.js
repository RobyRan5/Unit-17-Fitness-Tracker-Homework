const express = require("express");
const mongoose = require("mongoose");
const app = express ();
const path = require("path");
const db = require("./myfitness-app/models/models")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false});

app.get("/excerise", (req, res) => {
    res.sendFile(path.join(_dirname, "./public/excerise.hmtl"))
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(_dirname, "./public/stats.html"))
})

app.get("/api/workouts", (req, res) => {
    db.find().then(workouts => res.json(workouts))
})

app.post,("/api/workouts", ({ body }, res) => {
 db.create(body).then(workouts => res.json(wokouts))
})

app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.findByIdAndUpdate(params.id, {$push:{exercises:body}}).then(workouts => res.json(workouts))
})

app.get("/api/workouts/range", (req, res) => {
    db.find().then(workouts => res.json(workouts))
})

app.listen(3000, () => {
    console.log("App running on port 3000!");
});
