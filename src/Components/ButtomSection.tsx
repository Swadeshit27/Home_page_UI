
import Subheader from './Subheader'
import { motion } from "framer-motion"

const ButtomSection = () => {
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto py-20 ">
                <Subheader title="Ready to start?" subtitile="Last call Baby! 🚀" />
                <div className="w-[90%] sm:w-3/5 mx-auto mt-6 ">
                    <h1 className="text-[16px] sm:text-xl font-medium text-fadeBlack text-center">Here is your last chance to explain how cool your app is. Focus on the benefits for your users, not on the features. </h1>
                    <div className="lg:w-[35%] mx-auto flex items-center justify-center">
                        <motion.button whileHover={{ scale: 1.05 }} transition={{ duration: 0.3, ease: "linear" }} className="px-10 py-4  rounded-xl bg-[rgb(46,46,46)] text-white font-semibold my-8">Get stated, it's free</motion.button>
                    </div>
                    <div className=" flex relative">
                        <div className="absolute bottom-[-40px]">
                            <img src="https://framerusercontent.com/images/Pm9TTOkN341IYtePLdPGmhG0E.png" alt="temp-3" className="w-20 h-20 rounded-full object-contain" />
                        </div>
                        <div className="w-[25rem] bg-[rgba(254,233,203,1)] p-4 rounded-2xl rounded-bl-none ms-20 max-sm:text-sm">
                            <h1 className=" font-medium  text-black_primary">I tested many calendar apps. This app is the best of all! It saves me hours of time.</h1>
                            <h2 className=" font-medium text-[#90909E]">Carla, Head of Finance</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ButtomSection
