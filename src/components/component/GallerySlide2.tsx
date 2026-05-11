import { motion } from "framer-motion"

import img from "@/assets/quynhanh3.jpg"



const GallerySlide2 = () => {
 return (
        <div className="relative h-full w-full overflow-hidden bg-black">

            {/* Background Image */}
            <motion.img
                src={img}
                initial={{
                    scale: 1.15,
                    opacity: 0,
                }}
                animate={{
                    scale: 1.05,
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                    ease: "easeOut",
                }}
                className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                    brightness-[0.55]
                    blur-[2px]
                "
            />

            {/* Overlay */}
            <div
                className="
                    absolute inset-0
                    bg-gradient-to-b
                    from-black/30
                    via-rose-950/20
                    to-black/70
                "
            />

            {/* Glow */}
            <div
                className="
                    absolute left-1/2 top-1/2
                    h-[500px] w-[500px]
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    bg-pink-300/10
                    blur-3xl
                "
            />

            {/* Floating Light */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    left-1/2
                    top-1/2
                    h-72
                    w-72
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-rose-200/10
                    blur-3xl
                "
            />

            {/* Content */}
            <div
                className="
                    relative z-10
                    flex h-full flex-col
                    items-center
                    justify-center
                    px-6
                    text-center
                "
            >

                {/* Small Text */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="
                        mb-6
                        text-sm
                        tracking-[0.4em]
                        text-white/60
                        uppercase
                    "
                >
                    for someone special
                </motion.p>

                {/* Main Title */}
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 0.3,
                        duration: 1.2,
                    }}
                    className="
                        text-6xl
                        font-light
                        tracking-[0.18em]
                        text-white
                        md:text-7xl
                    "
                >
                    QUỲNH ANH
                </motion.h1>

                {/* Divider */}
                <motion.div
                    initial={{
                        width: 0,
                        opacity: 0,
                    }}
                    animate={{
                        width: 140,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.8,
                        duration: 1,
                    }}
                    className="
                        my-8
                        h-px
                        bg-white/30
                    "
                />

                {/* Subtitle */}
                <motion.p
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 1,
                        duration: 1,
                    }}
                    className="
                        max-w-xl
                        text-lg
                        leading-8
                        text-white/75
                    "
                >
                    Có vài điều...
                    anh đã muốn nói với em từ rất lâu rồi.
                </motion.p>

                {/* Button */}
                <motion.button
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        delay: 1.4,
                        duration: 1,
                    }}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    className="
                        mt-12
                        rounded-full
                        border border-white/20
                        bg-white/10
                        px-8 py-3
                        text-sm
                        tracking-[0.2em]
                        text-white
                        uppercase
                        backdrop-blur-md
                        transition-all
                        hover:bg-white/20
                    "
                >
                    Begin
                </motion.button>

            </div>
        </div>
    )
}

export default GallerySlide2