import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
type QA6Props = {
    onAccept?: () => void
}
const GallerySlide2 = ({ onAccept }: QA6Props) => {

    const [open, setOpen] = useState(false)

    return (
        <div className="relative h-full w-full overflow-hidden bg-black">

            {/* overlay */}
            <div
                className="
                    absolute inset-0
                    bg-linear-to-b
                    from-black/30
                    via-rose-950/20
                    to-black/70
                "
            />

            {/* glow */}
            <div
                className="
                    absolute left-1/2 top-1/2
                    h-125 w-125
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    bg-pink-300/10
                    blur-3xl
                "
            />

            {/* floating light */}
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

            {/* content */}
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

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="
                        mb-6
                        text-sm
                        tracking-[0.4em]
                        text-white/60
                        uppercase
                    "
                >
                    Chấp niệm
                </motion.p>

                {/* <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
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
                </motion.h1> */}

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
                Lười viết quá !!!!!!!
                </motion.p>

                {/* begin */}
                <motion.button
                    onClick={() => setOpen(true)}
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

          
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            absolute inset-0 z-50
                            flex items-center justify-center
                            bg-black/70
                            backdrop-blur-sm
                        "
                    >
                        <motion.div
                            initial={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            animate={{
                                scale: 1,
                                opacity: 1,
                            }}
                            exit={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            className="
                                w-[90%]
                                max-w-md
                                rounded-3xl
                                border border-white/10
                                bg-white/10
                                p-8
                                text-center
                                backdrop-blur-xl
                            "
                        >
                            <h2 className="text-2xl text-white">
                               Có chắc là muốn tiếp tục mở không?
                            </h2>

                            <p className="mt-4 text-white/70">
                               ráng nghĩ kĩ trước khi mở
                            </p>

                            <div className="mt-8 flex justify-center gap-4">
                                <button
                                    onClick={() => {
                                        setOpen(false)
                                        onAccept?.()
                                    }}
                                    className="
                                        rounded-full
                                        bg-white
                                        px-6 py-3
                                        text-black
                                    "
                                >
                                   Tiếp tục
                                </button>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="
                                        rounded-full
                                        border border-white/20
                                        px-6 py-3
                                        text-white
                                    "
                                >
                                    Không mở nữa
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

export default GallerySlide2