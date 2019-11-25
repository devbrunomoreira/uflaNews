# uflaNews
Trabalho da disciplina Modelagem e Implementação de Software (GCC132) ministrado pelo professor Paulo Afonso no semestre 2019/2.

O Objetivo deste projeto é desenvolver um aplicativo mobile para disponibilizar boletins eletrônicos, publicados por departamentos/entidades da UFLA, que serão apresentados no aplicativo em formato de feed.

Utilizaremos Ionic para o desenvolvimento do aplicativo.

Motivações: Muitas vezes as notícias geradas pelas entidades da UFLA não chegam ao seu público alvo. Com o aplicativo, os usuários poderão assinar o feed das entidades que consideram interessantes, e receberão notificações push sobre novidades publicadas.

# Manual de instalação
 - clonar o repositório
 - rodar o comando 
 > npm install -g ionic cordova json-server
 - entrar na pasta do projeto
 - num terminal, rodar os comandos
 > npm install
 
 (se necessário, rodar "npm audit fix")
 
 > ionic serve
 
 - em outro terminal, rodar o comando
 > cd api
 
 > npm install
 
 (se necessário, rodar "npm audit fix")
 
 > npm run start-auth
 
 - Acessar a rota no navegador: http://localhost:8100/login

 - Após realizar um cadastro, parar o terminal onde está rodando o comando "npm run start-auth" e rodar novamente (ainda estamos com um problema pois o cadastro só é reconhecido após restart do servidor).
 - Ao acessar o login após restart no servidor, entra normalmente no sistema

# Participantes

- Bruno Jahel
- Bruno Moreira
- Guilherme Teixera
- Gustavo Costa
- Gustavo Reis
