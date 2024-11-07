const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express();

app.get('/',(req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if (err) {
            res.status("500 - erro interno do servidor")
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
});

app.get('/cardapio',(req, res) => {
    fs.readFile(path.join(__dirname, 'cardapio.html'), (err, data) => {
        if (err) {
            res.status("500 - erro interno do servidor")
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
});

app.get('/appAdega.js',(req, res) => {
    fs.readFile(path.join(__dirname, 'appAdega.js'), (err, data) => {
        if (err) {
            res.status("500 - erro interno do servidor")
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
});

app.get('/pedido',(req, res) => {
    fs.readFile(path.join(__dirname, 'pedido.html'), (err, data) => {
        if (err) {
            res.status("500 - erro interno do servidor")
        }else{
            res.status(200).type('text/html').send(data);
        }
    })
});

const PORT = 4500;

app.listen(PORT, () => {
    console.log(`[OK] - Servidor iniciado em http://localhost:${PORT}...`);
});