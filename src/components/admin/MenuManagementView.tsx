'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuItem, Restaurant } from '@/types'
import { cn } from '@/lib/utils'

interface MenuManagementViewProps {
  restaurant: Restaurant
  menuItemsByCategory: Record<string, MenuItem[]>
  onUpdateMenuItem: (item: MenuItem) => void
  onDeleteMenuItem: (itemId: string) => void
  onAddMenuItem: (item: Omit<MenuItem, 'id' | 'restaurantId' | 'createdAt' | 'updatedAt'>) => void
  colors: { primary: string } // Theme colors
  themeEmoji: string
}

export default function MenuManagementView({
  menuItemsByCategory,
  onUpdateMenuItem,
  onDeleteMenuItem,
  onAddMenuItem,
  colors,
  themeEmoji
}: MenuManagementViewProps) {
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null)
  const [showAddItemModal, setShowAddItemModal] = useState(false)

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
          <span className="text-4xl">{themeEmoji}</span>
          Gestión del Menú
        </h2>
        <p className="text-gray-600">Añade, edita o elimina elementos de tu menú</p>
      </div>

      {/* Add New Item Button */}
      <button
        onClick={() => setShowAddItemModal(true)}
        className={cn(
          "w-full py-4 text-lg font-bold text-white rounded-xl transition-all transform active:scale-95",
          colors.primary,
          "flex items-center justify-center gap-3"
        )}
      >
        ➕ Añadir Nuevo Elemento
      </button>

      {/* Menu Categories */}
      {Object.keys(menuItemsByCategory).length > 0 ? (
        Object.entries(menuItemsByCategory).map(([category, items]) => (
          <div key={category} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{category}</h3>
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => onDeleteMenuItem(item.id)}
                      className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    >
                      🗑️
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-12 text-gray-500">
          <p className="text-xl mb-4">No hay elementos en el menú todavía.</p>
          <p>¡Añade tu primer plato o bebida!</p>
        </div>
      )}

      {/* Edit Item Modal */}
      <AnimatePresence>
        {editingItem && (
          <MenuItemModal
            item={editingItem}
            onSave={(updatedItem) => {
              if ('id' in updatedItem) {
                onUpdateMenuItem(updatedItem)
              }
              setEditingItem(null)
            }}
            onClose={() => setEditingItem(null)}
            colors={colors}
            isNew={false}
          />
        )}
      </AnimatePresence>

      {/* Add Item Modal */}
      <AnimatePresence>
        {showAddItemModal && (
          <MenuItemModal
            item={null}
            onSave={(newItem) => {
              onAddMenuItem(newItem)
              setShowAddItemModal(false)
            }}
            onClose={() => setShowAddItemModal(false)}
            colors={colors}
            isNew={true}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

interface MenuItemModalProps {
  item: MenuItem | null
  onSave: (data: MenuItem | Omit<MenuItem, 'id' | 'restaurantId' | 'createdAt' | 'updatedAt'>) => void
  onClose: () => void
  colors: { primary: string }
  isNew: boolean
}

function MenuItemModal({ item, onSave, onClose, colors, isNew }: MenuItemModalProps) {
  const [name, setName] = useState(item?.name || '')
  const [price, setPrice] = useState(item?.price || '')
  const [category, setCategory] = useState(item?.category || 'Principal')
  const [description, setDescription] = useState(item?.description || '')
  const [available, setAvailable] = useState(item?.available ?? true)
  const [imageUrl, setImageUrl] = useState(item?.imageUrl || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isNew) {
      onSave({
        name,
        price,
        category,
        description,
        available,
        imageUrl,
        order: 0
      })
    } else if (item) {
      onSave({
        ...item,
        name,
        price,
        category,
        description,
        available,
        imageUrl,
      })
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-900">
          {isNew ? 'Añadir Nuevo Elemento' : 'Editar Elemento del Menú'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Precio</label>
            <input
              type="text"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Descripción (opcional)</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">URL de Imagen (opcional)</label>
            <input
              type="text"
              id="imageUrl"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="available"
              checked={available}
              onChange={(e) => setAvailable(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="available" className="ml-2 block text-sm text-gray-900">Disponible</label>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={cn(
                "px-4 py-2 text-white rounded-lg font-medium transition-colors",
                colors.primary
              )}
            >
              {isNew ? 'Añadir' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}