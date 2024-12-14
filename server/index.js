const scrape = require("./scrape.js");
const express = require("express");

const port = 5001;
const server  = express();

server.use(express.json());

server.get("/", async (req, res) => {

    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");

    let result = "Так в чем вопрос?";
    
    const h = await scrape(req.query);
    
    res.send(h)
    res.end();

}).listen(port, () => {

    console.log("Сервер запущен на порту", port);
});

