const express = require('express')
const app = express();
const articelsRouter = require('./routes/articles')
app.set("view engine", "ejs")

app.use(articelsRouter);
app.get('/', (req, res)=>{
    res.render("index")
})

app.listen(5000, ()=>{console.log("server intiated!")})