const express = require('express')
const mongoose = require('mongoose')
const app = express()
const articlesRouter = require('./routes/articles')
const article = require('./models/article')

mongoose.connect('mongodb://localhost/blog' )
app.use(express.urlencoded({ extended: false}))

app.set("view engine", "ejs")

app.use('/articles', articlesRouter);

app.get('/', async (req, res)=>{
    let articles = await article.find()
    .sort({
        date: 'desc'
    })
    res.render("index", {articles})
})

app.listen(5000, ()=>{console.log("server intiated!")})