function handleClick(event) {
	event.target.classList.toggle("clicked");
}
//Criar Grupo
function generateJSON() {
	let disciplina = document.querySelector("#disciplina").textContent;
	let atividade = document.querySelector("#atividade").textContent;
	let prazo = document.querySelector("#prazo").textContent;
	let integrantes_min = document.querySelector("#integrantes_min").textContent;
	let integrantes_max = document.querySelector("#integrantes_max").textContent;
	let tema = document.querySelector("#tema").value;
	let hora = document.querySelector("#hora").value;
	let comentario = document.querySelector("#comentario").value;

	let domingo = document.querySelector("#dia_dom").classList.contains("clicked");
	let segunda = document.querySelector("#dia_seg").classList.contains("clicked");
	let terca = document.querySelector("#dia_ter").classList.contains("clicked");
	let quarta = document.querySelector("#dia_qua").classList.contains("clicked");
	let quinta = document.querySelector("#dia_qui").classList.contains("clicked");
	let sexta = document.querySelector("#dia_sex").classList.contains("clicked");
	let sabado = document.querySelector("#dia_sab").classList.contains("clicked");

	let data = {
		disciplina,
		atividade,
		prazo,
		integrantes_min,
		integrantes_max,
		tema,
		hora,
		comentario,
		domingo,
		segunda,
		terca,
		quarta,
		quinta,
		sexta,
		sabado,
	};

	let jsonData = JSON.stringify(data);

	alert(jsonData);

	let downloadLink = document.createElement("a");
	downloadLink.href = "data:text/json;charset=utf-8," + encodeURIComponent(jsonData);
	downloadLink.download = "data.json";

	document.body.appendChild(downloadLink);
	downloadLink.click();

	document.body.removeChild(downloadLink);
	window.location.href = "index.html";
}
//Entrar em Grupo.
function confirmaSaida() {
	var confirmado = confirm("Você deseja mesmo entrar no grupo?");

	if (confirmado === true) {
		alert("Você entrou no grupo!");
	} else {
		alert("Ação cancelada!");
	}
}

//Criar Atividade
function criaAtividade() {
	if (confirm("Confirma a criação da atividade?") == true) {
		alert("Atividade criada com sucesso!");
	} else {
		alert("Ação cancelada!");
	}
}
