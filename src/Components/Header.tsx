import { motion } from "framer-motion"
import { divVariants } from "../Utils/motion"
const Header = () => {
    return (
        <>
            <motion.div className="w-full max-w-[1200px] mx-auto h-full flex flex-col justify-center items-center " variants={divVariants}>
                <div className=" w-[90%] sm:w-3/5 mx-auto flex flex-col justify-center items-center">
                    <span className=" px-4 py-1 font-semibold rounded-full bg-[#F1F2F4] text-[#2E2E2E]">An other way to manage time</span>
                    <h1 className=" text-4xl md:text-5xl lg:text-[4.5rem] lg:leading-[5rem] font-bold text-[#2E2E2E] text-center my-6">Your new favorite calendar 🗓️ app</h1>
                    <h3 className=" w-[85%] mx-auto md:text-xl  text-center font-medium text-[rgb(107,107,120)]">Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. </h3>
                    <motion.button whileHover={{ scale: 1.1 }} transition={{ duration: 0.3, ease: "linear" }} className="max-sm:mt-4 mt-8 px-6 sm:px-10 py-3 sm:py-4  rounded-xl bg-[rgb(46,46,46)] text-white font-semibold ">Get stated, it's free</motion.button>
                    <p className="text-[12px] text-[rgb(107,107,120)] mt-2">Free 14 days trials,no credit card needed</p>
                </div>
            </motion.div>
            <div className="w-full max-w-[1200px] mx-auto mb-8 ">
                <img src="https://framerusercontent.com/images/eOkQipcAuByHjPvicAhsR8PzC0.png?scale-down-to=2048" alt="framer-template-1" className=" w-4/5 mx-auto sm:w-full rounded-2xl h-auto border" />
            </div>
        </>
    )
}

export default Header
