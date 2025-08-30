# Dev Portfolio (React + Vite)

## Rodar local
```bash
npm install
npm run dev
```

## Configurar EmailJS (opção sem backend)
- Crie conta em https://www.emailjs.com/
- Pegue SERVICE_ID, TEMPLATE_ID e PUBLIC_KEY
- Edite `src/components/ContactForm.jsx` e substitua:
  - SEU_SERVICE_ID
  - SEU_TEMPLATE_ID
  - SEU_PUBLIC_KEY

## Deploy na Vercel
- Importe o repositório na Vercel
- Build: padrão do Vite
- Output: `dist`

## Deploy no GitHub Pages
- Instale `gh-pages` (opcional) e configure `homepage`/scripts conforme suas preferências.
