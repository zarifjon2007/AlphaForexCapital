"use client"

import { motion } from "framer-motion"

const slideUp = {
  hidden: { opacity: 0, y: 240 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
}

type AnimatedSectionProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
  amount?: number
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  once = true,
  amount = 0.1,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={slideUp}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
