var agora = new Date()
var hora = agora.getHours()
var data = agora.getDate()

console.log(`Agora são exatamente ${hora} horas, do dia ${data}`);

if (hora < 12) {
    console.log('Bom dia!!');
}
else if (hora <= 18) {
    console.log('Boa tarde!!');
}
else{
    console.log('Boa noite!!');
}

