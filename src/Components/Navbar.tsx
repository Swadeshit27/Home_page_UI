
import { motion } from "framer-motion"
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { NavItems } from "../assets/NavItems";
import { useState } from "react";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="w-full min-h-20 max-lg:h-auto lg:h-20 border-b fixed top-0  backdrop-blur-xl bg-[#fef9f6]">
                <div className="w-full max-w-[1300px] h-full max-lg:h-20 mx-auto flex justify-between items-center px-8">
                    <div className="text-[#2E2E2E] font-semibold text-xl">
                        <h1>Milton</h1>
                    </div>
                    <ul className="flex max-lg:hidden">
                        {
                            NavItems.map((item, i) => <li className="text-lg text-[rgb(107,107,120)] font-medium cursor-pointer hover:text-[#2E2E2E] hover:underline mx-4" key={i}><a href={item.link!}>{item.name}</a></li>)
                        }
                    </ul>
                    <div className="max-lg:hidden">
                        <motion.button whileHover={{ scale: 1.1 }} className="px-4 py-2 me-4  rounded-xl text-[rgb(46,46,46)] bg-[#F1F2F4] font-semibold ">Login</motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} className="px-4 py-2 me-4  rounded-xl bg-[rgb(46,46,46)] text-white font-semibold ">Get started</motion.button>
                    </div>
                    <div className="lg:hidden " onClick={() => setOpen(!open)}>
                        {open ? <RxCross2 size={30} /> : <FiMenu size={30} />}
                    </div>
                </div>
                {open && <div className=" lg:hidden flex flex-col justify-center items-center py-6 z-50 bg-[#fef9f6] ">
                    <ul className="  pb-4 text-center">
                        {
                            NavItems.map((item, i) => <li className="text-lg text-[rgb(107,107,120)] font-medium cursor-pointer hover:text-[#2E2E2E] hover:underline mx-4" key={i}><a href={item.link!}>{item.name}</a></li>)
                        }
                    </ul>
                    <motion.button whileHover={{ scale: 1.1 }} className="px-4 py-2 mb-4  rounded-xl text-[rgb(46,46,46)] bg-[#F1F2F4] font-semibold ">Login</motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="px-6 py-2   rounded-xl bg-[rgb(46,46,46)] text-white font-semibold ">Get started</motion.button>
                </div>}

            </div>
        </>
    )
}

export default Navbar
