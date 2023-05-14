# Introdução

A cada semestre, os alunos do curso de Tecnologia em Análise e Desenvolvimento de Sistemas precisam se organizar em pequenos grupos para realizar o projeto norteador daquele eixo temático. A ausência de interação entre os alunos (e entre alunos e professores), em especial no sistema EAD, dificulta a formação dessas equipes e, para sanar esse obstáculo, tem sido usado, como solução para coletar ideias, conciliar interesses e disponibilidade de horários, planilhas e plataformas online, encontros síncronos com os professores e ferramentas não oficiais, como grupos e comunidades em redes sociais e aplicativos de mensagens, alguns criados pelos próprios alunos.

Há uma multiplicidade de soluções utilizadas, com diversos serviços, de diversas empresas, hospedados em sítios e plataformas diferentes e não compatíveis, o que pode estender o tempo necessário para ambientação e inicialização dos trabalhos. Essa conjuntura requer o desenvolvimento de uma solução que simplifique e dê agilidade ao processo de formação de grupos de alunos.

## Problema

As ferramentas usadas até o momento para cumprir essa tarefa, não se mostraram eficazes para os alunos desenvolvedores deste trabalho, não favorecendo o diálogo entre os alunos, nem entre os alunos e os respectivos professores. Assim, o que se busca com este projeto é superar a dificuldade intrínseca à formação de times de trabalho entre alunos, principalmente aqueles matriculados em cursos oferecidos na modalidade EAD.

Com uma aplicação voltada para a formação desses grupos, o processo de fechamento das equipes seria simplificado, de modo a substituir o uso concomitante de diversas soluções para a mesma finalidade, com a finalidade de poupar tempo e energia das pessoas envolvidas nesse processo.

## Objetivos

O objetivo geral deste trabalho é a criação de uma aplicação web que facilite a formação de grupos para a realização de trabalhos acadêmicos, sobretudo em cursos ofertados na modalidade a distância.

Como objetivos específicos, destaca-se a necessidade de que a solução permita:

\*Aos professores, a criação de salas, com temas definidos (para que os alunos apenas se organizem em grupos conforme a disponibilidade de horário ou afinidade pessoal) ou com temas em aberto (para que os alunos possam também sugerir temas para o trabalho a ser entregue);

\*Aos professores, estabelecer um limite máximo de alunos que poderão integrar cada grupo;

\*Aos alunos, sugerir temas para o trabalho a ser entregue, quando for o caso, e sugerir dias e horários para os encontros periódicos;

\*Aos alunos e aos professores, comentar nas sugestões apresentadas, seja para tentar conciliar os horários sugeridos, seja para debater o nível de complexidade da sugestão;

\*Aos alunos, aderir às ideais feitas por colegas, até o limite de adesões estabelecido pelo professor, quando o grupo seria fechado para novas adesões;

\*Aos alunos, abandonar a adesão à ideia, quando o grupo seria novamente aberto.

\*Aos professores, confirmar a formação do grupo.

## Justificativa

A empresa [Qatalog](https://qatalog.com/) e a [Cornell University](https://www.cornell.edu/) realizaram conjuntamente, no ano de 2021, um [estudo](https://assets.qatalog.com/language.work/qatalog-2021-workgeist-report.pdf) sobre **gerenciamento, acesso, compartilhamento e criação** de informação (MASC, do inglês _management, access, sharing and creation_) em um ambiente de trabalho baseado em software, no qual profissionais trabalham em equipes distribuídas.

O grupo de pesquisa aplicou três questionários com 1.000 participantes cada para recolher dados, em 31 de Março de 2021. Os participantes estavam sediados nos EUA e no Reino Unido, trabalhando remotamente e familiarizados com aplicações de software moderno no local de trabalho.

Entre outros pontos, a pesquisa revelou que os softwares têm dificultado o foco e o alinhamento entre as equipes envolvidas em projetos criativos. Em **43%** dos respondentes declararam gastar tempo excessivo alternando em diferentes ferramentas on-line. Ainda que a maior parte das pessoas (**59%**) afirme haver um lugar central para todas as informações relacionadas ao trabalho e, também, que **82%** declarem estar trabalhando com ferramentas projetadas para melhorar a conectividade, **54%** ainda pensam que essas soluções de software tornam mais difícil encontrar informações. Segundo a pesquisa, as pessoas estão perdendo tempo vasculhando canais de mensagens, navegando em painéis de gerenciamento de projetos e cavando através de sistemas de armazenamento em nuvem. Eles gastam cerca de **20%** de seu típico dia de trabalho fazendo isso; um tempo que poderia ser despendido fazendo um trabalho focado como projetar um novo produto ou obtendo _feedback_ de usuários.

Levando em consideração os dados coletados pela pesquisa, juntamente com a dificuldade que os envolvidos neste projeto tiveram na formação de grupos ou na proposição de temas, o desenvolvimento de uma aplicação que aprimore o processo de formação de grupos e a interação entre essas pessoas é fundamental para a melhoria do aprendizado e da gestão de tempo dos alunos e professores.

## Público-Alvo

Professores e alunos que precisam gerenciar ou participar de grupos de trabalho acadêmicos, principalmente nos cursos ofertados na modalidade a distância.





Personas
As personas levantadas durante o processo de entendimento do problema são
apresentadas na Figuras que se seguem.
HADASSA VIEIRA
Idade: 18 anos.
Ocupação: Acadêmica
do primeiro período no
curso de análise e
desenvolvimento de
sistemas, acabou de
sair do ensino médio.

Aplicativos:
● Instagram;
● Pinterest;
● WhatsApp;
● Twitter;
● Google Docs.

Motivações:
● Morar fora
do seu país;
● Ser uma boa
profissional;
● Atuar na
área de TI.
Frustrações:

● Possui TDAH;
● Insegurança;
sobre sua nova
jornada;
● Miopia e
astigmatismo.
História, Hobbies:

● Acabou de se formar no ensino
médio e precisa trabalhar e
estudar, optou pelo ensino EAD,
pois isso facilitaria sua vida.
● Aprender idiomas;
● Tocar violão;
● Tocar flauta;
● Jogar videogame.
6

SARA MATISYAHU
Idade: 28 anos.
Ocupação: Formada em
Letras, resolveu mudar de
profissão e ingressar na área
de TI.

Aplicativos:
● Instagram;
● WhatsApp;
● Twitter;
● Kindle;
● LinkedIn;
● Bancos Digitais.

Motivações:
● Ganhar mais
dinheiro;
● Trabalhar full
time em
home office;
● Viajar o
mundo;
● Ter mais
recursos.

Frustrações:
● Está fazendo
transição de carreira e
possui dificuldades
com desenvolvimento
de sistemas;
● Tempo limitado para
estudar;
● Dificuldades com as
plataformas EAD.

História, Hobbies:
● Sara trabalhou como
professora durante 4 anos e
resolveu mudar de carreira
depois que teve seu
primeiro filho, como possui
tempo limitado para si, ela
resolveu ingressar num
ensino EAD para facilitar em
sua vida doméstica e
acadêmica.
● Tempo de qualidade com o
filho;
● Leitura;
● Dança;
● Assistir séries.

MARIA JATOBÁ
Idade: 59 anos.
Ocupação: Professora de
inglês, atuando na
modalidade EAD.

Aplicativos:
● WhatsApp;
● Amazon Prime;
● Facebook;
● Spotify;
● YouTube.

Motivações:
● Levar ensino a
mais pessoas;
● Conseguir
entregar um bom
desempenho nas
aulas;
● Ser um exemplo
de profissional;
● Vencer

Frustrações:
● Lidar com a
modalidade EAD em
plataformas como a
planilha Excel;
● Medo de não
conseguir se conectar
com os alunos da
forma que gostaria;
● Falta de auxílio

História, Hobbies:
● Socorro é formada em
Letras - Inglês e é
docente da língua
estrangeira há mais de
20 anos, sempre
ministrou suas aulas de
forma presencial, mas
com o advento da
pandemia, foi forçada a
7
obstáculos. durante a navegação;
● Excesso de
informações e
ferramentas de difícil
compreensão;
● Problemas de vista.
migrar para o ensino à
distância, tendo que se
adaptar aos meios
digitais, enfrentou
bastante dificuldade na
hora do planejamento
de turmas e projetos.
● Ir a concertos de ópera;
● Peças teatrais;
● Ir à praia;
● Traduzir livros.

 HEITOR DA SILVA
Idade: 43 anos.
Ocupação: Professor de
Sistemas de Informação, ministra
cursos online e orienta alunos em
projeto de pesquisa.
Aplicativos:
● Youtube
● WhatsApp
● Discord
● Steam
● Teams
● Canvas
● Telegram
Motivações:
● Continuar
atuando na sua
área e contribuir
de forma
significante;
● Otimizar apps e
facilitar o uso de
aplicações
trazendo mais
acessibilidade;
● Criar uma
aplicação que
atenda toda
diversidade de
pessoas.
Frustrações:
● Lentidão no carregamento
de aplicações web;
● Problemas com otimização
de dados;
● Falta de botões grandes.
História, Hobbies:
● Heitor sempre gostou
de tecnologia e de
inclusão, ele sempre
estudou sobre
computação, desde
criança tinha o
interesse de fazer
algo que ajudasse as
pessoas a ter uma
melhor experiência.
● Jogos eletrônicos;
● Jogos em AR e VR;
● Passar tempo de
qualidade com os
filhos;
● Dar aulas.
Histórias de usuários
A partir da compreensão do dia a dia das personas identificadas para o projeto,
foram registradas as seguintes histórias de usuários.
8

Eu como... [PERSONA]
quero/desejo...[O QUE]… para ...[POR QUE]

HADASSA VIEIRA
Alternar a exibição da
aplicação para o modo
noturno.
Minimizar o
desconforto durante a
navegação.

HEITOR DA SILVA
Inserir texto alternativo
nos campos em que
houver imagens.
Atender pessoas com
deficiência visual.

 MARIA JATOBÁ
Usar a aplicação em
dispositivos diferentes.
Poder interagir com os
colegas mesmo
quando estiver
distante de um
computador de mesa.

HADASSA VIEIRA
Apresente os
grupos/trabalhos em
cards com diferentes
cores, e eles se
organizarem de forma
a ter melhor
entendimento.
Para facilitar
identificação de
grupos ainda vagos e
saber qual é o status
de cada um deles.

HEITOR DA SILVA
Interface simples e
intuitiva.
Tornar a experiência
mais simples,
agradável e eficiente.

HEITOR DA SILVA
Criar um ambiente em
que os alunos
possam, sozinhos, se
organizar em grupos.
Despender tempo e
energia nas tarefas
relacionadas à
docência.

SARA MATISYAHU
Ingressar rapidamente
em um grupo de
trabalho.
Poder concentrar o
tempo disponível após
a jornada de trabalho
nos estudos, não em
repetidas reuniões
para a formação de
grupos.

HADASSA VIEIRA
Interagir com os
colegas e com o
professor antes de
ingressar em um
grupo.
Entender melhor as
ideias apresentadas e
ver com quais delas
tenho mais afinidade. 
