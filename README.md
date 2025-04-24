# API-cibersegura

API Utilitária de Cibersegurança
API com funcionalidades simples e úteis voltadas à segurança de dados, como geração de senhas seguras, criptografia de texto e simulação de vazamentos públicos de dados.

Endpoints disponíveis
1. GET /generate-password
Gera uma senha segura contendo letras, números e caracteres especiais.

Parâmetro (query): length (opcional) – número de caracteres da senha (default: 12)

Exemplo:
/generate-password?length=16
Resposta:

json
Copiar
Editar
{ "password": "A!d9kL@5zX3v#2Ty" }
2. GET /encrypt-text
Criptografa um texto em SHA-256 e também em Base64.

Parâmetro (query): text (obrigatório) – texto a ser criptografado

Exemplo:
/encrypt-text?text=senha123
Resposta:

json
Copiar
Editar
{
  "original": "senha123",
  "sha256": "ef92b778ba... (hash longo)",
  "base64": "c2VuaGExMjM="
}
3. GET /data-breach-alerts
Retorna uma lista simulada de vazamentos públicos de dados.

Exemplo:
/data-breach-alerts
Resposta:

json
Copiar
Editar
{
  "breaches": [
    {
      "empresa": "Facebook",
      "data": "2021-04-03",
      "dadosVazados": "Nomes, e-mails, números de telefone"
    }
  ]
}
4. GET /decode-base64
(Extra) Decodifica um texto em Base64.

Parâmetro (query): text (obrigatório) – texto codificado em Base64

Exemplo:
/decode-base64?text=c2VuaGExMjM=
Resposta:

json
Copiar
Editar
{
  "original": "c2VuaGExMjM=",
  "decoded": "senha123"
}
Tecnologias utilizadas
Node.js

Express.js

Módulo crypto do Node

Modularização ES6

Dados simulados em JSON

Como rodar o projeto localmente
bash
Copiar
Editar
git clone https://github.com/seu-usuario/api-cibersegura
cd api-cibersegura
npm install
npm start
Acesse: http://localhost:3000

Autora
Brenda Louizi
Desenvolvedora back-end em formação | Apaixonada por segurança de dados
LinkedIn

