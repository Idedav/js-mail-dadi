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
        messageEmail = 'Benvenuto in Craps!'
    // DICES'S GAME
        const btnDice = document.getElementById('btn-dice')
        btnDice.addEventListener('click', function(){
    // NUMBERS GENERATOR
            const userDice = Math.floor((Math.random() * 6) + 1);
            const pcDice = Math.floor((Math.random() * 6) + 1);
            let messageDice;
    // NUMBERS CONTROL
            if(userDice > pcDice){
                messageDice = `
                <div class="row">
                    <div class="col-6">
                        <h2>Il tuo dado:</h2>
                        <span>${userDice}</span>
                    </div>
                    <div class="col-6">
                        <h2>Il dado del PC:</h2>
                        <span>${pcDice}</span>
                    </div>
                    <div class="col-12 my-5">
                        <h2>Hai vinto!</h2>
                    </div>
                </div
                `
            }else if(userDice < pcDice){
                messageDice = `
                <div class="row">
                    <div class="col-6">
                        <h2>Il tuo dado:</h2>
                        <span>${userDice}</span>
                    </div>
                    <div class="col-6">
                        <h2>Il dado del PC:</h2>
                        <span>${pcDice}</span>
                    </div>
                    <div class="col-12 my-5">
                        <h2>Hai perso...</h2>
                    </div>
                </div
                `
            }else{
                messageDice = `
                <div class="row">
                    <div class="col-6">
                        <h2>Il tuo dado:</h2>
                        <span>${userDice}</span>
                    </div>
                    <div class="col-6">
                        <h2>Il dado del PC:</h2>
                        <span>${pcDice}</span>
                    </div>
                    <div class="col-12 my-5">
                        <h2>Hai pareggiato.</h2>
                    </div>
                </div
                `
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
