function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    window.open("https://www.google.com");
    //window.location.href = "https://www.google.com";
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    //alert("trocar texto");
}

function voltar(elemento) {
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

function load() {
    alert("Página Carregada");
}
function funcaoChange(elemento) {
    console.log(elemento.value)
}

/*
function soma(n1, n2) {
    return n1 + n2;
}

var validar
function validaIdade(idade){
    validar;
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaIdade(idade);
console.log(validar);
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
*/

//alert(soma(5,10));
//alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var d = new Date();
alert(d);
*/

/*
var count;
for(count=0; count<= 5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count < 5){
    console.log(count);
    alert(count);
    count = count + 1;
};
*/

/*
var idade = prompt("Qual a sua idade?")
if (idade >= 18) {
    alert("maior de idade");
}else {
    alert("menor de idade");
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor"roxa}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"]
//console.log(lista[1]);
//lista.pop();
//lista.push("uva");
//alert(lista[1]);

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));


/*
var nome = "Mauricio Ap. Picirillo";
var n1 = 37;
var n2 = 10;
var frase = "Japão é o melhor time do mundo";
//alert("Bem vindo" + nome + "você tem " + n1 + " anos");
//alert(n1 + n2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
*/