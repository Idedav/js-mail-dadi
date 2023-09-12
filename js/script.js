const emailsAdded = [
    'aldo.baglio@gmail.com',
    'giovanni.storti@gmail.com',
    'giacomo.poretti@gmail.com',
    'ajeje.brazorf@gmail.com'
]
const emailUser = prompt('Inserisci la tua email per la registrazione al gioco.')
let emailWrong = false
let message;

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
    console.log(emailsAdded)
    message = 'Benvenuto!'
    }

    document.getElementById('output').innerHTML = message




