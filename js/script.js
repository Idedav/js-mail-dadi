// EMAIL
const emailsAdded = [
    'aldo.baglio@gmail.com',
    'giovanni.storti@gmail.com',
    'giacomo.poretti@gmail.com',
    'ajeje.brazorf@gmail.com'
]
const emailUser = prompt('Inserisci la tua email per accedere al gioco')
const dicesGame = document.getElementById('dices-game')
let emailRight = false
let messageEmail;
// EMAIL'S CONTROL
for(let i= 0; i < emailsAdded.length; i++){
    const email = emailsAdded[i];

    if(email === emailUser){
        emailRight = true
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
            }else{
                console.log('pareggio')
                messageDice = 'Ti è uscito ' + userDice + ' e al pc è uscito ' + pcDice + ' Hai pareggiato.'
            }
    // RESULT MEESSAGE
            document.getElementById('output-dice').innerHTML = messageDice
        })
        }

}

if(!emailRight){
    messageEmail = 'Utente non trovato'
    dicesGame.classList.add('d-none')
}
   
    document.getElementById('output-email').innerHTML = messageEmail
