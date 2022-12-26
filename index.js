import express from "express";
import fetch from 'node-fetch';
import dotenv from "dotenv";
dotenv.config()

const app = express()
// app.use(express.json())
app.get('/', function (req, res) {
    res.send("Hello World!, I am server created by expresss");
})

const PORT = process.env.PORT || 6001
app.listen(PORT, (error) => {
    if (error) {
        return console.log(error)
    }
    console.log(`The app works at Port: ${PORT}`)
})


// it works
// const response = await fetch('https://render-back-end-nikky-pedia.onrender.com/')
// const body = await response.text()
// console.log(body)

const interval = setInterval(async () => {
    try {
        const response = await fetch('https://render-back-end-nikky-pedia.onrender.com/')
        // const body = await response.text();
        console.log(response.ok)
        console.log(response.status)
        // console.log(body)
    } catch (error) {
        console.log(error)
    }
}, 10000);