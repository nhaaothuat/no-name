import { motion } from "framer-motion"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"
import { useState } from "react"

const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 2,
  size: 14 + Math.random() * 28,
  opacity: 0.15 + Math.random() * 0.35,
}))

const PASSWORD = "170708";

const OTPPage = () => {

  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (otp === PASSWORD) {
      navigate("/letter"); // route bên trong
    } else {
      setError("Haizzz, có vậy mà cũng không đoán ra!!! Lêu lêu");
    }
  };


  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fff5f5]">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="pointer-events-none absolute -bottom-15 text-pink-300"
          initial={{
            y: 0,
            x: 0,
            opacity: 0,
          }}
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
          style={{
            left: heart.left,
          }}
        >
          <Heart fill="currentColor" size={heart.size} />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full px-4"
      >
        <Card className="mx-auto w-full max-w-lg border-none bg-white/70 shadow-[0_20px_50px_rgba(255,182,193,0.3)] ring-1 ring-pink-100 backdrop-blur-xl">
          <CardHeader className="space-y-2 pb-6 text-center">
            <motion.div
              className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 shadow-inner"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="h-8 w-8 fill-pink-500 text-pink-500" />
            </motion.div>

            <CardTitle className="bg-linear-to-r from-pink-500 to-rose-400 bg-clip-text text-2xl font-bold text-transparent">
              Enter Your Password
            </CardTitle>

            <CardDescription className="font-medium text-pink-400/80"></CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-center space-y-2 px-6 pt-6 pb-12">
            <div className="rounded-2xl border border-pink-50 bg-white/50 px-3 py-4 shadow-inner">
              <InputOTP maxLength={6}  value={otp}
                onChange={(value) => {
                  setOtp(value);
                  setError("");
                }}>
                <div className="flex items-center justify-center gap-2">
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={0}
                      className="h-14 w-12 rounded-xl border-pink-100 bg-white text-lg shadow-sm focus:ring-pink-300"
                    />
                    <InputOTPSlot
                      index={1}
                      className="h-14 w-12 rounded-xl border-pink-100 bg-white text-lg shadow-sm focus:ring-pink-300"
                    />
                  </InputOTPGroup>

                  <InputOTPSeparator className="text-pink-200" />

                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={2}
                      className="h-14 w-12 rounded-xl border-pink-100 bg-white text-lg shadow-sm focus:ring-pink-300"
                    />
                    <InputOTPSlot
                      index={3}
                      className="h-14 w-12 rounded-xl border-pink-100 bg-white text-lg shadow-sm focus:ring-pink-300"
                    />
                  </InputOTPGroup>

                  <InputOTPSeparator className="text-pink-200" />

                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={4}
                      className="h-14 w-12 rounded-xl border-pink-100 bg-white text-lg shadow-sm focus:ring-pink-300"
                    />
                    <InputOTPSlot
                      index={5}
                      className="h-14 w-12 rounded-xl border-pink-100 bg-white text-lg shadow-sm focus:ring-pink-300"
                    />
                  </InputOTPGroup>
                </div>
              </InputOTP>
            </div>
              {error && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-rose-500 font-medium"
              >
                {error}
              </motion.p>
            )}
          </CardContent>
          <CardFooter className="flex justify-center px-6 pb-4">
            <motion.div
              className="w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button  onClick={handleSubmit} className="relative h-14 overflow-hidden rounded-full border-none bg-linear-to-r from-rose-400 to-pink-500 px-10 text-lg font-bold text-white shadow-[0_10px_25px_rgba(244,114,182,0.4)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(244,114,182,0.5)]">
                
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  >
                    💖
                  </motion.span>
               

                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}

export default OTPPage
