const express = require('express')
const mongoose = require('mongoose')
const app = express()
const articlesRouter = require('./routes/articles')
const article = require('./models/article')
const methodOverride = require('method-override')
require('dotenv').config()
// 'mongodb://localhost/blog'

mongoose.connect(process.env.MONGO_DB)
.then(()=> console.log('DB Connected'))
.catch(err => {throw err})

app.use(express.urlencoded({ extended: false}))
app.use(methodOverride('_method'))

app.set("view engine", "ejs")

app.use('/articles', articlesRouter);

app.get('/', async (req, res)=>{
    let articles = await article.find()
    .sort({
        date: 'desc'
    })
    res.render("index", {articles}).end()
})
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{console.log("server intiated!")})
