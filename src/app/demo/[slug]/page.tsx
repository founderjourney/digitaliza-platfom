import { notFound } from 'next/navigation'
import JapaneseTemplate from '@/components/templates/JapaneseTemplate'
import ItalianTemplate from '@/components/templates/ItalianTemplate'
import MexicanTemplate from '@/components/templates/MexicanTemplate'
import CoffeeTemplate from '@/components/templates/CoffeeTemplate'
import { Restaurant, MenuItem } from '@/types'

// Demo data for different restaurant types
const demoRestaurants: Record<string, { restaurant: Restaurant; menuItems: MenuItem[] }> = {
  'sakura-sushi': {
    restaurant: {
      id: 'demo-1',
      slug: 'sakura-sushi',
      name: 'Sakura',
      phone: '+34666777888',
      whatsapp: '+34666777888',
      address: 'Avenida Japón #88, Distrito Gourmet',
      hours: 'Lun-Dom: 12:00 - 22:00',
      theme: 'japanese',
      password: 'admin123',
      description: 'La esencia de la hospitalidad japonesa',
      logoUrl: undefined,
      colors: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    menuItems: [
      // Zensai (Entrantes)
      {
        id: '1',
        name: 'Edamame Premium',
        price: '8.50',
        category: 'zensai',
        description: 'Vainas de soja tiernas con sal marina de Okinawa',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        name: 'Gyoza de Wagyu',
        price: '14.90',
        category: 'zensai',
        description: 'Dumplings rellenos de carne wagyu y verduras, salsa ponzu',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        name: 'Agedashi Tofu',
        price: '11.50',
        category: 'zensai',
        description: 'Tofu frito en tempura ligera, caldo dashi, daikon rallado',
        available: true,
        imageUrl: undefined,
        order: 3,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Sushi & Sashimi
      {
        id: '4',
        name: 'Omakase del Chef',
        price: '85.00',
        category: 'sushi',
        description: 'Selección de 12 piezas de sushi y sashimi premium elegidas por nuestro chef',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5',
        name: 'Chirashi Bowl Premium',
        price: '32.50',
        category: 'sushi',
        description: 'Sashimi variado sobre arroz sushi, tamago, ikura, wasabi fresco',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '6',
        name: 'Toro Sashimi',
        price: '28.00',
        category: 'sushi',
        description: 'Ventresca de atún rojo de Balfegó, wasabi recién rallado',
        available: false, // Testing unavailable items
        imageUrl: undefined,
        order: 3,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Ramen & Sopas
      {
        id: '7',
        name: 'Tonkotsu Ramen Especial',
        price: '16.90',
        category: 'ramen',
        description: 'Caldo de huesos de cerdo 24h, chashu, huevo marinado, nori',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8',
        name: 'Miso Ramen Vegetariano',
        price: '14.50',
        category: 'ramen',
        description: 'Caldo miso blanco, tofu, verduras de temporada, alga wakame',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Tempura & Yakitori
      {
        id: '9',
        name: 'Tempura Moriawase',
        price: '19.50',
        category: 'tempura',
        description: 'Tempura mixta: langostinos, verduras de temporada, salsa tentsuyu',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '10',
        name: 'Yakitori Selection',
        price: '22.00',
        category: 'tempura',
        description: 'Brochetas de pollo: muslo, pechuga, hígado, corazón. Salsa tare',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Donburi & Gohan
      {
        id: '11',
        name: 'Unagi Don',
        price: '26.50',
        category: 'donburi',
        description: 'Anguila glaseada sobre arroz, salsa kabayaki, sansho',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '12',
        name: 'Wagyu Gyudon',
        price: '34.00',
        category: 'donburi',
        description: 'Carne wagyu sobre arroz, cebolla caramelizada, huevo onsen',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Postres Japoneses
      {
        id: '13',
        name: 'Mochi Ice Cream',
        price: '8.50',
        category: 'postres',
        description: 'Helado envuelto en mochi: matcha, vainilla, chocolate negro',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '14',
        name: 'Dorayaki Casero',
        price: '6.90',
        category: 'postres',
        description: 'Pancakes japoneses rellenos de anko (pasta de judía dulce)',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Té & Sake
      {
        id: '15',
        name: 'Sake Degustation',
        price: '24.00',
        category: 'bebidas',
        description: 'Selección de 3 sakes premium: junmai, junmai daiginjo, nigori',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '16',
        name: 'Té Matcha Ceremonial',
        price: '12.50',
        category: 'bebidas',
        description: 'Matcha premium de Uji, preparado tradicionalmente, dulce wagashi',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  },

  'nonna-italiana': {
    restaurant: {
      id: 'demo-2',
      slug: 'nonna-italiana',
      name: 'Nonna Italiana',
      phone: '+34666777889',
      whatsapp: '+34666777889',
      address: 'Via Roma 25, Centro Histórico',
      hours: 'Mar-Dom: 13:00 - 23:30',
      theme: 'italian',
      password: 'admin123',
      description: 'Auténtica cocina italiana de la nonna',
      logoUrl: undefined,
      colors: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    menuItems: [
      {
        id: '17',
        name: 'Bruschetta Tricolore',
        price: '12.50',
        category: 'antipasti',
        description: 'Pan artesanal, tomate San Marzano, mozzarella di bufala, albahaca',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '18',
        name: 'Spaghetti Carbonara',
        price: '16.50',
        category: 'primi',
        description: 'Receta tradicional romana con guanciale, pecorino y huevo',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '19',
        name: 'Pizza Margherita',
        price: '14.50',
        category: 'pizza',
        description: 'Masa madre, tomate San Marzano, mozzarella di bufala, albahaca',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '20',
        name: 'Tiramisù della Nonna',
        price: '8.50',
        category: 'dolci',
        description: 'Receta familiar con café espresso y mascarpone fresco',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-2',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  },

  'mariachi-cantina': {
    restaurant: {
      id: 'demo-3',
      slug: 'mariachi-cantina',
      name: 'Mariachi Cantina',
      phone: '+34666777890',
      whatsapp: '+34666777890',
      address: 'Calle México 12, Barrio Latino',
      hours: 'Mié-Lun: 14:00 - 01:00',
      theme: 'mexican',
      password: 'admin123',
      description: 'Auténtica cocina mexicana con sabor casero',
      logoUrl: undefined,
      colors: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    menuItems: [
      {
        id: '21',
        name: 'Tacos Al Pastor',
        price: '12.50',
        category: 'antojitos',
        description: 'Tortillas artesanales, carne marinada, piña, cebolla, cilantro',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '22',
        name: 'Quesadillas de Flor de Calabaza',
        price: '10.90',
        category: 'antojitos',
        description: 'Tortillas de maíz, queso Oaxaca, flor de calabaza, epazote',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '23',
        name: 'Mole Poblano',
        price: '18.50',
        category: 'platos',
        description: 'Pollo en mole tradicional con más de 20 ingredientes, arroz mexicano',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '24',
        name: 'Ceviche de Pescado',
        price: '16.50',
        category: 'mariscos',
        description: 'Pescado blanco, limón, cilantro, cebolla morada, chile serrano',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '25',
        name: 'Tres Leches',
        price: '7.50',
        category: 'postres',
        description: 'Bizcocho empapado en tres tipos de leche, canela',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '26',
        name: 'Margarita Clásica',
        price: '9.50',
        category: 'bebidas',
        description: 'Tequila, triple sec, jugo de limón, sal en el borde',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-3',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  },

  'brew-coffee': {
    restaurant: {
      id: 'demo-4',
      slug: 'brew-coffee',
      name: 'Brew Coffee',
      phone: '+34666777891',
      whatsapp: '+34666777891',
      address: 'Plaza Central 8, Casco Antiguo',
      hours: 'Lun-Dom: 07:00 - 21:00',
      theme: 'coffee',
      password: 'admin123',
      description: 'Café de especialidad y repostería artesanal',
      logoUrl: undefined,
      colors: undefined,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    menuItems: [
      {
        id: '27',
        name: 'Cappuccino Artesanal',
        price: '4.50',
        category: 'cafes',
        description: 'Espresso doble, leche vaporizada, espuma de leche, cacao',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '28',
        name: 'Flat White Premium',
        price: '5.20',
        category: 'cafes',
        description: 'Doble ristretto, leche microespumada, granos de origen único',
        available: true,
        imageUrl: undefined,
        order: 2,
        restaurantId: 'demo-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '29',
        name: 'Cold Brew Nitro',
        price: '5.80',
        category: 'bebidas',
        description: 'Café filtrado en frío, infusión de nitrógeno, cremoso y suave',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '30',
        name: 'Cheesecake de Frutos Rojos',
        price: '6.90',
        category: 'reposteria',
        description: 'Base de galleta, queso crema, mermelada casera de frutos rojos',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '31',
        name: 'Croissant de Almendra',
        price: '3.50',
        category: 'desayunos',
        description: 'Masa fermentada, crema de almendra, almendra laminada',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '32',
        name: 'Tostada Avocado',
        price: '8.50',
        category: 'snacks',
        description: 'Pan de masa madre, aguacate, tomate cherry, queso feta, semillas',
        available: true,
        imageUrl: undefined,
        order: 1,
        restaurantId: 'demo-4',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
  }
}

interface DemoPageProps {
  params: {
    slug: string
  }
}

export default function DemoPage({ params }: DemoPageProps) {
  const { slug } = params
  const demoData = demoRestaurants[slug]

  if (!demoData) {
    notFound()
  }

  const { restaurant, menuItems } = demoData

  return (
    <>
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-yellow-400 text-black text-center py-2 text-sm font-medium z-50">
        🚀 DEMO LinkAngri - Página de muestra para {restaurant.name}
      </div>

      {/* Add top padding to account for demo banner */}
      <div className="pt-10">
        {restaurant.theme === 'italian' ? (
          <ItalianTemplate
            restaurant={restaurant}
            menuItems={menuItems}
            isAdmin={false}
          />
        ) : restaurant.theme === 'mexican' ? (
          <MexicanTemplate
            restaurant={restaurant}
            menuItems={menuItems}
            isAdmin={false}
          />
        ) : restaurant.theme === 'coffee' ? (
          <CoffeeTemplate
            restaurant={restaurant}
            menuItems={menuItems}
            isAdmin={false}
          />
        ) : (
          <JapaneseTemplate
            restaurant={restaurant}
            menuItems={menuItems}
            isAdmin={true}
          />
        )}
      </div>
    </>
  )
}

// Generate static params for known demo restaurants
export function generateStaticParams() {
  return Object.keys(demoRestaurants).map((slug) => ({
    slug,
  }))
}

// SEO optimization
export function generateMetadata({ params }: DemoPageProps) {
  const { slug } = params
  const demoData = demoRestaurants[slug]

  if (!demoData) {
    return {
      title: 'Demo not found - LinkAngri',
      description: 'Restaurant demo not found',
    }
  }

  const { restaurant } = demoData

  return {
    title: `${restaurant.name} - Demo LinkAngri`,
    description: `Demo de ${restaurant.name}: ${restaurant.description}. Gestión restaurantera móvil-first con LinkAngri.`,
    keywords: ['demo', 'restaurant', restaurant.theme, 'mobile', 'menu', 'reservations'],
    openGraph: {
      title: `${restaurant.name} - LinkAngri Demo`,
      description: restaurant.description,
      type: 'website',
    },
    robots: {
      index: false, // Don't index demo pages
      follow: false,
    },
  }
}