// Funzioni:
function isValid(array, num) {
  if (num < 1 || num > 100) {
    return false;
  }
  if (array.indexOf(num) !== -1) {
    return false;
  }
  if (isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

function defeat(array, num) {
  if (array.indexOf(num) !== -1) {
    return true;
  }
}

// Fine funzioni.
// Bonus:
var max;
var sceltaDifficoltà;

while (sceltaDifficoltà !== 0 && sceltaDifficoltà !== 1 && sceltaDifficoltà !== 2) {
sceltaDifficoltà = parseInt(prompt('Seleziona la difficoltà scegliendo un numero tra 0 e 2'))
 }
switch (sceltaDifficoltà) {
  case 0:
    max = 100;
    break;
  case 1:
    max = 80;
    break;
  case 2:
    max = 50;
    break;
  default:
    max = 60;
}
// Il computer deve generare 16 numeri casuali compresi tra 1 e 100:
var numeriGenerati = [];
var min = 1;
var puntiPerVincere = max - 16; // perchè 16 è il numero delle mine

while (numeriGenerati.length < 16) {
  var i = Math.floor(Math.random() * (max + 1 - min) + min);
  if(numeriGenerati.indexOf(i) === -1) {
    numeriGenerati.push(i)
  }
}
// Ordino i numeri generati in ordine crescente:
numeriGenerati.sort(function(a, b) {
  return a - b;
});
console.log(numeriGenerati)
// Adesso dobbiamo chiedere all'utente di inserire un numero alla volta,
// finchè non finiranno i numeri a disposizione (vittoria), oppure finchè
// non ne sceglierà uno dei 16 generati randomicamente (sconfitta):
var numeroScelto;
var listaNumeriScelti = [];

while (!defeat(numeriGenerati, numeroScelto) && listaNumeriScelti.length !== puntiPerVincere) {
  numeroScelto = parseInt(prompt('Scegli un numero'));
  if (isValid(listaNumeriScelti, numeroScelto))  {
    listaNumeriScelti.push(numeroScelto);
 } else {
   alert('Il numero non è valido')
 }
  if(defeat(numeriGenerati, numeroScelto)) {
    console.log('Sei esploso!')
  } if (listaNumeriScelti.length === puntiPerVincere) {
    console.log('Hai vinto!')
  }
}

// Stampo il punteggio finale:
var punteggio;
if (listaNumeriScelti.length === puntiPerVincere) {
  punteggio = listaNumeriScelti.length;
} else {
  punteggio = listaNumeriScelti.length - 1;
}
console.log(listaNumeriScelti)
console.log('Il tuo punteggio è di ' + punteggio)
