/**
 *  Snack 3 (i primi sarebbero quelli di ieri)
    Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) 
    compresa tra i due numeri specificati.
    Usiamo i nuovi metodi degli array forEach() o filter().
*/
function newArrayFromIndex(array, indexStart, indexEnd){
    let newArray = array.filter((element, index) => {
        if(index >= indexStart && index <= indexEnd){
            return true;
        }
        
    });
    return newArray;
}


const macchine = ["ferrari" ,"audi", "bugatti", "bmw", "bentley", "aston martin", "jaguar" ,"maserati"];
const nuoveMacchine = newArrayFromIndex(macchine, 1, 4);

console.table(macchine);
console.table(nuoveMacchine);