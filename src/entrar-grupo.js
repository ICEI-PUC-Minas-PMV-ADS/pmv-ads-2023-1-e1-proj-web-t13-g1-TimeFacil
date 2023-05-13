//Entrar em algum grupo.
    
function confirmaSaida() {
    var confirmado = confirm("Você deseja mesmo entrar no grupo?");
  
    if (confirmado === true) {
        alert('Você entrou no grupo!');
    } else {
        alert('Ação cancelada!')
    }
  }