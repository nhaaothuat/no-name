import { sendLoveMail } from "@/lib/sendMail"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
type QA6Props = {
    onAccept?: () => void
}
const QA6 = ({ onAccept }: QA6Props) => {

     const [open, setOpen] = useState(false)
     const [showRetry, setShowRetry] = useState(false)

     return (
          <div className="relative h-full w-full overflow-hidden bg-black">

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
                            text-4xl
                            md:text-6xl
                            lg:text-8xl
                            font-black
                            leading-tight
                            tracking-tight
                            text-white
                            drop-shadow-[0_10px_30px_rgba(255,192,203,0.35)]
                        "
                         >
                              Không biết bạn có cho mình
                              làm người yêu của bạn được không? 😏😏
                         </h1>

                         {/* button */}
                         <motion.button
                              onClick={() => setOpen(true)}
                              whileHover={{
                                   scale: 1.05,
                              }}
                              whileTap={{
                                   scale: 0.96,
                              }}
                              className="
                            mt-12
                            rounded-full
                            border border-white/20
                            bg-white/10
                            px-10 py-4
                            text-white
                            backdrop-blur-md
                            transition-all
                            hover:bg-white/20
                        "
                         >
                              Trả lời ✨
                         </motion.button>

                    </motion.div>
               </div>

               {/* popup */}
               <AnimatePresence>
                    {open && (
                         <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="
                            absolute inset-0 z-50
                            flex items-center justify-center
                            bg-black/60
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

                                   {!showRetry ? (
                                        <>
                                             <h2 className="text-3xl font-bold text-white">
                                                  Đồng ý chứ? 💖
                                             </h2>

                                             <div className="mt-8 flex justify-center gap-4">

                                                  {/* yes */}
                                                  <button
                                                       onClick={async () => {

                                                            await sendLoveMail()

                                                            setOpen(false)

                                                            onAccept?.()
                                                       }}
                                                       className="
        rounded-full
        bg-white
        px-8 py-3
        font-semibold
        text-black
    "
                                                  >
                                                       Yes
                                                  </button>

                                                  {/* no */}
                                                  <button
                                                       onClick={() => setShowRetry(true)}
                                                       className="
                                                rounded-full
                                                border border-white/20
                                                px-8 py-3
                                                text-white
                                            "
                                                  >
                                                       No
                                                  </button>

                                             </div>
                                        </>
                                   ) : (
                                        <>
                                             <motion.h2
                                                  initial={{
                                                       opacity: 0,
                                                       y: 10,
                                                  }}
                                                  animate={{
                                                       opacity: 1,
                                                       y: 0,
                                                  }}
                                                  className="
                                            text-3xl
                                            font-bold
                                            text-pink-200
                                        "
                                             >
                                                  Suy nghĩ lại đi mà 🥺
                                             </motion.h2>

                                             <p className="mt-4 text-white/70">
                                                  Mình dễ thương vậy mà...
                                             </p>

                                             <div className="mt-8 flex justify-center">

                                                  <button
                                                       onClick={() => {
                                                            setShowRetry(false)
                                                            setOpen(false)
                                                       }}
                                                       className="
        rounded-full
        bg-pink-200
        px-8 py-3
        font-semibold
        text-black
    "
                                                  >
                                                       Okayyy 💖
                                                  </button>

                                             </div>
                                        </>
                                   )}

                              </motion.div>
                         </motion.div>
                    )}
               </AnimatePresence>

          </div>
     )
}

export default QA6