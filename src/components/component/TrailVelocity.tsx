import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { images } from "@/data/image"
const TrailVelocity = () => {

    const [trails, setTrails] = useState([])

    useEffect(() => {
        document.body.style.cursor = "none"

        const moveCursor = (e) => {
            const randomImage =
                images[Math.floor(Math.random() * images.length)]


        

            const id = crypto.randomUUID()

            const newTrail = {
                id,
                x: e.clientX,
                y: e.clientY,
                rotate: Math.random() * 40 - 20,
                scale: Math.random() * 0.4 + 0.8,
                src: randomImage.source,
            }

            setTrails((prev) => [...prev, newTrail])


            setTimeout(() => {
                setTrails((prev) =>
                    prev.filter((trail) => trail.id !== id)
                )
            }, 1800)
        }

        window.addEventListener("mousemove", moveCursor)

        return () => {
            document.body.style.cursor = "default"
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [])

    return (
        <AnimatePresence>
            {trails.map((trail) => (
                <motion.img
                    key={trail.id}
                    src={trail.src}
                    alt=""
                    initial={{
                        opacity: 0,
                        scale: 0,
                        translateY: 0,
                    }}
                    animate={{
                        opacity: 1,
                        scale: trail.scale,
                        translateY: -10,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 1.8,
                        translateY: -40,
                        filter: "blur(1px)",
                    }}
                    transition={{
                        duration: 1.4,
                        ease: "easeOut",
                    }}
                    className="
        fixed
        top-0
        left-0
        w-50
        h-50
        pointer-events-none
        select-none
        z-9999
        drop-shadow-[0_0_15px_rgba(255,105,180,0.8)]
      "
                    style={{
                        x: trail.x - 16,
                        y: trail.y - 16,
                        rotate: trail.rotate,
                    }}
                />
            ))}
        </AnimatePresence>
    )
}

export default TrailVelocity
