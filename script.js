function convBIN(){
    let numDec = document.getElementById('numeroDecimale').value;
    let numBin = [];
    let binLenght = 0;
    let reverseNumBin = [];

    for(let i=0 ; numDec!=0 ; i++){
        if(numDec%2==0){
            numBin[i] = 0;
            numDec/=2;
        }
        else if(numDec%2==1){
            numBin[i] = 1;
            numDec=(numDec-1)/2;
        }
        binLenght++;
    }


    console.table(numBin);
    console.log(numBin);
    console.log(`Lunghezza array = ${binLenght}`);

    for(let j=0 ; binLenght>0 ; j++){
        reverseNumBin[binLenght] = numBin[j];

        binLenght--;
    }

    console.table(reverseNumBin);
    console.log(reverseNumBin);



    // Funzione per unire 2 stringhe oppure array 
    // con un carattere a scelta
    let stringaFinale = reverseNumBin.join("");


    document.getElementById("numeroBinario").value=stringaFinale;
}