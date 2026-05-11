import { motion } from "framer-motion"


const QA2 = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">

     
      {/* Pink dreamy overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-pink-200/20 via-white/10 to-rose-300/30" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/20 blur-3xl" />

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
        bạn có .... 😏😏🙄🙄
          </h1>

          
        </motion.div>
      </div>
    </div>
  )
}

export default QA2