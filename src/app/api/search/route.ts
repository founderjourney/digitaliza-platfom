import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.length < 2) {
      return NextResponse.json({ restaurants: [] })
    }

    // Search restaurants by name or slug (SQLite doesn't support mode: 'insensitive')
    const restaurants = await prisma.restaurant.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query
            }
          },
          {
            slug: {
              contains: query
            }
          }
        ]
      },
      select: {
        id: true,
        slug: true,
        name: true,
        theme: true,
        description: true,
        address: true
      },
      take: 10
    })

    return NextResponse.json({ restaurants })

  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Search failed' },
      { status: 500 }
    )
  }
}