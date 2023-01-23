import express from "express";
import cors from "cors";
import productRoute from "./routes/products.route.js";

const app = express();

app
    .use(cors())
    .use(express.json())
    .get('/health', (req, res)=>{ res.send('OK')})
    .use(productRoute)


app.listen(4000, ()=>{
    console.log("Server running at port 4000");
})