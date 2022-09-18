//require('./db/connect')
const express =require('express')
const app=express()

const port=3000
const tasks=require('./router/tasks')
const connectDB=require('./db/connect')

const { connect } = require('mongoose')
require('dotenv').config()

//middleware
app.use(express.static('./public'))
app.use(express.json());                //remember


app.use('/api/v1/tasks',tasks)

const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{ 
            console.log(`listening at port ${port}`);
           // console.log(`tasks ${tasks}`);
        })
    }
    catch(err){

    }
}

start()

