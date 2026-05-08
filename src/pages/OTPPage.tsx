import  { useState } from "react";
import { motion} from "framer-motion";
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



const OTPPage = ({ onVerify }: { onVerify: (value: string) => void }) => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const correctOTP = "123456"; // Thay bằng mã của bạn

  const handleComplete = (e: string) => {
    if (e === correctOTP) {
      onVerify(e);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 500); // Reset hiệu ứng rung
      setValue(""); // Xóa code cũ
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff5f5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: isError ? [0, -10, 10, -10, 10, 0] : 0 // Hiệu ứng Shake khi sai
        }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-sm border-none shadow-xl bg-white/80 backdrop-blur-md">
          <CardHeader className="text-center space-y-1">
            <div className="mx-auto bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
              <Heart className="text-pink-500 fill-pink-500 w-6 h-6" />
            </div>
            <CardTitle className="text-2xl font-semibold text-gray-800">
              Mật mã yêu thương
            </CardTitle>
            <CardDescription className="text-gray-500">
              Nhập 6 con số là ngày chúng mình bắt đầu
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col items-center pb-10">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(e) => setValue(e)}
              onComplete={handleComplete}
              autoFocus
              render={({ slots }) => (
                <div className="flex gap-2 items-center">
                  <InputOTPGroup className="gap-2">
                    {slots.slice(0, 2).map((slot, index) => (
                      <InputOTPSlot 
                        key={index} 
                          index={index}
                        {...slot} 
                        className="rounded-md border-pink-200 focus:ring-pink-400 w-12 h-14 text-lg"
                      />
                    ))}
                  </InputOTPGroup>
                  <InputOTPSeparator className="text-pink-300" />
                  <InputOTPGroup className="gap-2">
                    {slots.slice(2, 4).map((slot, index) => (
                      <InputOTPSlot 
                        key={index + 2}
                        index={index + 2} 
                        {...slot} 
                        className="rounded-md border-pink-200 focus:ring-pink-400 w-12 h-14 text-lg"
                      />
                    ))}
                  </InputOTPGroup>
                  <InputOTPSeparator className="text-pink-300" />
                  <InputOTPGroup className="gap-2">
                    {slots.slice(4, 6).map((slot, index) => (
                      <InputOTPSlot 
                        key={index + 4} 
                        index={index + 4} 
                        {...slot} 
                        className="rounded-md border-pink-200 focus:ring-pink-400 w-12 h-14 text-lg"
                      />
                    ))}
                  </InputOTPGroup>
                </div>
              )}
            />
            
            {isError && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-4 font-medium"
              >
                Hổng đúng rồi, thử lại xem nào! 
              </motion.p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default OTPPage;