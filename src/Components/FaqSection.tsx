import { useState } from "react";
import Subheader from "./Subheader";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import { FaqItems } from "../assets/FaqItems";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const FaqSection = () => {
    const control = useAnimationControls();
    const [open, setOpen] = useState({
        id: -1,
        status: false,
    });
    const handelOpen = () => {
        if (open.status) control.set("openFaq");
        else control.set("closedFaq");
    };
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto pt-10 md:pt-20 " id="faqs">
                <Subheader
                    title="Frequently asked questions"
                    subtitile="Relevant stuff, bla bla 📣"
                />
                {FaqItems.map((item, i) => {
                    const { question, answer } = item;
                    return (
                        <div
                            className="w-[90%] sm:w-4/5 mx-auto  bg-gray_primary flex flex-col py-2  px-3 sm:px-8 rounded-xl mt-8 cursor-pointer"
                            key={i}
                            onClick={() => {
                                handelOpen();
                                setOpen({ id: i, status: !open.status });
                            }}
                        >
                            <div className="flex justify-between items-center w-full py-3">
                                <h1 className="font-semibold text-[16px] sm:text-xl text-black_primary">
                                    {question}
                                </h1>
                                {open.status && open.id == i ? (
                                    <FaCircleMinus size={25} className={"ms-2 text-2xl text-fadeBlack "} />
                                ) : (
                                    <BsPlusCircleFill
                                        size={25}
                                        className={" min-w-[30px] ms-2 text-fadeBlack "}
                                    />
                                )}
                            </div>
                            <AnimatePresence mode="wait">
                                {open.id == i && open.status && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                height: {
                                                    duration: 0.4,
                                                },
                                                opacity: {
                                                    duration: 0.25,
                                                    delay: 0.15,
                                                },
                                            },
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                            transition: {
                                                height: {
                                                    duration: 0.4,
                                                },
                                                opacity: {
                                                    duration: 0.25,
                                                },
                                            },
                                        }}
                                        key="test"
                                        className="font-light"
                                    >
                                        <p className="font-medium text-fadeBlack pb-3">{answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default FaqSection;
