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

var i = 0
while (numeroScelto != numeriGenerati[i]) {
  numeroScelto = prompt('Scegli un numero');
}
