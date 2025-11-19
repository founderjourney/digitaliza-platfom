'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'

export default function AdminPage() {
  const params = useParams();
  const slug = params.slug as string;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
      >
        <div className="text-6xl mb-6">🔨</div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Panel en Construcción
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Restaurante: <span className="font-semibold text-blue-600">{slug}</span>
        </p>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="font-bold text-blue-900 mb-3 text-xl">📲 Próximos Pasos</h2>
          <p className="text-blue-800 mb-3">
            Te enviaremos tus <strong>credenciales de acceso</strong> por WhatsApp en las próximas <strong>24 horas</strong>.
          </p>
          <p className="text-sm text-blue-700">
            Una vez que recibas tus credenciales, podrás acceder a este panel para gestionar tu menú digital.
          </p>
        </div>

        <div className="space-y-3">
          <a
            href="/"
            className="block w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            🏠 Volver al Inicio
          </a>
          <a
            href="/demo/sakura-sushi"
            className="block w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            👀 Ver Demo de Ejemplo
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-8">
          ¿Tienes preguntas? Contáctanos por WhatsApp
        </p>
      </motion.div>
    </div>
  );
}
