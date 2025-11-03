# Projeto de Gestão - Implementação de Login e Guards

Este documento descreve a atualização do Projeto de Gestão [cite: 1] para incluir um sistema de autenticação e controle de acesso[cite: 4]. O projeto original, que continha o CRUD de Funcionários e Departamentos[cite: 3], foi aprimorado com rotas públicas e privadas, Guards de autenticação e prevenção de perda de dados.

## Instruções de Execução [cite: 141]

**Requisitos:**
* Backend Spring Boot (CRUD de Departamentos e Funcionários) em execução[cite: 3].
* Node.js e Angular CLI instalados.

**Frontend (Angular):**

1.  **Instalar dependências:**
    ```bash
    # Navegue até a pasta do projeto
    cd projeto-gestao [cite: 58]
    
    # Instale os pacotes do npm
    npm install
    ```

2.  **Executar a aplicação:**
    ```bash
    ng serve -o
    ```
A aplicação será aberta automaticamente no seu navegador em `http://localhost:4200/`.

---

## Descrição do Fluxo de Autenticação [cite: 142]

O sistema implementa um fluxo básico de autenticação [cite: 7] para proteger as rotas de gestão[cite: 8].

### 1. Login
* A rota inicial e única rota pública é `/login`[cite: 37, 43].
* O usuário insere um e-mail (para fins de simulação) [cite: 15] e clica em "Entrar"[cite: 16].
* Ao clicar, um `AuthService` [cite: 78] gera um token mock (simulado) e o armazena no `localStorage` do navegador[cite: 18].
* Após o armazenamento do token, o usuário é redirecionado para a rota `/departamentos`[cite: 19].
* Se um usuário já autenticado (com token no `localStorage`) tentar acessar a rota `/login`, ele será automaticamente redirecionado para a área interna[cite: 20].

### 2. Logout
* Nas rotas privadas (Gestão de Departamentos e Funcionários), um componente `Header` [cite: 22] é exibido[cite: 27].
* O `Header` exibe o e-mail do usuário logado [cite: 23] e um botão "Sair"[cite: 24].
* Ao clicar em "Sair", o `AuthService` é acionado para limpar o token do `localStorage`[cite: 25].
* Imediatamente após a limpeza, o usuário é redirecionado de volta para a página de `/login`[cite: 26].

---

## Explicação dos Guards Utilizados [cite: 143]

Para garantir a segurança e a integridade dos dados durante a navegação, foram implementados dois Guards[cite: 6]:

### 1. `authGuard` (CanActivate) [cite: 29]
* **Objetivo:** Proteger rotas privadas contra acesso não autorizado[cite: 8].
* **Funcionamento:** Este Guard implementa a interface `CanActivate`[cite: 6, 29]. Antes de permitir o acesso a uma rota, ele verifica se existe um token válido no `localStorage`[cite: 30].
* **Ação:** Se o token não existir (usuário não logado), o Guard bloqueia o acesso à rota solicitada e redireciona o usuário para a página de `/login`[cite: 32].
* **Rotas Protegidas:** Todas as rotas de `Departamentos` e `Funcionários` (listagem, formulários de criação e edição) são protegidas por este Guard[cite: 38, 49, 52, 54].

### 2. `unsavedChangesGuard` (CanDeactivate) [cite: 33]
* **Objetivo:** Prevenir que o usuário perca dados não salvos ao sair de um formulário[cite: 9].
* **Funcionamento:** Este Guard implementa a interface `CanDeactivate`[cite: 6, 33]. Ele é aplicado em componentes que contêm formulários, como `FuncionarioFormComponent` e o formulário de Departamento[cite: 34].
* **Ação:** Se o usuário tentar navegar para fora do formulário (clicando em "voltar" no navegador ou em outro link) e o formulário tiver alterações pendentes, o Guard exibirá uma mensagem de confirmação[cite: 35], perguntando se ele deseja realmente sair e descartar as alterações.
* **Rotas Protegidas:** Aplicado nas rotas de formulário, como `funcionarios/novo` [cite: 53] e `funcionarios/:id`.

---

## Histórico de Commits (Exemplo)

O desenvolvimento seguiu a convenção de commits semânticos[cite: 144]:
