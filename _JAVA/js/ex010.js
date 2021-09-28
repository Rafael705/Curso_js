var txtv = document.querySelector('input#velo');
var res = document.querySelector('div#res');
const toast = document.querySelector('.toast');

function validandoVelocidadeParaMultar(){
    var vel = Number(txtv.value);

    res.innerHTML = `<p> Sua velocidade atual é <strong style="color:red;">${vel}</strong> km/h </p>`;

    if (vel === 0 ) {
        res.innerHTML += 'Você esta parado';
        toast.classList.remove('aparece');
    } 
    else if (vel < 0) {
        toast.classList.add('aparece');
    }
    else if (vel > 100) {
        res.innerHTML += 'Você foi multado por excesso de velocidade';
        toast.classList.remove('aparece');
    }
    else {
        res.innerHTML += 'Você dirije muito bem';
        toast.classList.remove('aparece');
    }
}