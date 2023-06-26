const numberList = [];

for(let i = 0; i < 5; i++){
    const singleNumber = randomNumber(1,100);
    console.log('Numero generato : ', singleNumber);

    numberList.push(singleNumber);
}

console.log('Lista nuumeri in array : ', numberList);


const seconds = 5;
setTimeout(simonSays, seconds * 1000);



/*

    FUNCTIONS

*/ 

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function simonSays() {
    console.log('Numeri da scegliere')

    const userNumber = [];
    for(let j = 0; j < 5; j++){
        const element = parseInt(prompt('Inserisci un numero : '));
        console.log('Numero utente : ', element);

        userNumber.push(element);
    }

    console.log('Lista numeri utente: ', userNumber)

    guestNumbers = [];
    for(let index = 0; index < userNumber.length; index++){
        console.log(numberList[index],'-',userNumber[index])

        if(numberList[index] === userNumber[index]){
            guestNumbers.push(userNumber[index]);
            console.log('Hai indovinato il numero in posizione :', index, 'che è : ', userNumber[index])
        }
    }

    if(guestNumbers.length > 0){
        alert(`Hai indovinato : ${guessNumbers} numeri`)
    }
    else {
        alert('Hai perso, mi dispiace!')
    }

    
}