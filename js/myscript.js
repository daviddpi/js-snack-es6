/**
 *  Snack 3 (i primi sarebbero quelli di ieri)
    Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) 
    compresa tra i due numeri specificati.
    Usiamo i nuovi metodi degli array forEach() o filter().
*/

//funzione che crea un nuovo array copiandolo da uno esistente scegliendo gli indici di partenza e fine da copiare
//usando filter
function newArrayFromIndex(array, indexStart, indexEnd){
    let newArray = array.filter((element, index) =>  index >= indexStart && index <= indexEnd);
    return newArray;
}

//usando ForEach forma 
function newArrayFromIndexForEach(array, indexStart, indexEnd){
    let newArray2 = [];
    array.forEach((element, index) =>  {
        (index >= indexStart && index <= indexEnd) ? newArray2.push(element) : false
    });
    return newArray2;
}


const macchine = ["ferrari" ,"audi", "bugatti", "bmw", "bentley", "aston martin", "jaguar" ,"maserati"];
const nuoveMacchine = newArrayFromIndex(macchine, 0, 2);
const nuoveMacchine2 = newArrayFromIndexForEach(macchine, 1, 4);

console.table(macchine);
console.table("Copia usando filter:", nuoveMacchine);
console.table("Copia usando ForEach", nuoveMacchine2);


/**
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
*/

function numeriRandom(){
    return Math.floor(Math.random() * 130);
}

const squadreDiCalcio = [

    {
        nome: "Juventus",
        puntiFatti: 0,
        falliSubiti: 0 

    },
    {
        nome: "Inter",
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0

    },
    {
        nome: "Catania",
        puntiFatti: 0,
        falliSubiti: 0

    },

];

squadreDiCalcio.forEach((element,index) => {
    element.falliSubiti = numeriRandom();
    element.puntiFatti = numeriRandom();
});

// for(let i = 0; i < squadreDiCalcio.length; i++){
//     squadreDiCalcio[i].falliSubiti = numeriRandom();
//     squadreDiCalcio[i].puntiFatti = numeriRandom();

// }

console.table(squadreDiCalcio);


/**
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
*/

let bici = [
    {
        nome: "bianchi",
        peso: 6.4
    },

    {
        nome: "rossa",
        peso: 7
    },

    {
        nome: "nera",
        peso: 8.2
    },

    {
        nome: "Ofmega",
        peso: 5.7
    },

    {
        nome: "Shimano",
        peso: 6.34
    },

    {
        nome: "graziella",
        peso: 70
    }
];

let pesoIniziale = bici[0];

// for(let i = 0; i < bici.length; i++){
//     if(pesoIniziale.peso > bici[i].peso){
//         pesoIniziale = bici[i];
//     }
// }

bici.forEach((element,index) => {
    if(pesoIniziale.peso > element.peso){
        pesoIniziale = element;
    }
});

console.table(bici);
console.log("La bici meno pesante è: " + pesoIniziale.nome + " - " + pesoIniziale.peso);
