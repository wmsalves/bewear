<div align="center">

# BeWear

![Banner da loja](public/banner-01.png)  

Web e-commerce application focused on men's fashion, developed to simulate a complete, modern, and functional online store.The main focus was to create a simple, smooth, and accessible shopping experience across all devices. 

</div>  

---

<div align="center">

## 🎯 Project Purpose 

</div>

The main idea was to build an online sales platform where users can:
- Explore products organized by categories  
- Add and remove items from the cart
- Place orders easily and securely
- Track the status of their purchases 

Besides functionality, the project applied best development practices and modern technologies to provide a well-structured application.

---

<div align="center">

## ⚙️ Implemented Features 

</div>

- 📂 **Product Catalog** with filters and categories
- 🛒 **Persistent Cart** that keeps items even after page reload
- 💳 **Stripe Integration** for payment simulation  
- 🔐 **Authentication System** with signup and login 
- 📦 **Order Management** with purchase history 
- 📱 **Responsive Layout** optimized for desktop and mobile
- 🔍 **Product Recommendations** for interactive navigation

---

<div align="center">

## 🖼️ Demo 

![Preview do site](public/banner-02.png)  

</div>  

---

<div align="center">

## 🛠️ Technologies  

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

## 🚀 How to Run the Project  

</div>

### Prerequisites  
- Node.js 18+  
- PostgreSQL installed  
- Stripe account (for payment simulation)

### Steps  

```bash
# Clone this repository
git clone https://github.com/wmsalves/bewear.git
cd bewear

# Configure the .env file with your keys
# Install dependencies
npm install

# Setup the database
npm run db:generate
npm run db:push
npm run db:seed

# Run the development server
npm run dev
```

Access at: [http://localhost:3000](http://localhost:3000)  

---

<div align="center">

## 📂 Code Structure 

</div>

```
src/
├── app/               # App Router
│   ├── api/           # API Routes
│   ├── auth/          # Authentication
│   ├── cart/          # Cart
│   ├── checkout/      # Checkout flow
│   ├── orders/        # Order history
│   └── products/      # Product details
├── components/        # Reusable components
├── db/                # Database configurations
├── hooks/             # Custom hooks
├── lib/               # Utilities
└── providers/         # Context providers
```

---

<div align="center">

## 📈 Key Learnings 

</div>

During the project development, I improved skills in:
- 🔄 **State Management** with React Query
- 📦 **Frontend-Backend Integration** via API Routes
- 📱 **Responsiveness** across different screen sizes 
- 🔐 **Authentication flow** with secure tokens
- 💳 **Stripe Payments** in a test environment 

---

<div align="center">

## ☁️ Deployment  

</div>

The project can be easily hosted on [Vercel](https://vercel.com), leveraging direct integration with Next.js.

---

<div align="center">

## 📚 References  

</div>

- [Next.js Documentation](https://nextjs.org/docs)  
- [Stripe Docs](https://stripe.com/docs)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [TanStack Query](https://tanstack.com/query)  
- [Drizzle ORM](https://orm.drizzle.team/)  

---

<div align="center">

## 📜 License  

This project is licensed under the MIT License. 

</div>
