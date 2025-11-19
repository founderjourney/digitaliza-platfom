# 📋 PROCESO INTERNO - DIGITALIZA
> **Confidencial:** Documento interno del equipo

## 🎯 ESTRATEGIA MVP → LIFETIME

### Fase Actual: **MVP Manual**
- Clientes llenan formulario → nos llega por WhatsApp
- **Nosotros creamos todo manualmente**
- Clientes NO tienen panel de edición (aún)
- Cambios/actualizaciones vía WhatsApp

---

## 📥 PROCESO DE REGISTRO

### 1. Cliente llena formulario
**URL:** `https://tu-dominio.vercel.app/register`

**Datos que recibimos por WhatsApp (+57 314 6414247):**
```
🚀 NUEVO REGISTRO - DIGITALIZA

📋 Datos del Restaurante:
• Nombre: [Nombre del negocio]
• URL Sugerida: digitaliza.com/demo/[slug]
• Template: [Japonés/Italiano/Mexicano/Cafetería/General]

📞 Contacto:
• Teléfono: [Teléfono]
• WhatsApp: [WhatsApp]

📍 Ubicación:
• Dirección: [Dirección]
• Horarios: [Horarios]

📝 Descripción:
[Descripción del negocio]
```

---

## 🛠️ PROCESO DE CREACIÓN MANUAL

### **Paso 1: Crear página del restaurante**

**Opción A: Duplicar demo existente**
```bash
# En tu proyecto local
cd src/app/demo
cp -r sakura-sushi [nuevo-slug]

# Editar src/app/demo/[nuevo-slug]/page.tsx
# Cambiar datos del restaurante
```

**Opción B: Usar generador de páginas** *(recomendado para futuro)*
```bash
npm run create-restaurant -- --name="Nombre" --slug="slug" --theme="japanese"
```

### **Paso 2: Configurar datos del restaurante**

Editar el archivo `src/app/demo/[slug]/page.tsx`:

```typescript
const restaurantData = {
  name: "[Nombre del cliente]",
  slug: "[slug]",
  phone: "[Teléfono]",
  whatsapp: "[WhatsApp]",
  address: "[Dirección]",
  hours: "[Horarios]",
  theme: "japanese", // japanese | italian | mexican | coffee | general
  description: "[Descripción]"
}
```

### **Paso 3: Crear menú inicial (3-5 platos)**

Agregar platos según el template elegido:

```typescript
const menuItems = [
  {
    id: "1",
    name: "Nombre del Plato",
    price: "12€",
    category: "Categoría",
    description: "Descripción del plato",
    imageUrl: "/images/placeholder.jpg", // Opcional
    available: true
  },
  // ... más platos
]
```

**Templates predefinidos:**
- **Japonés:** Sashimi, Makis, Ramen
- **Italiano:** Pasta, Pizza, Postres
- **Mexicano:** Tacos, Guacamole, Bebidas
- **Cafetería:** Café, Cappuccino, Repostería
- **General:** Ensaladas, Hamburguesas, Bebidas

### **Paso 4: Configurar enlaces**

```typescript
const links = [
  {
    id: "1",
    title: "Hacer Reserva",
    url: `https://wa.me/[whatsapp-sin-espacios]?text=Hola,%20quiero%20hacer%20una%20reserva`,
    icon: "whatsapp"
  },
  {
    id: "2",
    title: "Ver Ubicación",
    url: "https://maps.google.com/?q=[dirección-codificada]",
    icon: "location"
  }
]
```

---

## 📤 ENTREGA AL CLIENTE

### **Paso 5: Enviar credenciales por WhatsApp**

**Template de mensaje:**
```
¡Hola [Nombre]! 🎉

Tu menú digital ya está listo en Digitaliza:
👉 https://tu-dominio.vercel.app/demo/[slug]

🔗 Comparte este enlace con tus clientes
📱 Pueden escanear el código QR desde la página

✏️ ¿Necesitas hacer cambios?
Escríbenos por aquí y lo actualizamos en minutos.

📊 Panel de Administración:
Estará disponible según tu plan:
• Plan Mensual: Cambios vía WhatsApp
• Plan Lifetime ($497k): Acceso completo al panel

¡Gracias por confiar en Digitaliza! 🚀
```

---

## 🔄 GESTIÓN DE CAMBIOS

### Cliente solicita cambios por WhatsApp:

**Tipos de cambios comunes:**
1. **Actualizar plato:**
   - Precio
   - Disponibilidad
   - Descripción

2. **Agregar nuevo plato:**
   - Datos completos del plato
   - Categoría
   - Imagen (si tienen)

3. **Modificar enlaces:**
   - Cambiar número de WhatsApp
   - Actualizar horarios
   - Nueva dirección

**Tiempo de respuesta:** 2-4 horas laborales

---

## 📊 GESTIÓN DE RESERVAS

### Actualmente:
- Reservas van directo al WhatsApp del restaurante
- Nosotros NO gestionamos reservas
- Cliente las recibe directamente

### Futuro (Plan Lifetime):
- Panel con lista de reservas
- Exportar CSV/TXT
- Gestión de estado (pendiente/confirmada/completada)

---

## 💰 PLANES Y ACCESO

### **Plan Mensual** (~$20-50k/mes)
✅ Página web personalizada
✅ Menú digital
✅ Código QR
✅ Enlaces básicos
✅ Cambios vía WhatsApp (ilimitados)
❌ Panel de autogestión

### **Plan Lifetime** ($497k pesos)
✅ Todo lo del plan mensual
✅ **Panel de administración completo**
✅ Edición en tiempo real
✅ Gestión de reservas
✅ Exportar datos
✅ Soporte prioritario

---

## 🚀 CUANDO ALGUIEN PAGUE LIFETIME

### **Implementación en 24-48h:**

1. **Configurar base de datos:**
   ```bash
   # Crear tablas en Neon/Supabase
   npx prisma db push
   ```

2. **Crear cuenta de usuario:**
   ```sql
   INSERT INTO users (restaurant_id, email, password)
   VALUES ('[id]', '[email]', '[hashed-password]');
   ```

3. **Migrar datos a DB:**
   - Copiar menú actual a la base de datos
   - Configurar autenticación
   - Activar panel de administración

4. **Enviar credenciales:**
   ```
   ¡Felicidades! 🎉

   Ya tienes acceso al Panel de Administración:
   👉 https://tu-dominio.vercel.app/[slug]/admin

   📧 Usuario: [email]
   🔑 Contraseña: [temporal-password]

   Cambia tu contraseña en el primer acceso.
   ```

---

## 📈 MÉTRICAS A TRACKEAR

- Registros por semana
- Conversión Mensual → Lifetime
- Tiempo promedio de creación manual
- Solicitudes de cambios por cliente

---

## 🔮 ROADMAP

### Q1 2025: MVP Manual
- ✅ Formulario de registro
- ✅ Proceso manual
- ⏳ Primeros 10 clientes

### Q2 2025: Automatización Parcial
- Script de generación automática de páginas
- Template engine mejorado

### Q3 2025: Panel Lifetime
- Implementar panel de administración
- Solo para clientes lifetime

### Q4 2025: Escalado
- Plan mensual con panel limitado
- Multi-idioma
- Analytics

---

## 📞 CONTACTO INTERNO

**Responsable:** [Tu nombre]
**WhatsApp soporte:** +57 314 6414247
**Email:** soporte@digitaliza.com

---

**Última actualización:** Noviembre 2025
**Versión:** 1.0 - MVP Manual
