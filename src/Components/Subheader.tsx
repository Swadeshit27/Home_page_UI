import { motion, Variants } from "framer-motion"

const Subheader = ({ title, subtitile }: { title: string, subtitile: string }) => {
    return (
        <>
            <motion.div
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8
                }}
                viewport={{ once: true, amount: 0.8 }}
                className="w-auto mx-auto flex flex-col justify-center items-center" >
                <span className="max-sm:text-sm px-6 py-2 font-semibold rounded-full bg-[#F1F2F4] text-[#2E2E2E]">{subtitile}</span>
                <h1 className="text-4xl  md:text-[3.5rem] md:leading-[4rem] font-bold text-[#2E2E2E] text-center my-3">{title}</h1>
            </motion.div >
        </>
    )
}

export default Subheader
