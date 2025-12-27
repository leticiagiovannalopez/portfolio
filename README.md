# Portfolio - Letícia Lopez

Portfolio profissional desenvolvido em React com design dark mode e tema roxo.

## 🚀 Tecnologias

- React 18
- CSS3 (Glassmorphism)
- React Icons
- Google Fonts (Inter)

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm start

# Build para produção
npm run build
```

## 🎨 Estrutura

```
src/
├── components/
│   ├── Hero.js          # Seção inicial com apresentação
│   ├── About.js         # Quem é Letícia
│   ├── Skills.js        # Stack de tecnologias
│   ├── Projects.js      # Projetos em destaque
│   ├── Experience.js    # Experiência & Formação
│   ├── Contact.js       # Contato
│   └── Footer.js        # Rodapé
├── App.js
├── App.css
└── index.js
```

## 🖼️ Adicionar Foto

Para adicionar sua foto no hero section:

1. Coloque a imagem em `public/images/`
2. Edite `src/components/Hero.js`:

```jsx
<div className="image-placeholder">
  <div className="purple-glow"></div>
  <img src="/images/sua-foto.jpg" alt="Letícia Lopez" />
</div>
```

3. Adicione o CSS em `Hero.css`:

```css
.image-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
}
```

## 🌐 Deploy

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta build/ para netlify.com/drop
```

### GitHub Pages
```bash
npm install --save gh-pages

# Adicione no package.json:
"homepage": "https://seu-usuario.github.io/portfolio",
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Deploy
npm run deploy
```

## 📝 Personalização

### Cores
Edite as variáveis CSS em `App.css`:

```css
:root {
  --purple-primary: #8B5CF6;
  --purple-secondary: #A78BFA;
  --purple-light: #C4B5FD;
}
```

### Conteúdo
Edite os componentes em `src/components/` para atualizar informações, projetos e experiências.

## 📄 Licença

Desenvolvido com 💜 por Letícia Lopez
