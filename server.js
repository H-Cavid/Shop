const shop = [
    {
        id: 0,
        name: "Hello",
        amount: 1231,
        price: 12233
    },

    {
        id: 1,
        name: "Hallo",
        amount: 1321231,
        price: 1221233
    },

    {
        id: 2,
        name: "Tschüss",
        amount: 1231,
        price: 12233
    },
    
    {
        id: 3,
        name: "Do widzenia",
        amount: 123,
        price: 12313
    },

    {
        id: 4,
        name: "sbohem",
        amount: 121,
        price: 12233
    },

    {
        id: 5,
        name: "Adiós",
        amount: 123,
        price: 21
    },

    {
        id: 6,
        name: "Пока",
        amount: 231,
        price: 112323
    },

    {
        id: 7,
        name: "Αντίο",
        amount: 1231,
        price: 11323
    },

    {
        id: 8,
        name: "Au revoir",
        amount: 12,
        price: 1323
    },

    {
        id: 9,
        name: "Ciao",
        amount: 12,
        price: 13
    },
];

const express = require('express');
const app = express();

app.get("/shop/:id", function (req, res) {
    const idOfProduct = parseInt(req.params.id);
    const s = shop.find((s) => s.id === idOfProduct);
    if (!s) {
      res.status(404).send();
    }
    res.status(200).json(s);
  });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });