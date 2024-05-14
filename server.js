const express = require('express')
const app = express()
const fetch = require("node-fetch")
const cors = require("cors")

app.use(cors())

app.get("/", async (req,res)=>{

    const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // const data = await response.json()
    // res.json(await data)
    res.json(await response.json)

})

app.listen(3000,()=>{
    console.log("listening")
})