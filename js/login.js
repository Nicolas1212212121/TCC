// login//
var usuario = document.getElementById('usuario').value;
var senha = document.getElementById('senha').value;

//cadastro//
var nomeC = document.getElementById('nome').value;
var senhaC = document.getElementById('senhaC').value;
var senhaCC = document.getElementById('senhaCC').value;

function logar(){

    if(usuario== nomeC && senha == senhaC ){
        alert('Login correto.')
        location.href = "file:///C:/Users/Scheyton/Desktop/programa%C3%A7%C3%A3o/Escola/Projeto%20teste%20para%20o%20TCC/index.htm";
    }else{
        alert("Você não tem cadastro feça o cadastro para poder entrar")
    }
    
}
function ifcadastro(){

    if(usuario== nomeC){
        alert("Nome já existente")

    }else{
        alert('ok')
        location.href = "http://127.0.0.1:5500/Projeto%20teste%20para%20o%20TCC/Akame.htm";
    }
}


