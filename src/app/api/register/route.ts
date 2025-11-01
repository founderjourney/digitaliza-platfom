import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { RegistrationData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      name,
      phone,
      whatsapp,
      address,
      hours,
      cuisineType = 'general',
      description = '',
      slug,
      password = 'admin123'
    }: RegistrationData & { slug: string; password: string } = body

    // Validate required fields
    if (!name || !phone || !whatsapp || !address || !hours || !slug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if slug already exists
    const existingRestaurant = await db.restaurant.findBySlug(slug)
    if (existingRestaurant) {
      return NextResponse.json(
        { error: 'This restaurant name is already taken. Please choose a different name.' },
        { status: 409 }
      )
    }

    // Create restaurant
    const restaurant = await db.restaurant.create({
      name,
      phone,
      whatsapp,
      address,
      hours,
      theme: cuisineType,
      description,
      password,
      logoUrl: undefined
    })

    // Create sample menu items based on cuisine type
    const sampleMenuItems = getSampleMenuItems(cuisineType, restaurant.id)

    // Create sample menu items
    for (const item of sampleMenuItems) {
      await db.menu.create(item)
    }

    return NextResponse.json(
      {
        success: true,
        restaurant: {
          id: restaurant.id,
          slug: restaurant.slug,
          name: restaurant.name,
          theme: restaurant.theme
        },
        message: 'Restaurant created successfully'
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Registration error:', error)

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Generate sample menu items based on cuisine type
function getSampleMenuItems(cuisineType: string, restaurantId: string) {
  const baseItems = {
    japanese: [
      {
        name: 'Sashimi Premium',
        price: '24€',
        category: 'Sashimi',
        description: 'Selección de pescado fresco del día',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Maki California',
        price: '12€',
        category: 'Makis',
        description: 'Aguacate, pepino y cangrejo',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Ramen Tonkotsu',
        price: '16€',
        category: 'Sopas',
        description: 'Caldo de hueso de cerdo, chashu y huevo',
        restaurantId,
        imageUrl: undefined
      }
    ],
    italian: [
      {
        name: 'Pasta Carbonara',
        price: '14€',
        category: 'Pasta',
        description: 'Guanciale, huevo, pecorino romano',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Pizza Margherita',
        price: '12€',
        category: 'Pizzas',
        description: 'Tomate, mozzarella, albahaca fresca',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Tiramisu della Casa',
        price: '7€',
        category: 'Postres',
        description: 'Receta familiar con mascarpone',
        restaurantId,
        imageUrl: undefined
      }
    ],
    mexican: [
      {
        name: 'Tacos al Pastor',
        price: '3.50€',
        category: 'Tacos',
        description: 'Cerdo marinado con piña y cebolla',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Guacamole Fresco',
        price: '8€',
        category: 'Entrantes',
        description: 'Aguacate machacado con chips de maíz',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Margarita Clásica',
        price: '8€',
        category: 'Bebidas',
        description: 'Tequila, cointreau y lima',
        restaurantId,
        imageUrl: undefined
      }
    ],
    coffee: [
      {
        name: 'Espresso Artesanal',
        price: '2.50€',
        category: 'Café',
        description: 'Blend especial de la casa',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Cappuccino Premium',
        price: '3.80€',
        category: 'Café',
        description: 'Arte latte incluido',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Croissant Mantequilla',
        price: '2.20€',
        category: 'Repostería',
        description: 'Horneado cada mañana',
        restaurantId,
        imageUrl: undefined
      }
    ],
    general: [
      {
        name: 'Ensalada César',
        price: '12€',
        category: 'Ensaladas',
        description: 'Lechuga, pollo, parmesano, crutones',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Hamburguesa Clásica',
        price: '14€',
        category: 'Principales',
        description: 'Carne de ternera, queso, lechuga, tomate',
        restaurantId,
        imageUrl: undefined
      },
      {
        name: 'Agua Mineral',
        price: '2€',
        category: 'Bebidas',
        description: 'Agua natural o con gas',
        restaurantId,
        imageUrl: undefined
      }
    ]
  }

  return baseItems[cuisineType as keyof typeof baseItems] || baseItems.general
}