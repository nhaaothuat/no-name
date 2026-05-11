import { motion } from "framer-motion"
import img from "@/assets/quynhanh2.jpg"

const HeroSlide = () => {
    return (
        <div className="relative w-full h-full overflow-hidden">
            <motion.img
                src={img}
                initial={{
                    scale: 1.3,
                }}
                animate={{
                    scale: 1,
                }}
                transition={{
                    duration: 2,
                }}
                className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                "
            />

            <div className="absolute inset-0 bg-black/40" />

            <div
                className="
                    relative
                    z-10
                    flex
                    items-center
                    h-full
                    px-20
                "
            >
                <motion.h1
                    initial={{
                        y: 100,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.2,
                        duration: 1,
                    }}
                    className="
                        text-white
                        text-8xl
                        font-bold
                    "
                >
                    Dreamscape
                </motion.h1>
            </div>
        </div>
    )
}

export default HeroSlide