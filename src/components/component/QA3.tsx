import { motion } from "framer-motion"
import img from "@/assets/quynhanh3.jpg"

const Success = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">

      {/* overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-pink-200/20 via-white/10 to-rose-300/30" />

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-3xl" />

      {/* content */}
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

        <motion.img
          src={img}
          alt="image"
          initial={{
            y: 80,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 1,
          }}
          className="
            w-72
            rounded-3xl
            object-cover
            shadow-[0_10px_40px_rgba(255,192,203,0.35)]
            md:w-[500px]
          "
        />

      </div>
    </div>
  )
}

export default Success