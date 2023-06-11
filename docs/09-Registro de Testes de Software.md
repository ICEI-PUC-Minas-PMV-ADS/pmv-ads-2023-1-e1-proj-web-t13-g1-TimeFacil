# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>, <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

<!-- > **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/) -->

|Caso de Teste        | [CT-13] O site deve permitir o cadastro de professores e alunos.      |
|---------------------|-----------------------------------------------------------------------|
|	Requisito Associado | [RF-13] O site deve permitir o cadastro de professores e alunos.      |
| Objetivo do Teste 	 | Verificar se o cadastro dos usuários está sendo efetuado com sucesso.|
| Passos 	            | - Acessar a página Cadastro (tela registro.html) <br> - Preencher os campos "Nome de usuário", "E-mail", "Matrícula" e "Senha" <br> - Clicar no botão "Cadastrar-se" |
| Critério de Êxito   | Os dados informados por meio do formulário deverão ter sido armazenados com sucesso (em um arquivo JSON ou no LocalStorage). |
| Êxito?              | Não.                                                                  |
| Comentário          | Os dados informados durante o cadastro não estão sendo armazenados.   |
| Evidência           | ![RF13](img/testes-RF13.png) |

|Caso de Teste        | [CT-14] O site deve permitir o login dos usuários cadastrados.      |
|---------------------|---------------------------------------------------------------------|
|	Requisito Associado | [RF-14] O site deve permitir o login dos usuários cadastrados.      |
| Objetivo do Teste 	 | Verificar se o login dos usuários está sendo realizado com sucesso.|
| Passos 	            | - Acessar a página Entre no Time Fácil (login tela.html); <br> - Preencher os campos "Nome de usuário" e "Senha"; <br> - Clicar no botão "Entrar". |
| Critério de Êxito   | O usuário deverá ter conseguido entrar no sistema.                  |
| Êxito?              | Não.                                                                |
| Comentário          | Após efetuar login, o usuário não entra no sistema.   |
| Evidência           | ![RF14](img/testes-RF14.png) |
