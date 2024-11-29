import express from 'express'
import cors from 'cors'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const PORT=1000;
const app=express()
app.listen(PORT,()=>{
    console.log('Server start')
})
app.use(cors())
app.use(express.json())
const db = new pg.Client({
    host:process.env.POSTGRES_DB_HOST,
    password: process.env.POSTGRES_DB_PASSWORD,
    user: process.env.POSTGRES_DB_USER,
    database: process.env.POSTGRES_DB_NAME,
    port: process.env.POSTGRES_DB_PORT,
      ssl: {
        rejectUnauthorized: false, // Required for Render
    },
})
db.connect()

app.post('/query',(req,res)=>{
    const body=req.body
    const query= `INSERT INTO queries VALUES('${body.name}','${body.email}','${body.subject}','${body.message}',false)`
    db.query(query,(err)=>{
        if (err){
            console.log(err)
        }
    })
})
