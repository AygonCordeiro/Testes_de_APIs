const express = require('express');

const app = express();

app.use(express.json());

app.get('/home', (req, res) => {
    res.send('Olá. Minha primeira API!');
});

app.get('/mensagem', (req,res) => {
    res.json( { mensagem: "Minha segunda API!",
                Autor: "Aygon Cordeiro"
            } );
});

app.post('/inserirCliente', (req,res) => {
    const {nome} = req.body;

    res.send("Cliente " + nome + " foi recebido com sucesso!");
});

app.delete('/excluirCliente/:id', (req,res) => {
    const {id} = req.params;

    res.send("Cliente ID " + id + " foi excluído com sucesso!");
});

app.get('/consultarCliente', (req,res) => {
    const {nome, idade} = req.query;
    
    res.send("Cliente " + nome + " localizado e sua idade é: " + idade)
});

app.get('/dadospessoais', (req,res) => {
    res.send( { nome: 'Aygon',
                idade: 19,
                email: 'aygon.cordeiro@gmail.com',
                profissao: 'Auxiliar de TI'
});
});

app.listen(3333, () => {
    console.log('Servidor Backend ON!');
});
