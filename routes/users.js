import express from 'express';
import mysql from 'mysql';
import config from '../config/config.js';
let db = mysql.createConnection(config);

const router = express.Router();

const users = [
    {
        Name:'Anbarasu',
        Age:'27',
        Dept: 'cse'
    },
    {
        Name:'Anbarasu',
        Age:'27',
        Dept: 'cse'
    }
];



router.get('/',(req, res) =>{
        let sql = "select * from customers";
        db.query(sql,(err, result) => {
            res.send(result);
        })

})

router.post('/',(req, res) =>{
    let sql = "insert into customers set customerName='"+req.body.customerName+"'";
    db.query(sql,(err, result) =>{
        res.send('Inserted successfully');
    })
    
})

router.get('/:age',(req, res) =>{
    let age = req.params.age; 
    let fileterdata = users.filter((value, index) =>{
               return value.Age==age;
    })
    res.send(fileterdata);
})

router.put('/:id',(req, res) =>{  

    res.send(req.params);

})

export default router;