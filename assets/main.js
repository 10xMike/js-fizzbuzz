// Scrivi un programma che stampi i numeri da 1 a 100,
for(var i = 0; i < 100; i++){
    var number = i + 1
    if (number % 3 == 0 && number % 5 == 0){
        console.log('Fizzbuzz')
        // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
    } else if (number % 3 == 0) {
        console.log('Fizz')
    } else if (number % 5 == 0){
        console.log('Buzz')
        // ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz
    } else {
        console.log('Non è Fizz, Buzz, o Fizzbuzz')
    }
}       

// non mi quadrano i conti con i multipli; 


