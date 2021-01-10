// Il computer deve generare 16 numeri casuali compresi tra 1 e 100
var numeriGenerati = [];
var min = 1;
var max = 100;

while (numeriGenerati.length < 16) {
  var i = Math.floor(Math.random() * (max + 1 - min) + min);
  if(numeriGenerati.indexOf(i) === -1) {
    numeriGenerati.push(i)
  }
}
numeriGenerati.sort(function(a, b) {
  return a - b;
});
console.log(numeriGenerati)
// Adesso dobbiamo chiedere all'utente di inserire un numero alla volta,
// finchè non finiranno i numeri a disposizione, oppure finchè non ne sceglie uno dei 16 generati
var numeroScelto;
var listaNumeriScelti = [];

while (numeriGenerati.indexOf(numeroScelto) === -1) {
  numeroScelto = parseInt(prompt('Scegli un numero'));
  if (listaNumeriScelti.indexOf(numeroScelto) === -1 && numeroScelto > 0 && numeroScelto < 100)  {
    listaNumeriScelti.push(numeroScelto);
 } else {
   alert('devi scegliere numeri diversi inclusi tra 1 e 100')
 }
  if(numeriGenerati.indexOf(numeroScelto) !== -1) {
    console.log('sei esploso!')
    break;
  } if (listaNumeriScelti.length === 5) {
    alert('Hai vinto!')
    break;
  }
}
var punteggio = listaNumeriScelti.length -1;
console.log(listaNumeriScelti)
console.log('Il tuo punteggio è di ' + punteggio)
