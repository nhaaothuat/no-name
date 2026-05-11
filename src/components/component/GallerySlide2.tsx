import { motion } from "framer-motion"
import img from "@/assets/quynhanh3.jpg"

const GallerySlide2 = () => {
    return (
        <div
            className="
                w-full
                h-full
                bg-neutral-950
                grid
                grid-cols-2
            "
        >
            <div
                className="
                    flex
                    flex-col
                    justify-center
                    px-20
                    text-white
                "
            >
                <motion.h2
                    initial={{
                        x: -100,
                        opacity: 0,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="text-6xl font-bold mb-6"
                >
                    Visual Layers
                </motion.h2>

                <motion.p
                    initial={{
                        y: 40,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.2,
                    }}
                    className="
                        text-lg
                        text-neutral-300
                        max-w-lg
                    "
                >
                    Smooth cinematic parallax reveal
                    experience with layered motion.
                </motion.p>
            </div>

            <div className="relative overflow-hidden">
                <motion.img
                    src={img}
                    initial={{
                        scale: 1.4,
                        x: 100,
                    }}
                    animate={{
                        scale: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1.4,
                    }}
                    className="
                        w-full
                        h-full
                        object-cover
                    "
                />
            </div>
        </div>
    )
}

export default GallerySlide2