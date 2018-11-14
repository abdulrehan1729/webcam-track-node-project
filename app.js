const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
//const quizScript = require('./public/quiz-script')
//const question = require('./public/question')

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('./'));


app.get("/", (req, res) => {
    console.log('responding to root route')
    res.redirect("/form.html")
})

app.post('/candidate_details', (req, res) => {
     var name =  req.body.name
     var age = req.body.age
     var phone = req.body.phone
     var email = req.body.email
     var pic = req.body.pic
     var canvas = req.body.canvas
     
     const queryString = "INSERT INTO form_details (Name, Age, Phone, Email, image, web_pic) VALUES (?, ?, ?, ?, ?, ?)"
     getConnection().query(queryString, [name, age, phone, email, pic, canvas], (err, results, fields) => {
         if (err) {
             console.log("Failed to insert rows " + err)
             res.sendStatus(500)
             return
         }
         console.log("Inserted a new row");
         res.redirect('/public/start.html')
     })
}) 


function getConnection(){
    return mysql.createConnection({
        host: 'localhost',
        database: 'mysql',
        user: 'user1',
        password: 'password'
        
    })
}

var fetch = app.get("/candidate_details", (req, res) => {
    const jsonQuery = "SELECT * FROM form_details"
    getConnection().query(jsonQuery, (err, rows, fields) => {
        if (err) {
            throw err;
        }

        console.log("Rows are successfuly fetched" )
        res.json(rows)
})
})


var individualDetails = app.get("/candidate_detail/:id", (req, res) => {
   let id = req.params.id;
    const jsonQuery = `SELECT * FROM form_details where id=${id}`
    getConnection().query(jsonQuery, (err, rows, fields) => {
        console.log("data details::" + jsonQuery)
        if (err) {  
            throw err;
        }

        console.log("Rows are successfuly fetched" )
        res.json(rows)
})
})

const connection = getConnection() 

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})