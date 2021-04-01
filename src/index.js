const express = require('express');

const app = express();
const PORT = 3333;


app.listen(PORT, () => {
    console.log(`Rodando em http://localhost:${PORT}`);
});