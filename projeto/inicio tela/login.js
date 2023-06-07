let Nomedeusuário = document.querySelector('#Nomedeusuário')
let labelnome = document.querySelector('#labelnome')

let Senha = document.querySelector('#Senha')
let labelSenha = document.querySelector('#labelSenha')

Nomedeusuário.addEventListener('keyup', () => {
    if(Nomedeusuário.value.length <=2) {
        labelnome.setAttribute('style', 'color: red')

    }else{
        labelnome.setAttribute('style', 'color: green')
    }
    })