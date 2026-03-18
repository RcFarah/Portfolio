# 🚀 Portfólio Pessoal | RcFarah

Um portfólio web moderno e responsivo, desenvolvido do zero para apresentar os meus projetos, competências técnicas e atualizações. O website funciona como uma *Single Page Application* (SPA), oferecendo uma navegação fluida entre as secções sem necessitar de recarregar a página.

## 🌟 Funcionalidades

* **Navegação Dinâmica (SPA):** Transições suaves entre as abas "Sobre Mim", "Portfólio", "Novidades" e "Contacto" geridas através de JavaScript puro.
* **Design Responsivo:** Layout flexível construído com CSS Grid e Flexbox, adaptando-se perfeitamente a ecrãs de computador, tablets e telemóveis.
* **Modo Claro/Escuro Dinâmico:** O design deteta e respeita as preferências de tema do sistema operativo do utilizador, alterando automaticamente a paleta de cores e os ícones monocromáticos.
* **Formulário de Contacto Assíncrono:** Integração com a API do *Formspree* para o envio de mensagens. Utiliza requisições HTTP via código para não redirecionar o utilizador, exibindo notificações flutuantes (*Toast Notifications*) de sucesso ou erro diretamente no ecrã.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e organização do conteúdo.
* **CSS3:** Estilização avançada, uso de variáveis, animações (`transform`, `transition`) e *media queries* para responsividade.
* **JavaScript (Vanilla):** Manipulação do DOM, interatividade das abas e integração assíncrona (`fetch` API) para a submissão do formulário.
* **Devicon:** Biblioteca externa para a importação de ícones oficiais e adaptáveis das linguagens de programação e ferramentas.

## 📂 Estrutura de Ficheiros

```text
/
├── index.html       # Estrutura principal, formulário e conteúdo das abas
├── css/
│   └── style.css    # Estilização global, layout grid e regras de media queries
├── js/
│   └── script.js    # Lógica de alternância de abas e controlo do Toast Notification
└── imagens/         # Fotografia de perfil e recursos gráficos
```
## 🚀 Como Executar Localmente

Como o projeto é 100% *Front-end* estático (sem exigência de um servidor back-end), a visualização é imediata e muito simples:

1. Clone este repositório para a sua máquina:
   ```bash
   git clone [https://github.com/RcFarah/NOME_DO_SEU_REPOSITORIO.git](https://github.com/RcFarah/NOME_DO_SEU_REPOSITORIO.git)
   ```
2. Acesse a pasta do projeto através do terminal:
   ```bash
   cd NOME_DO_SEU_REPOSITORIO
   ```
3. Abra o arquivo index.html diretamente no seu navegador de preferência.

*Dica:* Para uma melhor experiência durante o desenvolvimento e edições futuras, recomendo utilizar a extensão **Live Server** no VS Code, que atualiza a página automaticamente a cada vez que o código é salvo.

## 🌐 Deploy (Hospedagem)

O projeto está otimizado para integração e entrega contínuas (CI/CD). Ele pode ser hospedado de forma gratuita e rápida conectando este repositório a plataformas modernas como **Vercel** ou **GitHub Pages**. 

Com essa configuração, qualquer nova alteração feita no código e enviada via `git push` para o GitHub será processada e refletida automaticamente no site público em questão de segundos.

## 📬 Contato e Redes

Desenvolvido por **Rodrigo Corrêa de Sá Farah**.

Sinta-se à vontade para entrar em contato ou acompanhar meus novos projetos nas redes abaixo:

* **LinkedIn:** [Rodrigo Corrêa](https://linkedin.com/in/rcfarah)
* **GitHub:** [RcFarah](https://github.com/RcFarah)