// Il computer deve generare 16 numeri casuali compresi tra 1 e 100
var numeriGenerati = [];
var min = 1;
var max = 100;

for (var i = 0; i < 16; i++) {
  numeriGenerati[i] = Math.floor(Math.random() * (max + 1 - min) + min);
}
console.log(numeriGenerati)
// Adesso dobbiamo chiedere all'utente di inserire un numero alla volta,
// finchè non finiranno i numeri a disposizione, oppure finchè non ne sceglie uno dei 16 generati
var numeroScelto;
var listaNumeriScelti = [];

while (numeriGenerati.indexOf(numeroScelto) === -1) {
  numeroScelto = parseInt(prompt('Scegli un numero'));
  listaNumeriScelti.push(numeroScelto);
  if(numeriGenerati.indexOf(numeroScelto) !== -1)
    console.log('sei esploso!')
  else if (listaNumeriScelti.length === 5)
    alert('Hai vinto!')
}
var punteggio = listaNumeriScelti.length
console.log(listaNumeriScelti)
console.log('Il tuo punteggio è di ' + punteggio)
