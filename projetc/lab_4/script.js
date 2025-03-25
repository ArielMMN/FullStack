let n1 = Math.floor(Math.random()*100);
console.log(n1)

function ex1(){
    let num = parseInt(document.getElementById('num').value);

    if(num < n1){
        document.getElementById('resp').innerHTML = "Maior"
    }else if(num > n1){
        document.getElementById('resp').innerHTML = "Menor"
    }else if(num === n1){
        document.getElementById('resp').innerHTML = "Acertou";
        document.getElementById('resp').style.setProperty("background-color", "green");
    }
}