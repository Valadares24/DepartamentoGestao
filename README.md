````markdown
# Projeto de Gestão de Funcionários e Departamentos

Este é um projeto Full Stack (Java/Spring Boot + Angular) que implementa um sistema de gestão de recursos humanos.

A aplicação permite o gerenciamento completo (CRUD) de Funcionários e de Departamentos. O principal objetivo desta versão foi introduzir a entidade de Departamentos e estabelecer o relacionamento entre ela e os Funcionários, aplicando regras de negócio essenciais, como a obrigatoriedade de um funcionário pertencer a um departamento e o tratamento de departamentos inativos.

## 🚀 Principais Funcionalidades

### Gestão de Departamentos (Novo Módulo)
* CRUD completo para Departamentos (Criar, Listar, Atualizar, Inativar).
* Validação de **nome único** para departamentos, com retorno de erro (HTTP 409 Conflict) caso haja duplicidade.
* Capacidade de **inativar** um departamento.
* Endpoint específico para listar apenas departamentos **ativos** (usado para seleção em formulários).

### Gestão de Funcionários (Atualizado)
* CRUD completo de Funcionários.
* **Relacionamento Obrigatório:** Um funcionário agora deve, obrigatoriamente, ser vinculado a um departamento no momento do cadastro.
* **Exibição de Departamento:** Todas as listagens de funcionários agora exibem a sigla ou o nome do departamento ao qual ele pertence.
* **Regra de Inativação:** O sistema não permite a alocação de novos funcionários em departamentos que estão "inativos". Funcionários existentes em departamentos inativados são mantidos, com um aviso visual no frontend.

## 🛠️ Tecnologias Utilizadas

O projeto é dividido em duas partes principais:

### Backend
* **Java 17**
* **Spring Boot 3**
    * Spring Web (REST APIs)
    * Spring Data JPA (Persistência de dados)
    * Spring Validation (Validação de DTOs)
* **Banco de Dados:** H2 (para desenvolvimento) / PostgreSQL (para produção)
* **Documentação:** Swagger (OpenAPI 3)

### Frontend
* **Angular 17**
* **TypeScript**
* **PrimeNG 17** (Biblioteca de componentes UI)
* **PrimeFlex** (Utilitários CSS para layout)

## ⚙️ Pré-requisitos

Para executar este projeto localmente, você precisará ter instalado:
* Java JDK 17 ou superior
* Maven 3.8+ (ou usar o Maven Wrapper incluído)
* Node.js 18.13+ (LTS)
* Angular CLI 17+
* Um IDE de sua preferência (IntelliJ, Eclipse, VS Code)

## 🏃‍♂️ Instalação e Execução

Siga os passos abaixo para configurar e executar o projeto.

1.  **Clone o repositório:**
    ```bash
    git clone <URL-DO-SEU-REPOSITORIO>
    cd <NOME-DO-REPOSITORIO>
    ```

2.  **Execute o Backend (Spring Boot):**
    * Navegue até a pasta do backend (ex: `cd backend-api`).
    * Compile e execute o projeto utilizando o Maven Wrapper:
        ```bash
        # No Linux/Mac
        ./mvnw spring-boot:run
        
        # No Windows
        mvnw.cmd spring-boot:run
        ```
    * O servidor backend estará rodando em `http://localhost:8080`.

3.  **Execute o Frontend (Angular):**
    * Em um novo terminal, navegue até a pasta do frontend (ex: `cd frontend-ui`).
    * Instale as dependências do Node.js:
        ```bash
        npm install
        ```
    * Inicie o servidor de desenvolvimento do Angular:
        ```bash
        ng serve -o
        ```
    * A aplicação será aberta automaticamente no seu navegador em `http://localhost:4200`.

## 📚 Documentação da API (Swagger)

A documentação completa da API, incluindo os novos endpoints de Departamentos e o relacionamento com Funcionários, está disponível e é gerada automaticamente pelo Swagger.

Após iniciar o backend, acesse a interface do Swagger UI no seu navegador:

**[http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)**

### Resumo dos Endpoints de Departamento

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/api/departamentos` | Lista todos os departamentos (ativos e inativos) |
| `GET` | `/api/departamentos/ativos` | Lista apenas os departamentos ativos |
| `POST` | `/api/departamentos` | Cria um novo departamento (DTO) |
| `PUT` | `/api/departamentos/{id}` | Atualiza os dados de um departamento (DTO) |
| `PATCH`| `/api/departamentos/{id}/inativar` | Inativa um departamento (altera `ativo = false`) |

## 🎨 Componentes do Frontend

Para suportar o novo módulo, os seguintes componentes foram criados ou atualizados no Angular:

* `departamento-list`: Componente de listagem que utiliza a `p-table` do PrimeNG para exibir departamentos, status (com `p-tag`) e botões de ação (Editar, Inativar).
* `departamento-form`: Formulário reativo para criação e edição de departamentos.
* **Integração (Funcionario-form):** O formulário de Funcionários foi atualizado para incluir um `p-dropdown` que carrega a lista de departamentos ativos, garantindo a seleção obrigatória no cadastro/edição de funcionários.
````
