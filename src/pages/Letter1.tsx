import TrailVelocity from '@/components/component/TrailVelocity'
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { slides } from "@/data/slide"
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1200 : -1200,
        opacity: 0,
    }),

    center: {
        x: 0,
        opacity: 1,
    },

    exit: (direction: number) => ({
        x: direction > 0 ? -1200 : 1200,
        opacity: 0,
    }),
}


const Letter1 = () => {
   const [[index, direction], setPage] =
        useState([0, 0])

    const paginate = (dir: number) => {
        const next =
            (index + dir + slides.length) %
            slides.length

        setPage([next, dir])
    }

    const CurrentSlide = slides[index].Component
  return (
    <>
      <section className="relative h-screen overflow-hidden bg-black">
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                >
                    <CurrentSlide />
                </motion.div>
            </AnimatePresence>

            <div
                className="
                    absolute
                    bottom-10
                    left-10
                    z-50
                    flex
                    gap-4
                "
            >
                <Button
                    onClick={() => paginate(-1)}
                    className="
                        px-6
                        py-3
                        bg-white
                        text-black
                    "
                >
                   <ArrowBigLeft />
                </Button>

                <Button
                    onClick={() => paginate(1)}
                    className="
                        px-6
                        py-3
                        bg-white
                        text-black
                    "
                >
                   <ArrowBigRight />
                </Button>
            </div>
        </section>
   <TrailVelocity />
   </>
  )
}

export default Letter1
