const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require('path')
const app = express()
let PORT = process.env.port || 3020

app.use(express.static(__dirname + '/public'));

//View Engine Setup
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.get("/", function (req, res){
    res.render("index")
})

// Body-parser middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://PatelCodes:Gaurav73679@cluster0.pkdsy5q.mongodb.net/PortfolioForm")

const PortfolioFormSchema = {
    Email: String,
    Name: String,
    Query: String
}

const Form = mongoose.model("Form", PortfolioFormSchema)


app.post('/formData', (req, res) =>{
    let newForm = new Form({
        Email: req.body.email,
        Name: req.body.Name,
        Query: req.body.Query
    })
    newForm.save();
    res.redirect('/');
})

app.listen(PORT, function(error){
    if(error) throw error
    console.log("Server created Successfully on PORT", PORT)
})