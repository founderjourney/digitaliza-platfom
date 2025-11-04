# 🚀 Digitaliza - Link Aggregator for Businesses

Digitaliza is a mobile-first platform that allows any business to create a simple, elegant, and high-performance link aggregator for their website. It's built with Next.js, Prisma, and TypeScript, and it's optimized for Vercel deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linkangri/linkangri)

---

## ✨ Características Principales

- 🎨 **8 Plantillas Culturales**: Japonesa, Italiana, Mexicana, Café, Barbería, Salón de Uñas, Florería y Spa.
- 📱 **Diseño Mobile-First**: Interfaz optimizada para una experiencia fluida en celulares.
- 💅 **UI/UX Refactorizado**: Espaciado y diseño mejorados para una apariencia más profesional.
- 💬 **Integración con WhatsApp**: Facilita la comunicación para reservas y pedidos.
- 🏗️ **Generador de Códigos QR**: Comparte el menú digital de forma instantánea.
- 🔒 **Panel de Administración Seguro**: Gestiona tu menú (platos, precios, disponibilidad) en tiempo real.

---

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (React)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: PostgreSQL (Neon Tech)
- **ORM**: Prisma
- **Despliegue**: Vercel

---

## 🚀 Despliegue y Desarrollo Local

### Producción (Vercel)
1.  **Click en el botón "Deploy with Vercel"** de arriba.
2.  **Configura las Variables de Entorno** en el panel de Vercel. Necesitarás las credenciales de tu base de datos de Neon Tech.
    ```env
    DATABASE_URL="postgresql://user:password@host:port/dbname?sslmode=require"
    NEXTAUTH_SECRET="your-super-secret-production-key"
    NEXTAUTH_URL="https://your-domain.vercel.app"
    ```

### Desarrollo Local

1.  **Instalar dependencias**
    ```bash
    npm install
    ```

2.  **Configurar la base de datos local**
    - Crea un archivo `.env.local` en la raíz del proyecto.
    - Añade tu connection string de Neon Tech al archivo:
      ```env
      DATABASE_URL="postgresql://user:password@host:port/dbname?sslmode=require"
      ```
    - Genera el cliente de Prisma:
      ```bash
      npx prisma generate
      ```
    - Sincroniza tu base de datos:
      ```bash
      npx prisma db push
      ```

3.  **Iniciar el servidor de desarrollo**
    ```bash
    npm run dev
    ```
La aplicación estará disponible en `http://localhost:3000`.

---

## 🎯 Demos

-   **Japonés**: `/demo/sakura-sushi`
-   **Italiano**: `/demo/nonna-italiana`
-   **Mexicano**: `/demo/mariachi-cantina`
-   **Café**: `/demo/brew-coffee`
-   **Barbería**: `/demo/the-gentleman-barber`
-   **Uñas**: `/demo/nails-art-studio`
-   **Florería**: `/demo/floreria-petalos`
-   **Spa**: `/demo/belleza-spa`