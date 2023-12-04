const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

function ordenarVetor(vetor) {
    return vetor.slice().sort((a, b) => a - b);
}
function encontrarMinMax(vetor) {
    if (vetor.length === 0) {
      return { menor: null, maior: null };
    }
  
    const sortedArray = ordenarVetor(vetor);
    const menor = sortedArray[0];
    const maior = sortedArray[sortedArray.length - 1];
  
    return { menor, maior };
  }
  
//@ Cria uma rota para o endereço raiz.
app.get('/', (req, res) => {

let vetorNaoOrdenado = [85, 1, 4, 20, 6, 7];

let jsonData = JSON.stringify({ vetor: vetorNaoOrdenado });

const vetorOrdenado = ordenarVetor(vetorNaoOrdenado);

const { menor, maior } = encontrarMinMax(vetorNaoOrdenado);

res.json({ vetorOrdenado, menor, maior });
});

app.listen(port, () => {
console.log('Inicializando: ' , process.env.APP_NAME);
});
  