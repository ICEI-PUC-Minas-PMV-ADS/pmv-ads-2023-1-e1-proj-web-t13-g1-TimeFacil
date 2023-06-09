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

//=================================
//Criar Atividade - Início da seção
//=================================

//Métodos para leitura e escrita de strings no LocalStorage
let getLocalStorage = () => JSON.parse(localStorage.getItem("db_atividade")) ?? [];
let setLocalStorage = (dataAtividade) => localStorage.setItem("db_atividade", JSON.stringify(dataAtividade));

//Método para evitar a gravação do valor null no LocalStorage.
let atividadeVazio = (atividade) => {
	for (let key in atividade) {
		if (atividade[key] !== "") {
			return false;
		}
	}
	return true;
};

//Métodos para criação, leitura, edição e exclusão de atividades no LocalStorage
let createAtividade = (atividade) => {
	let dataAtividade = getLocalStorage();
	if (!atividadeVazio(atividade)) {
		dataAtividade.push(atividade);
		setLocalStorage(dataAtividade);
	}
};

let readAtividade = () => getLocalStorage();

let updateAtividade = (index, atividade) => {
	let dataAtividade = readAtividade();
	dataAtividade[index] = atividade;
	setLocalStorage(dataAtividade);
};

let deleteAtividade = (index) => {
	let dataAtividade = readAtividade();
	if (index !== -1) {
		dataAtividade.splice(index, 1);
		setLocalStorage(dataAtividade);
	}
};

//Interação
//Oculta, em Criar Atividade, o campo "Tema", até que o usuário clique em "Sim", no campo "Tema Fixo?"
function mostraEscondeTema() {
	if (document.getElementById("temaFixoSim").checked) {
		document.getElementById("temaLabel").style.display = "inline-block";
		document.getElementById("tema").style.display = "inline-block";
		//Torna o campo "Tema" obrigatório
		document.getElementById("tema").required = "true";
	} else {
		document.getElementById("temaLabel").style.display = "none";
		document.getElementById("tema").style.display = "none";
	}
}

//Valida formulário
let gravaAtividade = () => {
	const formulario = document.getElementById("formularioAtividade");
	const integrantesMin = document.getElementById("integrantesMin");
	const integrantesMax = document.getElementById("integrantesMax");
	const prazo = document.getElementById("prazo");

	if (formulario.checkValidity()) {
		// Testa se o número máximo de integrantes é maior do que o número mínimo
		if (integrantesMax.value < integrantesMin.value) {
			alert("O número máximo de integrantes não pode ser inferior ao número mínimo.");
			return;
		}
		//Testa se o prazo máximo de formação está no futuro
		let dataAtual = new Date();
		let dataPrazo = new Date(prazo.value);
		if (dataPrazo < dataAtual) {
			alert("O prazo de formação da atividade não pode estar no passado.");
			return;
		}

		//Objeto com os dados inseridos no formulário
		let atividade = {
			atividade: document.getElementById("atividade").value,
			temaFixo: document.querySelector("input[name='temaFixoSimNao']:checked").value,
			tema: document.getElementById("tema").value,
			integrantesMin: integrantesMin.value,
			integrantesMax: integrantesMax.value,
			prazo: prazo.value,
		};

		//Receba!
		createAtividade(atividade);
		formulario.reset();
		alert("Atividade salva com sucesso!");
	}
};

//Trecho usado para não carregar o EventListener do formularioAtividade quando o usuário estiver na página "Gerenciar Atividades".
if (window.location.pathname.includes("criar-atividade.html")) {
	if (document.getElementById("formularioAtividade")) {
		document.getElementById("formularioAtividade").addEventListener("submit", function (event) {
			event.preventDefault();
			gravaAtividade();
		});
	}
} else {
	//===============================
	// Criar Atividade - Fim da seção
	//===============================

	//======================================
	//Gerenciar Atividades - Início da seção
	//======================================
	document.addEventListener("DOMContentLoaded", function () {
		gerenciarAtividades();
	});

	//Carrega os dados armazenados no LocalStorage
	function gerenciarAtividades() {
		let atividades = readAtividade();
		let tabelaBody = document.querySelector("#tabela-atividades tbody");

		// Limpa o conteúdo atual da tabela
		if (tabelaBody) {
			tabelaBody.innerHTML = "";

			// Adiciona as linhas da tabela
			for (let atividade of atividades) {
				let row = tabelaBody.insertRow();
				row.classList.add("tabela-linha");

				let celulaAtividade = row.insertCell();
				celulaAtividade.textContent = atividade.atividade;
				celulaAtividade.classList.add("tabela-celula");

				let celulaTema = row.insertCell();
				celulaTema.textContent = atividade.tema;
				celulaTema.classList.add("tabela-celula");

				let celulaIntegrantes = row.insertCell();
				celulaIntegrantes.textContent = atividade.integrantesMin.concat(" a ", atividade.integrantesMax);
				celulaIntegrantes.classList.add("tabela-celula");

				let celulaPrazo = row.insertCell();
				celulaPrazo.textContent = atividade.prazo;
				celulaPrazo.classList.add("tabela-celula");

				let celulaAcoes = row.insertCell();
				celulaAcoes.classList.add("tabela-celula");

				// Adiciona o ícone de edição
				let iconeEditarAtividade = document.createElement("span");
				iconeEditarAtividade.classList.add("icone-editar-atividade");
				let editarImg = document.createElement("img");
				editarImg.src = "icones/editar.png";
				iconeEditarAtividade.appendChild(editarImg);

				//Método para abrir o modal a partir do ícone editar
				iconeEditarAtividade.addEventListener("click", function () {
					let rowIndex = this.parentNode.parentNode.rowIndex - 1;
					// document.getElementById("indiceLinha").value = rowIndex; //Tentativa de resolver o NaN
					let atividade = readAtividade()[rowIndex];
					document.getElementById("atividade").value = atividade.atividade;
					document.getElementById("temaFixoSim").checked = atividade.temaFixo === "sim";
					document.getElementById("temaFixoNao").checked = atividade.temaFixo === "nao";
					let campoTema = document.getElementById("tema");
					campoTema.value = atividade.tema;

					//Exibe ou oculta o campo tema, de acordo com o valor gravado no LocalStorage
					if (atividade.temaFixo === "sim") {
						campoTema.style.display = "inline-block";
						document.getElementById("temaLabel").style.display = "inline-block";
					} else {
						campoTema.style.display = "none";
						document.getElementById("temaLabel").style.display = "none";
					}
					document.getElementById("integrantesMin").value = atividade.integrantesMin;
					document.getElementById("integrantesMax").value = atividade.integrantesMax;
					document.getElementById("prazo").value = atividade.prazo;

					// Método para exibir o modal
					let modal = document.getElementById("modal-atividades");
					modal.style.display = "block";
				});
				celulaAcoes.appendChild(iconeEditarAtividade);

				//Adiciona o ícone de exclusão
				let iconeDeletarAtividade = document.createElement("span");
				iconeDeletarAtividade.classList.add("icone-deletar-atividade");
				let excluirImg = document.createElement("img");
				excluirImg.src = "icones/excluir.png";
				iconeDeletarAtividade.appendChild(excluirImg);
				iconeDeletarAtividade.addEventListener("click", function () {
					// Exclui a linha
					let rowIndex = this.parentNode.parentNode.rowIndex - 1;
					if (confirm("Tem certeza de que deseja excluir essa atividade?")) {
						deleteAtividade(rowIndex);
						// Atualiza a tabela após a exclusão
						gerenciarAtividades();
						alert("Atividade excluída com sucesso!");
					}
				});
				celulaAcoes.appendChild(iconeDeletarAtividade);
			}

			// Adiciona evento de envio do formulário
			let form = document.getElementById("formularioAtividade");
			form.addEventListener("submit", function (event) {
				// Obtenha os valores dos campos no modal

				let atividade = document.getElementById("atividade").value;
				let temaFixo = document.querySelector('input[name="temaFixoSimNao"]:checked').value;
				let tema = document.getElementById("tema").value;
				let integrantesMin = document.getElementById("integrantesMin").value;
				let integrantesMax = document.getElementById("integrantesMax").value;
				let prazo = document.getElementById("prazo").value;

				console.log("Valores obtidos:");
				console.log("Atividade:", atividade);
				console.log("Tema Fixo:", temaFixo);
				console.log("Tema:", tema);
				console.log("Integrantes Mínimo:", integrantesMin);
				console.log("Integrantes Máximo:", integrantesMax);
				console.log("Prazo:", prazo);

				//Atualize a atividade no LocalStorage
				let rowIndex = this.parentNode.parentNode.rowIndex - 1; //O PROBLEMA ESTÁ AQUI!
				// document.getElementById("indiceLinha").value = rowIndex; //Tentativa de resolver o NaN
				console.log("Índice da atividade:", rowIndex);
				updateAtividade(rowIndex, atividade, temaFixo, tema, integrantesMin, integrantesMax, prazo);
				// Feche o modal
				let modal = document.getElementById("modal-atividades");
				modal.style.display = "none";

				// Atualize a tabela com as alterações
				gerenciarAtividades();

				// Exiba uma mensagem de sucesso (opcional)
				alert("Alterações salvas com sucesso!");
			});

			// Métodos para fechar o modal
			let modal = document.getElementById("modal-atividades");
			let fecharModal = document.querySelector(".fechar-modal-atividades");
			let modalConteudo = document.querySelector(".modal-atividades-conteudo");

			// Fecha o modal quando o usuário clica no botão de fechar
			fecharModal.addEventListener("click", function () {
				modal.style.display = "none";
			});

			// Fecha o modal quando o usuário clica fora do modal
			window.addEventListener("click", function (event) {
				if (event.target === modalConteudo) {
					modal.style.display = "none";
				}
			});
		}
	}
}
//======================================
//Gerenciar Atividades - Fim da seção
//======================================

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
