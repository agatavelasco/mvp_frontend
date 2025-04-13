# ✅ MVP To-do List

Uma aplicação simples e elegante para **criação e organização de tarefas diárias**.  
Este projeto foi idealizado para demonstrar os conhecimentos práticos exigidos na avaliação do MVP, e também nasceu de uma **necessidade pessoal**: listar tarefas de forma rápida e objetiva para organização, planejamento e execução.

A aplicação permite:
- Criar tarefas
- Visualizá-las em lista
- Marcar como **concluídas**
- Deletar com **confirmação personalizada**

---

## ✨ Tecnologias utilizadas

- **Frontend**: HTML, CSS e JavaScript Puro (SPA)
- **Backend**: Python com Flask
- **Banco de dados**: SQLite
- **Documentação da API**: Swagger (Flasgger)
- **Hospedagem local**: `localhost:5000`

---

## ⚙️ Instalação e execução

Siga os passos abaixo para executar o projeto em sua máquina local:

### 🐍 Backend (API - Flask)

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/mvp-todo-list.git
cd mvp-todo-list
```

2. **Crie um ambiente virtual (opcional, mas recomendado):**

```bash
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
```

3. **Instale as dependências do backend:**

```bash
pip install flask flask_sqlalchemy flasgger flask_cors
```

4. **Execute o servidor:**

```bash
python app.py
```

A API estará disponível em: [http://localhost:5000](http://localhost:5000)  
A documentação Swagger pode ser acessada em: [http://localhost:5000/swagger/](http://localhost:5000/swagger/)

---

### 🌐 Frontend (SPA)

1. **Acesse a pasta onde está o `index.html`**
2. Abra com Live Server (VS Code) ou direto no navegador:

```bash
# Exemplo com Python 3
python -m http.server
```

---

## 🧪 Funcionalidades implementadas

- [x] Criar tarefas com até 50 caracteres
- [x] Listar tarefas
- [x] Marcar/desmarcar como concluída
- [x] Deletar tarefa com modal de confirmação
- [x] Ícones visuais para indicar o status (⌛ / 🎉)
- [x] Interface responsiva e moderna
- [x] Documentação automática com Swagger

---

## 🗂 Estrutura do projeto

```
│   ├── index.html         # SPA frontend
│   ├── styles.css         # Estilização
│   └── script.js          # Lógica JS
└── README.md
```

---

## 💡 Motivação

Este projeto foi desenvolvido com dois objetivos:
1. **Aplicar os conhecimentos adquiridos** ao longo do estudo e preparação para o MVP;
2. **Criar uma solução real para organização pessoal**, simples, funcional e agradável visualmente.

---

## 🎨 Protótipo do Figma

https://www.figma.com/design/sDIkyLS7AuRQqeFB3z3QzC/MVP-To-do-list?node-id=0-1&p=f&t=Yur27hxBA4gIRF91-0
