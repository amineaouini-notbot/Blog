const express = require('express')
const app = express();
const articlesRouter = require('./routes/articles')
app.set("view engine", "ejs")

app.use('/articles', articlesRouter);

app.get('/', (req, res)=>{
    res.render("index", {text: 'rendering objects test!'})
})

app.listen(5000, ()=>{console.log("server intiated!")})