"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1.5 }}
      onAnimationComplete={onComplete}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src="/images/shattered-colors-logo.png"
          alt="Shattered Colors"
          fill
          className="object-contain"
          priority
        />
      </div>
    </motion.div>
  )
}
