document.write(`<h1 class="titulo">Olá mundo</h1>`);

document.write(`<h1 class="titulo">Quanto é 2 + 2?</h1>`);
let resultado = 2+2;
document.write(`<h1 class="titulo">${resultado}</h1>`);
document.write(`<h1 class="titulo">Adicione o dobro</h1>`);
document.write(`<h1 class="titulo">${resultado + 8}</h1>`);

let nome = "Lidiane";

document.write(`<h1>Seja bem-vindo(a) ${nome}</h1>`);

let habilitado = false; // true || false
habilitado = true;

document.write(`<h1>O ${nome} ${habilitado ? 'é' : 'não é'} habilitado</h1>`);

const nomeDuplo = "camelCase";
const nome_duplo = "snakeCase";
const PascalDuplo = "PascalCase";