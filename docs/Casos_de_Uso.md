# Plano do Site — Núcleo (NPDS)
> Projeto pequeno · versão simplificada

---

## Atores

| Ator | Descrição |
|------|-----------|
| **Visitante** | Qualquer pessoa que acessa o site sem login (estudante, pesquisador externo, interessado) |
| **Administrador** | Membro autorizado que gerencia o conteúdo via painel |

---

## Casos de Uso

### Visitante

| ID | Caso de Uso |
|----|-------------|
| CV-01 | Visualizar página inicial do núcleo |
| CV-02 | Visualizar lista de editais e processos em aberto |
| CV-03 | Baixar o PDF de um edital |
| CV-04 | Visualizar colaboradores agrupados por categoria |
| CV-05 | Visualizar projetos e pesquisas do grupo |
| CV-06 | Acessar repositório ou publicação vinculada a um projeto |

### Administrador

| ID | Caso de Uso |
|----|-------------|
| CA-01 | Fazer login no painel administrativo |
| CA-02 | Editar conteúdo da página inicial |
| CA-03 | Publicar novo edital |
| CA-04 | Editar edital existente |
| CA-05 | Remover edital |
| CA-06 | Adicionar novo colaborador |
| CA-07 | Editar colaborador existente |
| CA-08 | Remover colaborador |
| CA-09 | Cadastrar novo projeto |
| CA-10 | Editar projeto existente |
| CA-11 | Remover projeto |
| CA-12 | Fazer logout do painel |

---

## Histórias de Usuário

### Visitante

---

**CV-01 · Página Inicial**
> Como visitante, quero ver as informações do núcleo na página inicial para entender do que se trata e como entrar em contato.

Critérios de aceitação:
- Exibe nome completo, sigla e descrição do núcleo
- Exibe missão e objetivos
- Exibe e-mail ou informação de contato

---

**CV-02 · Consulta de Editais e Vagas para Bolsistas**
> Como um possível bolsista de graduação, quero acessar uma seção dedicada a editais e vagas ofertadas, para que eu possa ver os requisitos, prazos e me candidatar a uma oportunidade no laboratório.

Critérios de aceitação:
- O site deve conter uma aba "Editais" ou "Processos em Aberto"
- A lista deve mostrar o estado atual do processo: **Aberto**, **Em andamento** ou **Finalizado**
- Deve ser possível baixar o PDF do edital de qualquer processo

---

**CV-03 · Baixar PDF de Edital**
> Como visitante, quero baixar o arquivo PDF de um edital para ler os detalhes completos offline.

Critérios de aceitação:
- Botão de download visível apenas quando o edital tiver PDF anexado
- O arquivo abre ou faz download diretamente ao clicar

---

**CV-04 · Visualização da Página de Colaboradores**
> Como um visitante (pode ser um estudante ou usuário qualquer), quero visualizar uma página com os colaboradores do laboratório de forma fácil e bem organizada, para que eu saiba quem são os professores, alunos e pesquisadores envolvidos no projeto.

Critérios de aceitação:
- A página deve exibir o nome, uma foto e o cargo/função de cada membro
- Deve haver um link para o currículo Lattes ou LinkedIn de cada membro
- Cada membro deve possuir um e-mail de contato atrelado às suas informações
- Os membros devem estar agrupados por categoria (ex.: Professores, Pesquisadores, Alunos)

---

**CV-05 · Consulta dos Projetos e Pesquisas do Grupo**
> Como um aluno, quero ler sobre os projetos em andamento e finalizados do grupo, para que eu possa entender as áreas de atuação, linhas de pesquisa e projetos desenvolvidos do laboratório e descobrir se tenho interesse em participar no futuro.

Critérios de aceitação:
- O site deve conter uma aba "Projetos"
- A lista deve mostrar o estado atual do projeto: **Em andamento** ou **Encerrado**, seu título claro e uma breve descrição
- Cada projeto deve indicar quais colaboradores da equipe fazem parte dele
- Se houver repositórios no GitHub ou publicações associadas ao projeto, deve conter um link direcionando para eles

---

**CV-06 · Acessar Repositório ou Publicação de um Projeto**
> Como visitante, quero acessar o repositório ou publicação vinculada a um projeto para ver o trabalho produzido.

Critérios de aceitação:
- Link visível apenas quando o projeto tiver GitHub ou publicação cadastrada
- Abre em nova aba

---

### Administrador

---

**CA-01 · Login**
> Como administrador, quero fazer login com senha para acessar o painel de gerenciamento.

Critérios de aceitação:
- Campo de senha simples
- Mensagem de erro se a senha estiver incorreta
- Redireciona para o painel após login correto

---

**CA-02 · Editar Página Inicial**
> Como administrador, quero editar os textos da página inicial para manter as informações atualizadas.

Critérios de aceitação:
- Campos editáveis: sigla, nome completo, subtítulo, sobre, missão, contato
- Botão "Salvar" com confirmação visual

---

**CA-03 · Publicar Novo Edital**
> Como administrador, quero publicar um novo edital para informar visitantes sobre oportunidades.

Critérios de aceitação:
- Campos: título, descrição, data, status (Aberto / Em andamento / Finalizado), upload de PDF
- Edital aparece imediatamente na lista pública

---

**CA-04 · Editar Edital**
> Como administrador, quero editar um edital já publicado para corrigir ou atualizar informações.

Critérios de aceitação:
- Todos os campos são editáveis, incluindo troca do PDF e alteração de status
- Alterações refletem na página pública ao salvar

---

**CA-05 · Remover Edital**
> Como administrador, quero remover um edital que não é mais relevante para manter a lista limpa.

Critérios de aceitação:
- Confirmação antes de excluir
- Edital some imediatamente da lista pública

---

**CA-06 · Adicionar Colaborador**
> Como administrador, quero adicionar um novo colaborador para manter a equipe atualizada.

Critérios de aceitação:
- Campos: nome, foto, cargo/função, categoria, e-mail, link Lattes ou LinkedIn
- Colaborador aparece imediatamente na página pública no grupo correto

---

**CA-07 · Editar Colaborador**
> Como administrador, quero editar os dados de um colaborador para corrigir informações.

Critérios de aceitação:
- Todos os campos são editáveis, incluindo foto e categoria
- Alteração reflete na página pública ao salvar

---

**CA-08 · Remover Colaborador**
> Como administrador, quero remover um colaborador que saiu do núcleo.

Critérios de aceitação:
- Confirmação antes de excluir
- Colaborador some imediatamente da lista pública

---

**CA-09 · Cadastrar Novo Projeto**
> Como administrador, quero cadastrar um projeto para que visitantes conheçam as pesquisas do grupo.

Critérios de aceitação:
- Campos: título, descrição, status (Em andamento / Encerrado), colaboradores vinculados, link GitHub (opcional), link de publicação (opcional)
- Projeto aparece imediatamente na aba pública

---

**CA-10 · Editar Projeto**
> Como administrador, quero editar um projeto para manter as informações e status atualizados.

Critérios de aceitação:
- Todos os campos são editáveis, incluindo status e colaboradores
- Alterações refletem na página pública ao salvar

---

**CA-11 · Remover Projeto**
> Como administrador, quero remover um projeto que não deve mais aparecer no site.

Critérios de aceitação:
- Confirmação antes de excluir
- Projeto some imediatamente da lista pública

---

**CA-12 · Logout**
> Como administrador, quero sair do painel para proteger o acesso em computadores compartilhados.

Critérios de aceitação:
- Botão "Sair" visível no painel
- Redireciona para o site público após logout

---

## Páginas do Sistema

| Página | Acesso | Descrição |
|--------|--------|-----------|
| Home | Público | Apresentação do núcleo |
| Editais | Público | Lista de editais com status e download de PDF |
| Colaboradores | Público | Equipe agrupada por categoria |
| Projetos | Público | Projetos com status, equipe e links |
| Admin | Restrito | Painel de gerenciamento completo |

---

## Modelo de Dados (resumido)

**Colaborador:** nome · foto · cargo · categoria · e-mail · Lattes/LinkedIn

**Edital:** título · descrição · data · status · arquivo PDF

**Projeto:** título · descrição · status · colaboradores[] · link GitHub · link publicação