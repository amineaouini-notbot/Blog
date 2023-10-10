const express = require('express')
const app = express();
const articlesRouter = require('./routes/articles')
app.set("view engine", "ejs")

app.use('/articles', articlesRouter);

app.get('/', (req, res)=>{
    let articles = [{
        title: 'Test Blog 0',
        date: new Date(),
        description: 'Test Description 0'
    },{
        title: 'Test Blog 1',
        date: new Date(),
        description: 'Test Description 1'
    }]
    res.render("index", {articles})
})

app.listen(5000, ()=>{console.log("server intiated!")})