import { AnimatePresence, motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { NavItems } from "../assets/NavItems";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="w-full min-h-20 max-lg:h-auto lg:h-20 border-b fixed top-0  backdrop-blur-xl bg-[#fef9f6] z-50">
                <div className="w-full max-w-[1300px] h-full max-lg:h-20 mx-auto flex justify-between items-center px-8">

                    <Link to={'/'}> <span className="text-[#2E2E2E] font-semibold text-xl cursor-pointer">Milton</span> </Link>

                    <ul className="flex max-lg:hidden">
                        {NavItems.map((item, i) => (
                            <li
                                className="text-lg text-[rgb(107,107,120)] font-medium cursor-pointer hover:text-[#2E2E2E] hover:underline mx-4"
                                key={i}
                            >
                                {
                                    item.href ? <a href={item.link!}>{item.name}</a> : <Link to={item.link}>{item.name}</Link>
                                }
                            </li>
                        ))}
                    </ul>
                    <div className="max-lg:hidden">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 me-4  rounded-xl text-[rgb(46,46,46)] bg-[#F1F2F4] font-semibold "
                        >
                            Login
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="px-4 py-2 me-4  rounded-xl bg-[rgb(46,46,46)] text-white font-semibold "
                        >
                            Get started
                        </motion.button>
                    </div>
                    <div className="flex lg:hidden cursor-pointer " onClick={() => setOpen(!open)}>
                        {open ? <RxCross2 size={30} /> : <FiMenu size={30} />}
                    </div>
                </div>
                <AnimatePresence mode="wait">
                    {open && (
                        <motion.div
                            initial={{
                                height: 0,
                            }}
                            animate={{
                                height: "auto",
                                transition: {
                                    height: {
                                        duration: 0.5,
                                    },
                                },
                            }}
                            exit={{
                                height: 0,
                                transition: {
                                    height: {
                                        duration: 0.5,
                                    },
                                },
                            }}
                            className=" lg:hidden flex flex-col justify-center items-center py-6 z-50 bg-[#fef9f6] ">
                            <motion.div
                                initial={{
                                    x: 50,
                                    y: -50,
                                    opacity: 0,
                                }}
                                animate={{
                                    x: 0,
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .8,
                                        duration: 0.5,
                                    },
                                }}
                                exit={{
                                    x: 50,
                                    y: -50,
                                    opacity: 0,
                                    transition: {
                                        opacity: {
                                            duration: 0.1,
                                            delay: 0.1,
                                        },
                                        delay: .1,
                                        duration: 0.3,
                                    },
                                }}>
                                <ul
                                    className="  pb-4 text-center bg-[#fef9f6] ">
                                    {NavItems.map((item, i) => (
                                        <li
                                            className="text-lg text-[rgb(107,107,120)] font-medium cursor-pointer hover:text-[#2E2E2E] hover:underline mx-4"
                                            key={i}
                                        >
                                            {
                                                item.href ? <a href={item.link!}>{item.name}</a> : <Link to={item.link}>{item.name}</Link>
                                            }
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: .3, ease: "linear" }}
                                        className="px-4 py-2 mb-4  rounded-xl text-[rgb(46,46,46)] bg-[#F1F2F4] font-semibold "
                                    >
                                        Login
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: .3, ease: "linear" }}
                                        className="px-6 py-2   rounded-xl bg-[rgb(46,46,46)] text-white font-semibold "
                                    >
                                        Get started
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div >
        </>
    );
};

export default Navbar;
