const express = require('express');
const Article = require('../models/article')
const router = require('express').Router();

router.get('/create', (req, res)=> {

    res.render('articles/create', {article: new Article()});
});

router.get('/:id', async (req, res) => {
    const article =  await Article.findById(req.params. id); 
    if (article == null) res.redirect("/")
    // res.send(req.params.id)
    res.render('articles/show', { article });
} )

router.post('/', async (req, res) => {
    const {title, markdown, description} = req.body

    let article = new Article({
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