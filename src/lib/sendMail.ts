import emailjs from "@emailjs/browser"

export const sendLoveMail = async () => {
    try {

        const response = await emailjs.send(
            "service_g2zx2sk",
            "template_bdh6qjp",
            {
                from_name: "Love Website",
                message: "Cô ấy đã chọn YES 💖",
            },
            "Ev7bUdYKbhyjfh0Jg"
        )

        console.log("SUCCESS", response)

    } catch (error) {
        console.log("FAILED", error)
    }
}