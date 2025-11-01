import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Create demo restaurants
  const sakuraSushi = await prisma.restaurant.create({
    data: {
      slug: 'sakura-sushi',
      name: 'Sakura Sushi',
      phone: '+34 912 345 678',
      whatsapp: '+34 612 345 678',
      address: 'Calle Serrano 45, Madrid',
      hours: 'Mar-Dom: 12:00-16:00, 19:00-00:00',
      theme: 'japanese',
      password: 'demo123',
      description: 'Auténtica cocina japonesa en el corazón de Madrid',
      logoUrl: '/images/sakura-logo.png'
    }
  })

  const nonnaItaliana = await prisma.restaurant.create({
    data: {
      slug: 'nonna-italiana',
      name: 'Nonna Italiana',
      phone: '+34 913 456 789',
      whatsapp: '+34 613 456 789',
      address: 'Plaza Mayor 12, Madrid',
      hours: 'Lun-Dom: 13:00-16:00, 20:00-00:30',
      theme: 'italian',
      password: 'demo123',
      description: 'La tradición italiana de la Nonna en cada plato',
      logoUrl: '/images/nonna-logo.png'
    }
  })

  const mariachiCantina = await prisma.restaurant.create({
    data: {
      slug: 'mariachi-cantina',
      name: 'Mariachi Cantina',
      phone: '+34 914 567 890',
      whatsapp: '+34 614 567 890',
      address: 'Calle Alcalá 123, Madrid',
      hours: 'Mar-Dom: 13:00-17:00, 20:00-02:00',
      theme: 'mexican',
      password: 'demo123',
      description: 'Sabores auténticos de México con el mejor ambiente',
      logoUrl: '/images/mariachi-logo.png'
    }
  })

  const brewCoffee = await prisma.restaurant.create({
    data: {
      slug: 'brew-coffee',
      name: 'Brew Coffee',
      phone: '+34 915 678 901',
      whatsapp: '+34 615 678 901',
      address: 'Gran Vía 89, Madrid',
      hours: 'Lun-Dom: 07:00-22:00',
      theme: 'coffee',
      password: 'demo123',
      description: 'El mejor café artesanal y repostería casera',
      logoUrl: '/images/brew-logo.png'
    }
  })

  // Create menu items for Sakura Sushi
  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Sashimi Premium',
        price: '24€',
        category: 'Sashimi',
        description: 'Selección de pescado fresco del día',
        restaurantId: sakuraSushi.id,
        order: 1
      },
      {
        name: 'Nigiri Clásico',
        price: '18€',
        category: 'Nigiri',
        description: '8 piezas de nigiri tradicional',
        restaurantId: sakuraSushi.id,
        order: 2
      },
      {
        name: 'Maki California',
        price: '12€',
        category: 'Makis',
        description: 'Aguacate, pepino y cangrejo',
        restaurantId: sakuraSushi.id,
        order: 3
      },
      {
        name: 'Ramen Tonkotsu',
        price: '16€',
        category: 'Sopas',
        description: 'Caldo de hueso de cerdo, chashu y huevo',
        restaurantId: sakuraSushi.id,
        order: 4
      }
    ]
  })

  // Create menu items for Nonna Italiana
  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Pasta Carbonara',
        price: '14€',
        category: 'Pasta',
        description: 'Guanciale, huevo, pecorino romano',
        restaurantId: nonnaItaliana.id,
        order: 1
      },
      {
        name: 'Pizza Margherita',
        price: '12€',
        category: 'Pizzas',
        description: 'Tomate, mozzarella, albahaca fresca',
        restaurantId: nonnaItaliana.id,
        order: 2
      },
      {
        name: 'Risotto ai Funghi',
        price: '16€',
        category: 'Risottos',
        description: 'Arroz arborio con setas porcini',
        restaurantId: nonnaItaliana.id,
        order: 3
      },
      {
        name: 'Tiramisu della Casa',
        price: '7€',
        category: 'Postres',
        description: 'Receta familiar con mascarpone',
        restaurantId: nonnaItaliana.id,
        order: 4
      }
    ]
  })

  // Create menu items for Mariachi Cantina
  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Tacos al Pastor',
        price: '3.50€',
        category: 'Tacos',
        description: 'Cerdo marinado con piña y cebolla',
        restaurantId: mariachiCantina.id,
        order: 1
      },
      {
        name: 'Guacamole Fresco',
        price: '8€',
        category: 'Entrantes',
        description: 'Aguacate machacado con chips de maíz',
        restaurantId: mariachiCantina.id,
        order: 2
      },
      {
        name: 'Burrito Supreme',
        price: '12€',
        category: 'Principales',
        description: 'Pollo, frijoles, arroz y queso',
        restaurantId: mariachiCantina.id,
        order: 3
      },
      {
        name: 'Margarita Clásica',
        price: '8€',
        category: 'Bebidas',
        description: 'Tequila, cointreau y lima',
        restaurantId: mariachiCantina.id,
        order: 4
      }
    ]
  })

  // Create menu items for Brew Coffee
  await prisma.menuItem.createMany({
    data: [
      {
        name: 'Espresso Artesanal',
        price: '2.50€',
        category: 'Café',
        description: 'Blend especial de la casa',
        restaurantId: brewCoffee.id,
        order: 1
      },
      {
        name: 'Cappuccino Premium',
        price: '3.80€',
        category: 'Café',
        description: 'Arte latte incluido',
        restaurantId: brewCoffee.id,
        order: 2
      },
      {
        name: 'Croissant Mantequilla',
        price: '2.20€',
        category: 'Repostería',
        description: 'Horneado cada mañana',
        restaurantId: brewCoffee.id,
        order: 3
      },
      {
        name: 'Tarta Carrot Cake',
        price: '4.50€',
        category: 'Tartas',
        description: 'Con frosting de queso crema',
        restaurantId: brewCoffee.id,
        order: 4
      }
    ]
  })

  console.log('✅ Seeding completed successfully!')
  console.log(`Created ${4} restaurants and ${16} menu items`)
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })