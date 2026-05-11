import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import img from "@/assets/quynhanh3.jpg"

const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 2,
  size: 14 + Math.random() * 28,
  opacity: 0.15 + Math.random() * 0.35,
}))

const GallerySlide = () => {

    return (
    <div className="relative grid h-full w-full grid-cols-2 overflow-hidden bg-[#fff5f7]">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-175 w-175 -translate-x-1/2 rounded-full bg-pink-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-rose-200/20 blur-3xl" />

      {/* Floating Hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="pointer-events-none absolute -bottom-10 text-pink-300/30"
          initial={{
            y: 0,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: -1000,
            x: [0, -15, 15, -8, 0],
            opacity: [0, heart.opacity, heart.opacity, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            left: heart.left,
          }}
        >
          <Heart
            fill="currentColor"
            size={heart.size}
          />
        </motion.div>
      ))}

      {/* LEFT CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          justify-center
          px-24
          py-20
        "
      >

        {/* Badge */}
        <motion.div
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
            mb-8
            inline-flex
            w-fit
            items-center
            gap-2
            rounded-full
            border
            border-pink-100
            bg-white/70
            px-5
            py-2
            shadow-sm
            backdrop-blur-md
          "
        >
          <Heart className="h-4 w-4 fill-pink-400 text-pink-400" />

          <span className="text-sm font-semibold tracking-[0.2em] text-rose-400 uppercase">
            For You
          </span>
        </motion.div>

        {/* Main Text */}
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
          className="
            text-6xl
            leading-[1.05]
            font-black
            tracking-tight
          "
        >
          <span className="bg-linear-to-r from-rose-500 to-pink-400 bg-clip-text text-transparent">
           Wish you 
          </span>

         

          <span className="mt-4 block text-rose-600">
         all the best!
          </span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          animate={{
            width: 160,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 1,
          }}
          className="
            my-10
            h-1
            rounded-full
            bg-linear-to-r
            from-pink-300
            via-rose-400
            to-transparent
          "
        />

          <motion.p
                    initial={{
                        y: 30,
                        opacity: 0,
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                    }}
                    className="
            max-w-lg
            text-lg
            leading-8
            font-medium
            text-rose-900/70
          "
                >
                    🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉
                </motion.p>

                {/* GIF */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0],
                    }}
                    transition={{
                        opacity: {
                            delay: 0.8,
                            duration: 1,
                        },
                        y: {
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut",
                        },
                    }}
                    className="mt-10"
                >
                    <div
                        className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-pink-100
              bg-white/60
              p-3
              shadow-[0_15px_40px_rgba(244,114,182,0.15)]
              backdrop-blur-xl
              w-fit
            "
                    >

                        {/* Shine */}
                        <motion.div
                            className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                                x: ["-200%", "200%"],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 4,
                                ease: "linear",
                            }}
                        />

                        <img
                            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2hueG41YWU5a3hwazBjdzJ2bnhtdjRkMndqejdpbWViZzRjeGZ0OCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SpvbwKbMlDJ3Qd02kU/giphy.gif"
                            alt="graduation gif"
                            className="
                relative
                z-10
                w-72
                rounded-2xl
                object-cover
              "
                        />
                    </div>
                </motion.div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative overflow-hidden p-8">

        {/* Glass Frame */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.1,
            x: 100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.4,
          }}
          className="
            relative
            h-full
            overflow-hidden
            rounded-[40px]
            border
            border-white/40
            bg-white/20
            shadow-[0_20px_60px_rgba(244,114,182,0.18)]
            backdrop-blur-xl
          "
        >

          {/* Image */}
          <motion.img
            src={img}
            whileHover={{
              scale: 1.04,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              h-full
              w-full
              object-cover
            "
          />

          {/* Pink Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-rose-400/10 via-transparent to-pink-200/10" />

          {/* Soft Vignette */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(255,192,203,0.18)]" />

          {/* Floating Mini Card */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                delay: 1,
                duration: 1,
              },
              y: {
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              },
            }}
            className="
              absolute
              bottom-8
              left-8
              rounded-3xl
              border
              border-white/50
              bg-white/70
              px-6
              py-4
              shadow-xl
              backdrop-blur-xl
            "
          >
            <p className="text-sm font-semibold tracking-wide text-rose-400">
              my princess ✨
            </p>

            <h3 className="mt-1 text-2xl font-black text-rose-500">
              Quỳnh Anh
            </h3>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
  
}

export default GallerySlide