"use client"

import { motion } from "framer-motion"

const slideUp = {
  hidden: { opacity: 0, y: 240 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

export default function AnimatedPageContent({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={slideUp}
    >
      {children}
    </motion.div>
  )
}
