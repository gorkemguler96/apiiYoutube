const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Products ekranında GET requesti çalıştı.'
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Products ekranında GET requesti çalıştı.'
    })
})

module.exports =router;
