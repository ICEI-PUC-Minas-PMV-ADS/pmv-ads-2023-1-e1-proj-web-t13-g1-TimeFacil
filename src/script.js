//Criar Grupo
function handleClick(event) {
	event.target.classList.toggle("clicked");
}

function generateJSON() {
	let disciplina = document.querySelector("#disciplina").textContent;
	let atividade = document.querySelector("#atividade").textContent;
	let prazo = document.querySelector("#prazo").textContent;
	let integrantesMin = document.querySelector("#integrantesMin").textContent;
	let integrantesMax = document.querySelector("#integrantesMax").textContent;
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
		integrantesMin,
		integrantesMax,
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

//Oculta, em Criar Atividade, o campo "Tema", até que o usuário clique em "Sim", no campo "Tema Fixo?"
function mostraEscondeTema() {
	if (document.getElementById("temaFixoSim").checked) {
		document.getElementById("temaLabel").style.display = "inline-block";
		document.getElementById("tema").style.display = "inline-block";
	} else {
		document.getElementById("temaLabel").style.display = "none";
		document.getElementById("tema").style.display = "none";
	}
}

//Metodo para abrir modal
function novaTurmaModal(modalName) {
	let modal = document.getElementById(modalName);
	if (typeof modal == "undefined" || modal === null) return;
	modal.style.display = "Block";
}
// Metodo para fechar modal
function cancelarNovaTurma(modalName) {
	let modal = document.getElementById(modalName);
	if (typeof modal == "undefined" || modal === null) return;
	modal.style.display = "None";
}

//Metodo para adicionar linhas em uma tabala através da inserção de valores em um formulario.
function adicionarTurma(eixo, turma, disciplina) {
	//Metodo para adicionar linhas em uma tabala através da inserção de valores em um formulario.

	var tableTurma = document.getElementById("tabela-turmas");

	var rowCount = tableTurma.rows.length;
	var row = tableTurma.insertRow(rowCount);

	var cell1 = row.insertCell(0);
	cell1.innerHTML = eixo;

	var cell2 = row.insertCell(1);
	cell2.innerHTML = disciplina;

	var cell3 = row.insertCell(2);

	cell3.innerHTML = turma;

	var cell4 = row.insertCell(3);
	var qtdAlunos = document.createElement("a");
	var textQtdAluno = document.createTextNode("0");
	qtdAlunos.appendChild(textQtdAluno);
	qtdAlunos.href = "#";
	cell4.appendChild(qtdAlunos);

	var cell5 = row.insertCell(4);
	var iconeEditar = document.createElement("input");
	iconeEditar.type = "image";
	iconeEditar.src = "icones/editar.png";
	iconeEditar.id = "icones-coluna";

	var iconeExcluir = document.createElement("input");
	iconeExcluir.type = "image";
	iconeExcluir.src = "icones/excluir.png";
	iconeExcluir.id = "icones-coluna";
	iconeExcluir.onclick = function () {
		deletarTurma(this);
	};
	var iconeAdcALuno = document.createElement("input");
	iconeAdcALuno.type = "image";
	iconeAdcALuno.src = "icones/adicionar-aluno.png";
	iconeAdcALuno.id = "icones-coluna";

	cell5.appendChild(iconeEditar);
	cell5.appendChild(iconeExcluir);
	cell5.appendChild(iconeAdcALuno);

	alert("Disciplina " + disciplina + " da turma " + turma + " do eixo " + eixo + " foi criado com sucesso!");
	cancelarNovaTurma("modal-nova-turma");
}

//Metodo para deletar linhas de uma tabela.
function deletarTurma(input) {
	var confirmacao = confirm("Deseja Realmente Excluir este Grupo?");

	if (confirmacao) {
		var linha = input.parentNode.parentNode;
		var tabela = document.getElementById("tabela-turmas");
		var numLinha = linha.rowIndex;
		tabela.deleteRow(numLinha);
	}
}
