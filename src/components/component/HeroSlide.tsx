import { motion } from "framer-motion"
import img from "@/assets/quynhanh2.jpg"

const HeroSlide = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* Background Image */}
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
          h-full
          w-full
          object-cover
        "
      />

      {/* Pink dreamy overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-200/20 via-white/10 to-rose-300/30" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-3xl" />

      {/* Center Content */}
      <div
        className="
          relative
          z-10
          flex
          h-full
          items-center
          justify-center
          px-6
          text-center
        "
      >
        <motion.div
          initial={{
            y: 80,
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
        >

          <p
            className="
              mb-4
              text-sm
              font-semibold
              tracking-[0.35em]
              text-white/80
              uppercase
            "
          >
            Graduation 
          </p>

          <h1
            className="
              text-6xl
              md:text-8xl
              font-black
              leading-none
              tracking-tight
              text-white
              drop-shadow-[0_10px_30px_rgba(255,192,203,0.35)]
            "
          >
        Võ Ngọc Quỳnh Anh
          </h1>

          {/* <p
            className="
              mt-6
              text-lg
              md:text-2xl
              font-medium
              text-white/90
            "
          >
            A beautiful dream begins here ✨
          </p> */}
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSlide