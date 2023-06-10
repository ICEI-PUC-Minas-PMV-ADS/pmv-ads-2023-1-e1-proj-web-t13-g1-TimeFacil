 if (localstorage.getitem("token") == null) {
     alert ("Você precisa estar logado para acessar essa pagina")
     window.location.href = "../inicio tela/loginsasa.html";
 }

 let userlogado = JSON.parse(localstorage.getitem("userlogado"));

 let logado = document.querySelector("#logado");
 logado.innerHTML = Olá `${userlogado.nome}`;

 function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userlogado");
    window.location.href = "../inicio tela/loginsasa.html";

 }