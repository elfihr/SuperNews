import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express()
const db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"admin",
    database:"feedmsg"
})

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res) => {
    res.json("O servidor esta funcionando")
})

//gets query
app.get("/news",(req,res) => {
    const q = "SELECT * FROM news;"
    db.query(q,(data,err) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//post query
app.post("/news",(req,res) => {
    const q = "INSERT INTO news (`title`, `desc`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.desc
    ];
    
    db.query(q,[values],(err,data) => {
        if(err) return res.json(err)
        return res.json("Artigo Postado com Sucesso!")
    })

})


//delete.query
app.delete("/news/:id",(req,res) => {
    const newsId = req.params.id;
    const q = "DELETE FROM news WHERE id = ?"

    db.query(q,[newsId],(err,data) => {
        if(err) return res.json(err)
        return res.json("Deletado com sucesso!")
    })
})

//edit query
app.put("/news/:id",(req,res) => {
    const newsId = req.params.id;
    const q = "UPDATE news SET `title` = ?, `desc` = ? WHERE id = ?"

    const values = [
        req.body.title,
        req.body.desc
    ]

    db.query(q,[...values,newsId],(err,data) => {
        if(err) return res.json(err)
        return res.json("Deletado com sucesso!")
    })
})


app.listen(4100,()=> {
    console.log("Server Online")
    console.log("http://localhost:4100/")
})