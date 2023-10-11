const express = require('express');
const Article = require('../models/article');
const article = require('../models/article');
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

router.get('/edit/:id', async (req, res) =>{
    const { id } = req.params
    const article = await Article.findById(id)

    res.render('articles/edit', {article})
})

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

router.delete('/:id', async (req, res) => {
    
    await article.findByIdAndDelete(req.params.id)
    res.redirect('/')

})

router.put('/edit/:id', (req, res)=>{

})

module.exports = router;