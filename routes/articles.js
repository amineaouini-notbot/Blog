const express = require('express');
const Article = require('../models/article')
const router = require('express').Router();

router.get('/create', (req, res)=> {

    res.render('articles/create');
});

router.post('/', async (req, res) => {
    const {title, markdown, description} = req.body

    const article = new Article({
        title,
        markdown,
        description
    })
    try { 
        article = await article.save() 
        res.redirect(`/articles/${article.id}`)
    } catch ( err ) { 
        res.render('/articles/create', {article})    
    }
})

module.exports = router;