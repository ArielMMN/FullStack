p1 = document.getElementById('p1').innerHTML;
console.log(p1);  


document.getElementById('p1').innerHTML = "novo texto";


// ex 01

// let nome = prompt("Digite o seu nome!");
// let idade = prompt("Digite sua idade!");
// let anoAtual = 2025;

// let anoNasci = anoAtual - idade;


// let respEx1 = 'Olá ' + nome + ', seu ano de nascimento é ' + anoNasci + '!'
// document.getElementById('ex1').innerHTML = respEx1;

// function imprimeFrase(frase) {
//     document.getElementById('ex_f').innerHTML = frase;
// }

// imprimeFrase('helo world');

// imprimeFrase('ola mundo');


function soma(a, b) {
    return a + b;
}

function mult(a, b) {
    return a * b;
}


// console.log(c);

// console.log(soma(10, -2));

// function ex_input(){
//     let v = document.getElementById('entrada_usuario').value;
//     document.getElementById('ex_f').innerHTML = v;
// }

// function ex2(){
//     let num = document.getElementById('ex2_num').value;

//     let resp = '';
//     console.log('Respostas ex 2');
//     for (let i = 0; i < num; i++){
//         console.log(i);
//         resp += i + '';
//     }
//     // document.getElementById('ex2_resp').innerHTML = resp;
// }

// function ex3() {
//     let num1 = parseInt.document.getElementById('ex3_num1').value;
//     let num2 = parseInt.document.getElementById('ex3_num2').value;

//     resp = soma(num1, num2);
//     document.getElementById('ex3_resp').innerHTML = resp;
// }

function ex4(){
    let num1 = parseInt(document.getElementById('ex4_num1').value);
    let num2 = parseInt(document.getElementById('ex4_num2').value);

    let resp = ''
    if(num1 < 0 || num2 <0){
        resp = soma(num1, num2);
    }else{
        resp = mult(num1, num2);
    }
    document.getElementById('ex4_resp').innerHTML = resp
}