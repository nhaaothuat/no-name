import { motion } from "framer-motion"

const MinimalSlide = () => {
    return (
        <div
            className="
                w-full
                h-full
                flex
                items-center
                justify-center
                bg-black
                text-white
            "
        >
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.8,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1,
                }}
                className="text-center"
            >
                <h1 className="text-7xl font-bold mb-6">
                    Minimal Motion
                </h1>

                <p className="text-neutral-400 text-xl">
                    Less movement, more atmosphere.
                </p>
            </motion.div>
        </div>
    )
}

export default MinimalSlide