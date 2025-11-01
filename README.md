# 🍜 LinkAngri - Menús Digitales para Restaurantes

Plataforma de gestión de menús digitales optimizada para móviles. Incluye plantillas culturales, integración con WhatsApp y generación de códigos QR.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/linkangri/linkangri)

---

## ✨ Características Principales

- 🎨 **4 Plantillas Culturales**: Japonesa, Italiana, Mexicana y Café.
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
- **Base de Datos**: SQLite sobre **Turso** (Base de datos en el borde, rápida y escalable)
- **ORM**: Prisma
- **Despliegue**: Vercel

---

## 🚀 Despliegue y Desarrollo Local

### Producción (Vercel)
1.  **Click en el botón "Deploy with Vercel"** de arriba.
2.  **Configura las Variables de Entorno** en el panel de Vercel. Necesitarás las credenciales de tu base de datos Turso.
    ```env
    DATABASE_URL="libsql://your-database.turso.io"
    DATABASE_AUTH_TOKEN="your-turso-auth-token"
    NEXTAUTH_SECRET="your-super-secret-production-key"
    NEXTAUTH_URL="https://your-domain.vercel.app"
    ```

### Desarrollo Local
```bash
# 1. Instalar dependencias
npm install

# 2. Configurar la base de datos local
npm run db:generate
npm run db:push

# 3. Iniciar el servidor de desarrollo
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

---

## 🎯 Demos

-   **Japonés**: `/demo/sakura-sushi`
-   **Italiano**: `/demo/nonna-italiana`
-   **Mexicano**: `/demo/mariachi-cantina`
-   **Café**: `/demo/brew-coffee`