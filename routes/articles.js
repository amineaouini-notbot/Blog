const express = require('express');
const router = require('express').Router();

router.get('/create', (req, res)=> {

    res.render('articles/create');
});

module.exports = router;