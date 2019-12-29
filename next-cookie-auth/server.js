const next =require('next')
const express =require('express');

const dev =process.env.NODE_ENV!=='production';
const port =process.env.port||3000;
const app=next({dev});

app.prepare().then(()=>{
    const server=express();
    server.listen(port,err=>{
        if(err){
            console.log(err.message)
            throw err
        }
        console.log(`Listen on ${port}`)
    })
})