<div align="center">

# BeWear

![Banner da loja](public/banner-01.png)  

Aplicação web de e-commerce voltada para moda masculina, desenvolvida para simular uma loja online completa, moderna e funcional.  
O foco principal foi criar uma experiência de compra simples, fluida e acessível em qualquer dispositivo.  

</div>  

---

<div align="center">

## 🎯 Propósito do Projeto  

</div>

A ideia central foi construir uma plataforma de vendas online onde usuários possam:  
- Explorar produtos organizados por categorias  
- Adicionar e remover itens do carrinho  
- Realizar pedidos de forma prática e segura  
- Acompanhar o status das compras  

Além da funcionalidade, busquei aplicar boas práticas de desenvolvimento e tecnologias atuais para oferecer um projeto bem estruturado.  

---

<div align="center">

## ⚙️ Funcionalidades Implementadas  

</div>

- 📂 **Catálogo de Produtos** com filtros e categorias  
- 🛒 **Carrinho Persistente** que mantém os itens mesmo após recarregar a página  
- 💳 **Integração com Stripe** para simular pagamentos  
- 🔐 **Sistema de Autenticação** com cadastro e login  
- 📦 **Gestão de Pedidos** com histórico de compras  
- 📱 **Layout Responsivo** adaptado a desktop e mobile  
- 🔍 **Recomendações de Produtos** para uma navegação mais interativa  

---

<div align="center">

## 🖼️ Demonstração  

![Preview do site](public/banner-02.png)  

</div>  

---

<div align="center">

## 🛠️ Tecnologias  

</div>

**Frontend**  
- ⚛️ Next.js 15 + React 19  
- 🔷 TypeScript  
- 🎨 Tailwind CSS  
- 🧩 Radix UI / shadcn-ui  

**Backend**  
- 🔄 Next.js API Routes  
- 🗄️ Drizzle ORM  
- 🐘 PostgreSQL  
- 🔐 Better Auth  
- 💰 Stripe  
- 🔄 TanStack Query  

---

<div align="center">

## 🚀 Como Rodar o Projeto  

</div>

### Pré-requisitos  
- Node.js 18+  
- PostgreSQL instalado  
- Conta no Stripe (para simular pagamentos)  

### Passos  

```bash
# Clone este repositório
git clone https://github.com/wmsalves/bewear.git
cd bewear

# Configure o arquivo .env com suas chaves
# Instale as dependências
npm install

# Configure o banco de dados
npm run db:generate
npm run db:push
npm run db:seed

# Execute o servidor de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)  

---

<div align="center">

## 📂 Estrutura do Código  

</div>

```
src/
├── app/               # App Router
│   ├── api/           # Rotas da API
│   ├── auth/          # Autenticação
│   ├── cart/          # Carrinho
│   ├── checkout/      # Fluxo de pagamento
│   ├── orders/        # Histórico de pedidos
│   └── products/      # Detalhes de produtos
├── components/        # Componentes reutilizáveis
├── db/                # Configurações do banco de dados
├── hooks/             # Hooks personalizados
├── lib/               # Utilitários
└── providers/         # Providers de contexto
```

---

<div align="center">

## 📈 Principais Aprendizados  

</div>

Durante a construção do projeto, aprimorei conhecimentos em:  
- 🔄 **Gerenciamento de Estado** com React Query  
- 📦 **Integração entre Frontend e Backend** via API Routes  
- 📱 **Responsividade** aplicada a diferentes tamanhos de tela  
- 🔐 **Fluxo de Autenticação** com tokens seguros  
- 💳 **Pagamentos com Stripe** em ambiente de testes  

---

<div align="center">

## ☁️ Deploy  

</div>

O projeto pode ser facilmente hospedado na [Vercel](https://vercel.com), aproveitando a integração direta com o Next.js.  

---

<div align="center">

## 📚 Referências  

</div>

- [Next.js Documentation](https://nextjs.org/docs)  
- [Stripe Docs](https://stripe.com/docs)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [TanStack Query](https://tanstack.com/query)  
- [Drizzle ORM](https://orm.drizzle.team/)  

---

<div align="center">

## 📜 Licença  

Este projeto está sob a licença MIT.  

</div>
