
//REQUIRE
const express = require('express');
const app = express()
const port = 2024
const courses = [
    { id: 1, course: "English" },
    { id: 2, course: "Malayalam" },
    { id: 3, course: "French" },
    { id: 4, course: "Spanish" }
]

// USE
app.use(express.json())

// API's //////////////////////////////
//HOME
app.get("/", (req, res) => {
    res.send("Hello Welcome")
});
//GET COURSE
app.get("/course/", (req, res) => {
    res.send(courses)
});
// GET COURSE BY ID
app.get('/course/:id', (req, res) => {

    let course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('course not found enter corcet id');
    res.send(course)

})
// ADD COURSE
app.post('/course', (req, res) => {

    if (!req.body.courseName || req.body.courseName.length < 3) {
        res.status(404).send('Enter a course name having at;least three letters');
    }

    let course = {
        id: courses.length + 1,
        course: req.body.courseName
    };

    courses.push(course);
    res.send(course)

})


// INIT //////////////////////////////
app.listen(port, () => {
    console.log(`Server running on port : ${port}`);
})
