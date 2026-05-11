import { motion } from "framer-motion"
import { GraduationCap, Heart } from "lucide-react"

const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 2,
  size: 14 + Math.random() * 28,
  opacity: 0.15 + Math.random() * 0.35,
}))

const MinimalSlide = () => {
  return (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff5f7] px-4 py-10 sm:px-6">
  
  {/* background blur */}
  <div className="absolute top-0 left-1/2 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-pink-300/30 blur-3xl sm:h-[500px] sm:w-[500px] lg:h-[700px] lg:w-[700px]" />

  <div className="absolute -bottom-20 -left-20 h-[220px] w-[220px] rounded-full bg-rose-200/20 blur-3xl sm:h-[320px] sm:w-[320px]" />

  {hearts.map((heart) => (
    <motion.div
      key={heart.id}
      className="pointer-events-none absolute -bottom-10 text-rose-300/40"
      initial={{ y: 0, x: 0, opacity: 0 }}
      animate={{
        y: -1000,
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
    className="relative z-10 w-full max-w-3xl"
  >
    <div className="rounded-[24px] border border-pink-100 bg-white/90 p-6 text-center shadow-[0_20px_50px_rgba(244,114,182,0.1)] backdrop-blur-xl sm:rounded-[32px] sm:p-10 lg:p-14">

      {/* icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full border border-pink-200 bg-pink-50 sm:h-24 sm:w-24"
      >
        <GraduationCap
          size={32}
          className="text-rose-500 sm:size-[44px]"
        />
      </motion.div>

      {/* title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-3xl leading-tight font-black tracking-tight text-rose-600 sm:text-5xl lg:text-6xl"
      >
        Happy Graduation
        <span className="mt-2 block text-pink-400">
          Princess!
        </span>
      </motion.h1>

      {/* divider */}
      <div className="mx-auto my-6 h-1 w-24 rounded-full bg-linear-to-r from-transparent via-pink-300 to-transparent sm:my-8 sm:w-32" />

      {/* content */}
      {/*
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mx-auto max-w-2xl text-base leading-7 font-medium text-rose-900/70 sm:text-lg sm:leading-8 md:text-xl"
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
        className="mt-8 text-xs font-semibold tracking-wide text-rose-400 italic sm:mt-10 sm:text-sm md:text-base"
      >
        “The future belongs to those who believe
        in the beauty of their dreams.”
      </motion.p>
      */}

      {/* gif */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 flex justify-center sm:mt-8"
      >
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWlvamNtcXBobW81dHFxbWoyY2F4cG1pcWp4dW96emF5aTM2MzE1aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xyEW5sxttOZ2yrvbr3/giphy.gif"
          alt="graduation gif"
          className="w-48 rounded-3xl shadow-[0_10px_40px_rgba(244,114,182,0.2)] sm:w-64 lg:w-80"
        />
      </motion.div>

    </div>
  </motion.div>
</div>
  )
}

export default MinimalSlide
