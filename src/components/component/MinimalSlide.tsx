import { motion } from "framer-motion"
import { GraduationCap, Heart } from "lucide-react"

const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 2,
    size: 14 + Math.random() * 28,
    opacity: 0.15 + Math.random() * 0.35,
}));

const MinimalSlide = () => {
    return (

        <div className="min-h-screen relative overflow-hidden bg-[#fff5f7] flex items-center justify-center px-6">


            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-pink-300/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-100 h-100 bg-rose-200/20 blur-3xl rounded-full" />


            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute -bottom-15 text-rose-300/40 pointer-events-none"
                    initial={{ y: 0, x: 0, opacity: 0 }}
                    animate={{
                        y: -1200,
                        x: [0, -20, 20, -10, 10, 0],
                        opacity: [0, heart.opacity, heart.opacity, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                    style={{ left: heart.left }}
                >
                    <Heart fill="currentColor" size={heart.size} />
                </motion.div>
            ))}


            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="relative z-10 max-w-3xl w-full"
            >

                <div className="rounded-[32px] border border-pink-100 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(244,114,182,0.1)] p-10 md:p-16 text-center">


                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
                        className="mx-auto mb-8 w-24 h-24 rounded-full border border-pink-200 bg-pink-50 flex items-center justify-center"
                    >
                        <GraduationCap
                            size={44}
                            className="text-rose-500"
                        />
                    </motion.div>


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-4xl md:text-6xl font-black tracking-tight text-rose-600 leading-tight"
                    >
                        Congratulations
                        <span className="block mt-2 text-pink-400">
                            On Your Graduation
                        </span>
                    </motion.h1>


                    <div className="w-32 h-1 bg-linear-to-r from-transparent via-pink-300 to-transparent mx-auto my-8 rounded-full" />


                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-rose-900/70 text-lg md:text-xl leading-8 max-w-2xl mx-auto font-medium"
                    >
                        Today marks the end of one beautiful journey
                        and the beginning of another extraordinary chapter.
                        May your future shine with success, courage,
                        and unforgettable achievements.
                    </motion.p>


                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-10 text-rose-400 italic tracking-wide text-sm md:text-base font-semibold"
                    >
                        “The future belongs to those who believe
                        in the beauty of their dreams.”
                    </motion.p>
                </div>
            </motion.div>
        </div>
    )
}

export default MinimalSlide