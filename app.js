const express = require('express')
const fs = require('fs')

const app = express()


app.get('/todos',(req,res)=>{
    fs.readFile('./db.json','utf8',(err,data)=>{
        if(err){
           return res.status(500).json({
                error:err.message
            })
        }
        const db = JSON.parse(data)
        res.status(200).json(db.todos)
    })
    // res.send('get /todos')
})

app.get('/todos/:id',(req,res)=>{
    res.send(`get /todos/${req.params.id}`)
})

app.post('/todos',(req,res)=>{
    res.send('post /todos')
})

app.patch('/todos/:id',(req,res)=>{
    res.send('patch /todos')
})
app.delete('/todos/:id',(req,res)=>{
    res.send(`delete /todos/${req.params.id}`)
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000/')
})