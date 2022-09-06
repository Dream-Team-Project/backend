const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/',(req,res)=>{
    res.send('Silence is golden');
})

// get all data

router.get('/user',(req,res)=>{
    let qr = `select * from form ORDER BY id DESC`;
    db.query(qr,(err,result)=>{
        if(err) {
            console.log(err);
        }
        if(result.length>0) {
            res.send({
                message: 'all form data',
                data: result,
            })
        }
    })
})

// get single data

router.get('/user/:id',(req,res)=>{
    let gID = req.params.id;
    let qr = `select * from form where id = ${gID}`;
    db.query(qr,(err,result)=>{
        if(err) console.log(err);
        if(result.length>0) {
            res.send({
                message: 'single data',
                data: result,
            })
        } 
        else {
            res.send({
                message: 'User not found!',
            })
        }       
    })
})

// create data

router.post('/user',(req,res)=>{
    // console.log(req.body,'createdata');
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let course = req.body.course;

    let qr = `insert into form(name,email,phone,course)
    values('${name}','${email}','${phone}','${course}')`;

    db.query(qr,(err,result)=>{
        if(err) console.log(err);
        res.send({
            message: 'data inserted',
        })
    })
})

// update data

router.put('/user/:id',(req,res)=>{
    let id = req.params.id;
    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let course = req.body.course;

    let qr = `update form set name = '${name}', email = '${email}', phone = '${phone}', course = '${course}' where id = '${id}'`;

    db.query(qr,(err,result)=>{
        if(err) console.log(err);
        res.send({
            message: 'User has been updated',
            data: result.data,
        })
    })
})

// delete data

router.delete('/user/:id',(req,res)=>{
    let gID = req.params.id;
    // let gID = res.body.id;
    let qr = `delete from form where id = ${gID}`;
    db.query(qr,(err,result)=>{
        if(err) console.log(err);
        res.send({
            message: 'User has been deleted',
        })
    })
})

module.exports = router;