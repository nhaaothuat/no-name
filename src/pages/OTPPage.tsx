
import { motion } from "framer-motion";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
const hearts = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  duration: 8 + Math.random() * 12,
  delay: Math.random() * 10,
  size: 14 + Math.random() * 28,
  opacity: 0.15 + Math.random() * 0.35,
}));

const OTPPage = () => {
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f5] overflow-hidden relative">
     
         {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute -bottom-15 text-pink-300 pointer-events-none"
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
          <Heart
            fill="currentColor"
            size={heart.size}
          />
        </motion.div>
      ))}

      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 w-full px-4"
      >
        <Card className="mx-auto  w-full max-w-sm border-none shadow-[0_20px_50px_rgba(255,182,193,0.3)] bg-white/70 backdrop-blur-xl ring-1 ring-pink-100">
          <CardHeader className="text-center space-y-2 pb-6">
            <motion.div
              className="mx-auto bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-2 shadow-inner"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Heart className="text-pink-500 fill-pink-500 w-8 h-8" />
            </motion.div>

            <CardTitle className="text-2xl font-bold bg-linear-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Mật mã yêu thương
            </CardTitle>

            <CardDescription className="text-pink-400/80 font-medium">
              Nhập 6 con số là ngày chúng mình bắt đầu
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-center pt-6 pb-12 px-6">
            <div className="px-3 py-4   bg-white/50 rounded-2xl shadow-inner border border-pink-50">
              <InputOTP maxLength={6}>
                <div className="flex gap-2 items-center justify-center">
                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={0}
                      className="rounded-xl border-pink-100 focus:ring-pink-300 w-12 h-14 text-lg bg-white shadow-sm"
                    />
                    <InputOTPSlot
                      index={1}
                      className="rounded-xl border-pink-100 focus:ring-pink-300 w-12 h-14 text-lg bg-white shadow-sm"
                    />
                  </InputOTPGroup>

                  <InputOTPSeparator className="text-pink-200" />

                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={2}
                      className="rounded-xl border-pink-100 focus:ring-pink-300 w-12 h-14 text-lg bg-white shadow-sm"
                    />
                    <InputOTPSlot
                      index={3}
                      className="rounded-xl border-pink-100 focus:ring-pink-300 w-12 h-14 text-lg bg-white shadow-sm"
                    />
                  </InputOTPGroup>

                  <InputOTPSeparator className="text-pink-200" />

                  <InputOTPGroup className="gap-2">
                    <InputOTPSlot
                      index={4}
                      className="rounded-xl border-pink-100 focus:ring-pink-300 w-12 h-14 text-lg bg-white shadow-sm"
                    />
                    <InputOTPSlot
                      index={5}
                      className="rounded-xl border-pink-100 focus:ring-pink-300 w-12 h-14 text-lg bg-white shadow-sm"
                    />
                  </InputOTPGroup>
                </div>
              </InputOTP>
            </div>

          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default OTPPage;