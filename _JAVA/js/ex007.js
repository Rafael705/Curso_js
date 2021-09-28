const n1 = document.getElementById('num1')
const n2 = document.querySelector('input#num2')
const res = document.getElementById('res')




function soma(){
    let val1 = Number(num1.value)
    let val2 = Number(num2.value)
    let s = val1 + val2
    res.innerHTML =  `${s}`
    
}


