
'use client'

import QRCode from 'react-qr-code'
import { Restaurant } from '@/types'
import { motion } from 'framer-motion'
import { useRef } from 'react'

interface QRCodeViewProps {
  restaurant: Restaurant
  colors: {
    primary: string
    primaryLight: string
    secondary: string
    accent: string
    gradient: string
  }
  themeEmoji: string
  onBack: () => void
}

export default function QRCodeView({ restaurant, colors, themeEmoji, onBack }: QRCodeViewProps) {
  const qrCodeRef = useRef<HTMLDivElement>(null)
  const menuUrl = typeof window !== 'undefined' ? `${window.location.origin}/demo/${restaurant.slug}` : ''

  const downloadQRCode = () => {
    const svg = qrCodeRef.current?.querySelector('svg')
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx?.drawImage(img, 0, 0)
        const pngFile = canvas.toDataURL('image/png')
        const downloadLink = document.createElement('a')
        downloadLink.download = `${restaurant.slug}-qrcode.png`
        downloadLink.href = pngFile
        downloadLink.click()
      }
      img.src = `data:image/svg+xml;base64,${btoa(svgData)}`
    }
  }

  return (
    <motion.div
      key="qr-code"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
          <span className="text-4xl">{themeEmoji}</span>
          Código QR del Menú
        </h2>
        <p className="text-gray-600">Muestra este QR a tus clientes para que accedan al menú digital.</p>
      </div>

      <div className="flex justify-center">
        <div
          ref={qrCodeRef}
          className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100"
        >
          <QRCode
            value={menuUrl}
            size={256}
            bgColor="#ffffff"
            fgColor="#000000"
            level="Q"
          />
        </div>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>El QR apunta a: <a href={menuUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">{menuUrl}</a></p>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={onBack}
          className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-all"
        >
          Volver
        </button>
        <button
          onClick={downloadQRCode}
          className={`px-6 py-3 text-white font-medium rounded-lg transition-all transform active:scale-95 ${colors.primary}`}
        >
          Descargar PNG
        </button>
      </div>
    </motion.div>
  )
}
