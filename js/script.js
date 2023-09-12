// EMAIL
const emailsAdded = [
    'aldo.baglio@gmail.com',
    'giovanni.storti@gmail.com',
    'giacomo.poretti@gmail.com',
    'ajeje.brazorf@gmail.com'
]
const emailUser = prompt('Inserisci la tua email per la registrazione al gioco.')
let emailWrong = false
let messageEmail;
// EMAIL'S CONTROL
for(let i= 0; i < emailsAdded.length; i++){
    const email = emailsAdded[i];

    if(email === emailUser){
        emailWrong = true
        console.log('wrong email');
        messageEmail = 'Utente già registrato'
    }

}
    if(!emailWrong){
    emailsAdded.push(emailUser)
    messageEmail = 'Benvenuto!'
// DICES'S GAME
    const btnDice = document.getElementById('btn-dice')
    btnDice.addEventListener('click', function(){
// NUMBERS GENERATOR
        const userDice = Math.floor((Math.random() * 6) + 1);
        const pcDice = Math.floor((Math.random() * 6) + 1);
        let messageDice;
        console.log(userDice, pcDice)
// NUMBERS CONTROL
        if(userDice > pcDice){
            console.log('Hai vinto')
            messageDice = 'Ti è uscito ' + userDice + ' e al pc è uscito ' + pcDice + ' Hai vinto!'
        }else if(userDice < pcDice){
            console.log('Hai perso')
            messageDice = 'Ti è uscito ' + userDice + ' e al pc è uscito ' + pcDice + ' Hai perso...'
        }else if(userDice == pcDice){
            console.log('pareggio')
            messageDice = 'Ti è uscito ' + userDice + ' e al pc è uscito ' + pcDice + ' Hai pareggiato.'
        }
        document.getElementById('output-dice').innerHTML = messageDice
    })
    }
    document.getElementById('output-email').innerHTML = messageEmail
