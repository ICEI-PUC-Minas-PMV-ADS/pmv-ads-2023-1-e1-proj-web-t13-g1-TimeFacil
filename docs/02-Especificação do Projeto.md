# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

A definição exata do problema e os pontos mais relevantes a serem tratados neste projeto foi consolidada com a participação dos usuários em um trabalho de imersão feita pelos membros da equipe a partir da observação dos usuários em seu local natural e por meio de entrevistas. Os detalhes levantados nesse processo foram consolidados na forma de personas e histórias de usuários.

## Personas

Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos do Projeto

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que eles devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-01|O site deve permitir ao professor criar uma página para sua matéria.  |Alta|
|RF-02|O site deve permitir ao professor criar uma página para a atividade em grupo.  |Alta|
|RF-03|O site deve permitir ao professor definir se a atividade tem um tema fixo ou não.  |Média|
|RF-04|O site deve permitir ao professor definir o número mínimo e máximo de membros em um grupo.  |Média|
|RF-05|O site deve permitir aos alunos criar seus grupos dentro das páginas de trabalhos dos professores.  |Alta|
|RF-06|O site deve permitir aos alunos definir temas para seus grupos se a função foi disponibilizada para o trabalho específico.  |Média|
|RF-07|O site deve permitir aos alunos entrar em outros grupos em que não foi atingido o número máximo de alunos.  |Alta|
|RF-08|O site deve permitir aos alunos sair de grupo.  |Média|
|RF-09|O site deve impedir que mais alunos entrem em um grupo quando o número máximo de membros for atingido.  |Média|
|RF-10|O site deve exibir informações sobre os grupos, como nome, tema e número de membros.  |Alta|
|RF-11|O site deve permitir ao professor definir uma data limite para formação dos grupos.  |Baixa|
|RF-12|O site deve permitir aos usuários enviar mensagens dentro de um grupo.  |Baixa|
|RF-13|O site deve permitir o cadastro de professores e alunos.  |Alta|
|RF-14|O site deve permitir o login dos usuários cadastrados.  |Alta|
|RF-15|O site deve permitir ao aluno, ao criar o grupo, a sugerir horários de reunião.  |Baixa|
|RF-16|O site deve permitir que o professor exclua as páginas criadas.  |Baixa|

### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01|O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku).  |Alta|
|RNF-02|O site deve ter bom nível de contraste entre os elementos da tela em conformidade.  |Média|
|RNF-03|O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge).  |Alta|
|RNF-04|O site deve ser acessível para usuários com deficiências visuais, auditivas ou motoras.  |Baixa|
|RNF-05|A aplicação deve possuir um seletor para modo noturno.  |Baixa|
|RNF-06|Os comentários feitos pelos professores devem ter algum destaque visual que os diferencie dos comentários feitos por alunos.  |Baixa|
|RNF-07|Os comentários feitos pelos professores devem ter algum destaque visual que os diferencie dos comentários feitos por alunos.  |Baixa|

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01|A aplicação deve ser entregue de forma plenamente funcional até 25/06/2023.  | 
|RE-02|A aplicação deve ser integralmente desenvolvida pelos membros do grupo.  |
|RE-03|A metodologia de gestão que deverá ser empregada para o desenvolvimento do projeto é a Metodologia Ágil SCRUM.  |
|RE-04|O site deverá ser desenvolvido nas linguagens de marcação HTML e CSS e programação Javascript.  |
|RE-05|O aplicativo deve se restringir às tecnologias básicas da Web no Front-end.  |
|RE-06|O desenvolvimento do site deve cumprir as regulamentações e leis aplicáveis, definidas pela LGPD.  |
