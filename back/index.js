import express from 'express'
const app = express()

import cors from 'cors'

import db from "./db.js"

import fs from 'fs'


const corsOptions = {
  origin: "https://cartas-nao-enviadas-1.onrender.com", // Substitua pelos domínios permitidos
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};


app.use(cors(corsOptions));
app.use(express.json());

app.get("/", async (req, res) => {
    console.log('Servidor Aberto!')

    const db1 = await db.buscarMensagem()
    res.status(200).json(db1)

})
app.get("/nome/:nome", async (req, res) => {
    console.log('Servidor Aberto!')
    const nome = req.params.nome
    console.log(nome)
    const db1 = await db.buscarMensagem(nome)
    res.status(200).json(db1)

})
app.post("/mandarcarta", async (req, res) => {

  const db1 = await db.inserirMensagem({nome: req.body.nome, autor: req.body.autor, mensagem: req.body.mensagem})
  console.log(db1)
  res.status(201).send('Carta Enviada!')
})

app.listen(3000, () => {
    console.log('Servidor Rodando na porta 3000.')
})