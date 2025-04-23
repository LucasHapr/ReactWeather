# WeatherApp

Um aplicativo web simples de previsão do tempo, construído com [Vite](https://vitejs.dev/) e React, que consome a **WeatherAPI.com** no plano gratuito.

---

## 📖 Descrição

Este projeto exibe o clima atual e a previsão para os próximos dias, usando a **WeatherAPI.com** (plano **free tier**).  
Inclui informações de temperatura, condição meteorológica, umidade, vento e ícones ilustrativos.

---

## ⚙️ Tecnologias

- Vite  
- React  
- Fetch API  

---

## 🚀 Instalação

1. **Clone o repositório:**
    ~~~bash
    git clone https://github.com/LucasHapr/ReactWeather
    cd ReactWeather
    ~~~

2. **Instale as dependências:**
    ~~~bash
    npm install
    # ou
    yarn
    ~~~

3. **Configure as variáveis de ambiente:**

    Crie um arquivo `.env.local` na raiz do projeto com:

    ~~~dotenv
    VITE_API_URL='https://api.weatherapi.com/v1'
    VITE_API_KEY='SUA_API_KEY'
    VITE_ICON_URL='https://cdn.weatherapi.com/weather/64x64'
    ~~~

    > **Importante:** Não comite este arquivo no sistema de versionamento. Adicione-o ao seu `.gitignore`.

4. **Inicie o servidor de desenvolvimento:**
    ~~~bash
    npm run dev
    # ou
    yarn dev
    ~~~

5. **Abra em seu navegador em:** `http://localhost:5173`

---

## 🛠️ Scripts Úteis

| Comando           | Descrição                                |
|-------------------|------------------------------------------|
| `npm run dev`     | Inicia o servidor de desenvolvimento     |
| `npm run build`   | Gera o build de produção                 |
| `npm run preview` | Visualiza o build de produção localmente |

---
