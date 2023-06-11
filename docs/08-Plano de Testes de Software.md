# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
<!-- ## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7) -->

|Caso de Teste        | [CT-13] O site deve permitir o cadastro de professores e alunos. |
|---------------------|--------------------------------------------------------------------|
|	Requisito Associado | [RF-13] O site deve permitir o cadastro de professores e alunos. |
| Objetivo do Teste 	 | Verificar se o cadastro dos usuários está sendo efetuado com sucesso.|
| Passos 	            | - Acessar a página Cadastro (tela registro.html); <br> - Preencher os campos "Nome de usuário", "E-mail", "Matrícula" e "Senha"; <br> - Clicar no botão "Cadastrar-se". |
| Critério de Êxito   | Os dados informados por meio do formulário deverão ter sido armazenados com sucesso (em um arquivo JSON ou no LocalStorage). |

|Caso de Teste        | [CT-14] O site deve permitir o login dos usuários cadastrados.|
|---------------------|--------------------------------------------------------------------|
|	Requisito Associado | [RF-14] O site deve permitir o login dos usuários cadastrados. |
| Objetivo do Teste 	 | Verificar se o login dos usuários está sendo realizado com sucesso.|
| Passos 	            | - Acessar a página Entre no Time Fácil (login tela.html); <br> - Preencher os campos "Nome de usuário" e "Senha"; <br> - Clicar no botão "Entrar". |
| Critério de Êxito   | O usuário deverá ter conseguido entrar no sistema. |

|Caso de Teste        | [CT-05] O site deve permitir aos alunos criar seus grupos dentro das páginas de trabalhos dos professores, sendo possivel definir horarios para as reuniões.|
|---------------------|--------------------------------------------------------------------|
|	Requisito Associado | [RF-05] O site deve permitir aos alunos criar seus grupos dentro das páginas de trabalhos dos professores. <br> [RF-15]  O site deve permitir ao aluno, ao criar o grupo, a sugerir horários de reunião. |
| Objetivo do Teste 	 | Verificar se o sistema está permitindo o cadastro de grupos com a definição de dias da semana e horario para as reuniões. |
| Passos 	            | - Acessar através do menu lateral a sessão de criar grupo (create_group .html); <br> - Preencher os campos pertinentes para a categoria de atividade criada pelo professor, juntamente com os dias propostos e/ou possiveis para as reuniões juntamente com os horarios; <br> - Caso necessario inserir algum comentario sobre a atividade proposta. <br> - Clicar no botão "Criar". |
| Critério de Êxito   | O usuario deve conseguir cadastrar uma atividade colocando dias e horarios como sugestão de reuniões, como  também a inserção de um comentario sobre a atividade proposta e os dados serem armazenados com sucesso (em um arquivo JSON ou no LocalStorage).|
