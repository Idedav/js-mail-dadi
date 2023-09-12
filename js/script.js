// EMAIL
const emailsAdded = [
    'aldo.baglio@gmail.com',
    'giovanni.storti@gmail.com',
    'giacomo.poretti@gmail.com',
    'ajeje.brazorf@gmail.com'
]
const emailUser = prompt('Inserisci la tua email per la registrazione al gioco.')
let emailWrong = false
let message;
// EMAIL'S CONTROL
for(let i= 0; i < emailsAdded.length; i++){
    const email = emailsAdded[i];

    if(email === emailUser){
        emailWrong = true
        console.log('wrong email');
        message = 'Utente già registrato'
    }

}
    if(!emailWrong){
    emailsAdded.push(emailUser)
    message = 'Benvenuto!'
    }

    document.getElementById('output').innerHTML = message

// DICES'S GAME
const btnDice = document.getElementById('btn-dice')

btnDice.addEventListener('click' function()){
    const userDice = Math.floor((Math.random() * 6) + 1)
    const pcDice = Math.floor((Math.random() * 6) +)
}