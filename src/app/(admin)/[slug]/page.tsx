
'use client'

import { useParams } from 'next/navigation'
import { Restaurant, MenuItem, CuisineType } from '@/types'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { useAdminAuth } from '@/hooks/useAdminAuth'
import AdminLogin from '@/components/auth/AdminLogin'
import AdminPanel from '@/components/admin/AdminPanel'
import { db } from '@/lib/db'

// Data fetching function using Prisma
const getRestaurantData = async (slug: string) => {
  const prismaResult = await db.restaurant.findBySlug(slug);
  if (!prismaResult) return null;

  // Convert Prisma result to our TypeScript interfaces
  const restaurant: Restaurant = {
    ...prismaResult,
    theme: prismaResult.theme as CuisineType,
    description: prismaResult.description || undefined,
    logoUrl: prismaResult.logoUrl || undefined,
    colors: prismaResult.colors ? JSON.parse(prismaResult.colors) : undefined
  };

  const menuItems: MenuItem[] = prismaResult.menuItems.map(item => ({
    ...item,
    description: item.description || undefined,
    imageUrl: item.imageUrl || undefined
  }));

  return { restaurant, menuItems };
}


export default function AdminPage() {
  const params = useParams();
  const slug = params.slug as string;

  const { isAuthenticated, isLoading: isAuthLoading, login, logout } = useAdminAuth({ restaurantName: slug });

  const [data, setData] = useState<{ restaurant: Restaurant, menuItems: MenuItem[] } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    if (data) {
      setMenuItems(data.menuItems || []);
    }
  }, [data]);

  const handleUpdateMenuItem = async (updatedItem: MenuItem) => {
    try {
      setMenuItems(prev => prev.map(item => item.id === updatedItem.id ? updatedItem : item));
      await db.menu.updateById(updatedItem.id, {
        name: updatedItem.name,
        price: updatedItem.price,
        category: updatedItem.category,
        description: updatedItem.description || undefined,
        available: updatedItem.available,
        imageUrl: updatedItem.imageUrl || undefined,
      });
    } catch (e) {
      console.error('Failed to update item', e);
      setMenuItems(data?.menuItems || []); // Revert on error
    }
  };

  const handleDeleteMenuItem = async (itemId: string) => {
    const originalItems = menuItems;
    try {
      setMenuItems(prev => prev.filter(item => item.id !== itemId));
      await db.menu.deleteById(itemId);
    } catch (e) {
      console.error('Failed to delete item', e);
      setMenuItems(originalItems); // Revert on error
    }
  };

  const handleAddMenuItem = async (newItem: Omit<MenuItem, 'id' | 'restaurantId' | 'createdAt' | 'updatedAt'>) => {
    const originalItems = menuItems;
    try {
      const addedItem = await db.menu.create({
        name: newItem.name,
        price: newItem.price,
        category: newItem.category,
        description: newItem.description,
        imageUrl: newItem.imageUrl,
        restaurantId: data!.restaurant.id
      });

      // Convert Prisma result to our MenuItem type
      const menuItem: MenuItem = {
        ...addedItem,
        description: addedItem.description || undefined,
        imageUrl: addedItem.imageUrl || undefined
      };

      setMenuItems(prev => [...prev, menuItem]);
    } catch (e) {
      console.error('Failed to add item', e);
      setMenuItems(originalItems); // Revert on error
    }
  };


  useEffect(() => {
    if (slug) {
      const fetchData = async () => {
        try {
          const result = await getRestaurantData(slug);
          if (result) {
            setData(result);
          } else {
            setError('Restaurante no encontrado.');
          }
        } catch (err) {
          console.error('Error al cargar los datos.', err);
          setError('Error al cargar los datos.');
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }
  }, [slug]);

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  const totalLoading = isAuthLoading || isLoading;

  if (totalLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full mb-4"
        />
        <p className="text-gray-600">Cargando panel de administración...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">No se encontraron datos para este restaurante.</p>
      </div>
    );
  }

  const { restaurant } = data;

  return (
    <AnimatePresence mode="wait">
      {!isAuthenticated ? (
        <motion.div key="login">
          <AdminLogin
            restaurantPassword={restaurant.password}
            onLogin={handleLogin}
            onCancel={() => window.history.back()} // Simple back navigation
            restaurantName={restaurant.name}
            theme={restaurant.theme as 'japanese' | 'italian' | 'mexican' | 'coffee'}
          />
        </motion.div>
      ) : (
        <motion.div key="panel">
          <AdminPanel
            restaurant={restaurant}
            menuItems={menuItems} // Pass state-managed menuItems
            onUpdateMenuItem={handleUpdateMenuItem}
            onDeleteMenuItem={handleDeleteMenuItem}
            onAddMenuItem={handleAddMenuItem}
            onLogout={handleLogout}
            theme={restaurant.theme as 'japanese' | 'italian' | 'mexican' | 'coffee'}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
