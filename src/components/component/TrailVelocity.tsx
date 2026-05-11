import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { images } from "@/data/image"

type Trail = {
    id: string
    x: number
    y: number
    rotate: number
    scale: number
    src: string
}

const MAX_TRAILS = 25
const SPAWN_DISTANCE = 18

const TrailVelocity = () => {
    const [trails, setTrails] = useState<Trail[]>([])
    const lastPoint = useRef({ x: 0, y: 0 })

    useEffect(() => {
      
        // document.body.style.cursor = "none"

        const moveCursor = (e: MouseEvent) => {
            const dx = e.clientX - lastPoint.current.x
            const dy = e.clientY - lastPoint.current.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < SPAWN_DISTANCE) return

            lastPoint.current = { x: e.clientX, y: e.clientY }

            const randomImage = images[Math.floor(Math.random() * images.length)]

            const newTrail: Trail = {
                id: crypto.randomUUID(),
                x: e.clientX,
                y: e.clientY,
                rotate: Math.random() * 40 - 20,
                scale: Math.random() * 0.3 + 0.5, 
                src: randomImage.source,
            }

            setTrails((prev) => {
                const updated = [...prev, newTrail]

                if (updated.length > MAX_TRAILS) {
                    return updated.slice(1)
                }

                return updated
            })

            setTimeout(() => {
                setTrails((prev) =>
                    prev.filter((t) => t.id !== newTrail.id)
                )
            }, 1000)
        }

        window.addEventListener("mousemove", moveCursor)
        return () => window.removeEventListener("mousemove", moveCursor)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-9999">
            <AnimatePresence>
                {trails.map((trail) => (
                    <motion.img
                        key={trail.id}
                        src={trail.src}
                        alt=""
                        initial={{ opacity: 0, scale: 0, filter: "blur(10px)" }}
                        animate={{
                            opacity: 1,
                            scale: trail.scale,
                            filter: "blur(0px)",
                            y: -20 
                        }}
                        exit={{
                            opacity: 0,
                            scale: trail.scale * 1.4,
                            filter: "blur(12px)",
                            y: -40,
                            transition: {
                                duration: 0.45,
                                ease: "easeOut",
                            }
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.23, 1, 0.32, 1],
                        }}
                        className="fixed object-cover w-50 h-50 rounded-lg" // Thay w-30 bằng w-32
                        style={{
                            left: trail.x - 64, 
                            top: trail.y - 64,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    )
}

export default TrailVelocity