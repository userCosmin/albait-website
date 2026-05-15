import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="px-4 py-2 rounded-xl text-sm font-medium text-white shadow-lg"
            style={{ background: 'rgba(15,23,42,0.95)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            Scrie-ne pe WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/40758343653"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl whatsapp-pulse"
        style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <MessageCircle size={26} fill="white" />
      </motion.a>
    </div>
  )
}
