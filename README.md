# 🚀 Digitaliza - Menú Digital para Restaurantes

Digitaliza es una plataforma mobile-first que permite a cualquier negocio crear su menú digital en minutos. Diseño elegante, gestión simple, resultados profesionales.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/founderjourney/digitaliza-platfom)

---

## ✨ Características Principales

### 🎨 Para tus Clientes
- **Menú Digital Interactivo**: Navega por categorías, ve fotos, precios actualizados
- **Código QR**: Imprime y coloca en tus mesas - acceso instantáneo
- **WhatsApp Integrado**: Reservas y pedidos directos desde el menú
- **Responsive Design**: Perfecto en cualquier dispositivo
- **Temas Personalizados**: Japonés, Italiano, Mexicano, Cafetería, General

### 🛠️ Panel de Administración

#### Plan Mensual ($20-50k/mes)
- ✅ Página web personalizada
- ✅ Menú digital ilimitado
- ✅ Código QR personalizado
- ✅ Cambios y actualizaciones
- ✅ Soporte vía WhatsApp
- ✅ Enlaces personalizados

#### Plan Lifetime ($497,000 pesos - Pago único)
- ✅ **Todo lo del plan mensual**
- ✅ **Panel de autogestión completo:**
  - 📋 Gestión de menús (añadir, editar, eliminar platos)
  - 📅 Gestión de reservas (visualizar, exportar CSV/TXT)
  - 🔗 Gestión de enlaces (añadir, editar, eliminar)
  - 📊 Estadísticas y analytics
  - 🎨 Personalización de temas
  - 📸 Subida de imágenes
- ✅ **Soporte prioritario 24/7**
- ✅ **Sin mensualidades - para siempre**

---

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (React Server Components)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **Base de Datos**: PostgreSQL (Neon) *[Plan Lifetime]*
- **Despliegue**: Vercel
- **Analytics**: Vercel Analytics

---

## 🚀 Inicio Rápido

### Para Restaurantes (Sin código)

1. **Regístrate en línea:**
   ```
   https://tu-dominio.vercel.app/register
   ```

2. **Llena el formulario:**
   - Nombre del restaurante
   - Contacto (teléfono, WhatsApp)
   - Ubicación y horarios
   - Tipo de cocina (template)

3. **Recibe tus credenciales:**
   - En 24 horas recibirás por WhatsApp:
   - Link de tu menú digital
   - Código QR para imprimir
   - Acceso al panel (según tu plan)

4. **¡Empieza a vender!**
   - Comparte el link con tus clientes
   - Coloca el QR en tus mesas
   - Recibe pedidos y reservas por WhatsApp

---

## 💻 Para Desarrolladores

### Desarrollo Local

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/founderjourney/digitaliza-platfom.git
   cd digitaliza-platfom
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**

   Crea un archivo `.env.local`:
   ```env
   # Base de Datos (opcional para desarrollo)
   DATABASE_URL="postgresql://user:password@host/dbname"

   # App Config
   NEXT_PUBLIC_SITE_URL="http://localhost:3000"
   NEXT_PUBLIC_APP_NAME="Digitaliza"

   # WhatsApp para registros (cambia por tu número)
   ADMIN_WHATSAPP="+573146414247"
   ```

4. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

   Abre [http://localhost:3000](http://localhost:3000)

### Deployment en Vercel

1. **Click en "Deploy with Vercel"** (botón arriba)

2. **Configura las variables de entorno:**
   - `NEXT_PUBLIC_SITE_URL` - Tu dominio de Vercel
   - `NEXT_PUBLIC_APP_NAME` - Nombre de tu app
   - `ADMIN_WHATSAPP` - Tu número de WhatsApp para recibir registros

3. **Deploy automático:**
   - Push a `master` → deploy automático
   - Vercel maneja todo el resto

---

## 🎯 Estructura del Proyecto

```
digitaliza/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── register/             # Formulario de registro
│   │   ├── demo/                 # Demos de templates
│   │   └── (admin)/[slug]/       # Panel de admin (Lifetime)
│   ├── components/
│   │   ├── landing/              # Componentes del landing
│   │   └── ...
│   └── types/                    # TypeScript types
├── public/
│   └── images/                   # Assets estáticos
├── PROCESO-INTERNO.md            # 📋 Proceso manual del equipo
└── README.md                     # Este archivo
```

---

## 📋 Funcionalidades Detalladas

### Gestión de Menús
- ✅ Añadir platos con nombre, precio, descripción, imagen
- ✅ Organizar por categorías (Entrantes, Principales, Postres, Bebidas)
- ✅ Marcar platos como no disponibles
- ✅ Editar precios en tiempo real *(Lifetime)*
- ✅ Reordenar platos por drag & drop *(Lifetime)*

### Gestión de Reservas
- ✅ Recibir reservas por WhatsApp
- ✅ Ver lista completa de reservas *(Lifetime)*
- ✅ Filtrar por fecha/estado *(Lifetime)*
- ✅ Exportar a CSV/TXT *(Lifetime)*
- ✅ Notificaciones push *(Lifetime)*

### Gestión de Enlaces
- ✅ Enlaces a redes sociales
- ✅ WhatsApp para pedidos
- ✅ Google Maps (ubicación)
- ✅ Enlaces personalizados *(Lifetime)*
- ✅ Reordenar enlaces *(Lifetime)*

---

## 🎨 Templates Disponibles

### 🍜 Japonés
Colores zen, tipografía minimalista, ideal para sushi, ramen

### 🍝 Italiano
Calidez mediterránea, fuentes elegantes, perfecto para pasta, pizza

### 🌮 Mexicano
Colores vibrantes, alegre, ideal para tacos, cantinas

### ☕ Cafetería
Minimalista, cálido, perfecto para café, repostería

### 🍽️ General
Versátil, personalizable, funciona para cualquier negocio

---

## 💰 Precios

| Característica | Plan Mensual | Plan Lifetime |
|----------------|-------------|---------------|
| **Precio** | $20-50k/mes | **$497k pago único** |
| Página web personalizada | ✅ | ✅ |
| Menú digital | ✅ | ✅ |
| Código QR | ✅ | ✅ |
| WhatsApp integrado | ✅ | ✅ |
| Cambios vía soporte | ✅ | ✅ |
| **Panel de autogestión** | ❌ | ✅ |
| **Editar menús tú mismo** | ❌ | ✅ |
| **Gestión de reservas** | ❌ | ✅ |
| **Exportar datos** | ❌ | ✅ |
| **Soporte prioritario** | ❌ | ✅ |
| **Sin mensualidades** | ❌ | ✅ **Para siempre** |

---

## 🔒 Seguridad

- ✅ HTTPS por defecto (Vercel)
- ✅ Autenticación segura *(Lifetime)*
- ✅ Validación de datos en frontend y backend
- ✅ Rate limiting en APIs
- ✅ Sanitización de inputs

---

## 📈 Roadmap

### ✅ Fase 1 - MVP (Actual)
- [x] Landing page
- [x] Formulario de registro
- [x] Templates de menú
- [x] Código QR
- [x] WhatsApp integration

### 🚧 Fase 2 - Panel Lifetime (En desarrollo)
- [ ] Panel de administración completo
- [ ] CRUD de menús/reservas/enlaces
- [ ] Exportación de datos
- [ ] Analytics básico

### 🔮 Fase 3 - Escalado (Q2 2025)
- [ ] Plan mensual con panel limitado
- [ ] Multi-idioma (ES/EN)
- [ ] Integración con sistemas de pago
- [ ] App móvil nativa

---

## 🤝 Contribuir

Este es un proyecto privado, pero aceptamos sugerencias:

1. Abre un [Issue](https://github.com/founderjourney/digitaliza-platfom/issues)
2. Describe tu idea o bug
3. Espera feedback del equipo

---

## 📞 Soporte

- **WhatsApp:** +57 314 6414247
- **Email:** soporte@digitaliza.com
- **Documentación:** [Ver docs](./PROCESO-INTERNO.md) *(equipo interno)*

---

## 📄 Licencia

Copyright © 2025 Digitaliza
Todos los derechos reservados.

---

## 🙏 Agradecimientos

Construido con ❤️ por el equipo de Digitaliza

Powered by:
- [Next.js](https://nextjs.org/)
- [Vercel](https://vercel.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

**¿Listo para digitalizar tu negocio? 🚀**

[👉 Regístrate ahora](https://tu-dominio.vercel.app/register)
