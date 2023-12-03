import { ZoomIn } from "../Utils/motion";
import { DiscoverItems } from "../assets/DiscoverItems";
import Subheader from "./Subheader";
import { motion, MotionConfig } from "framer-motion";



const Discover = () => {
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto pt-20 p-6 ">
                <Subheader
                    title="Discover your new superpowers"
                    subtitile="Our main features 🦸🏼"
                />
                {DiscoverItems.map((item, i) => {
                    const {
                        title,
                        subtitle,
                        subtitleBG,
                        description,
                        imagePath,
                        comment,
                        isReverse,
                    } = item;
                    const { imgSrc, commentDescription, userDetails } = comment;
                    return (
                        <div
                            className={`w-full flex max-lg:flex-col max-lg:h-auto h-[38rem] my-12 ${isReverse ? "flex-row-reverse" : ""
                                }`}
                            key={i}
                        >
                            <MotionConfig transition={{ duration: 0.5, ease: "backInOut" }}>
                                <div className="w-full sm:w-4/5 mx-auto lg:w-[50%] h-full py-8">
                                    <motion.div
                                        initial={"TextHidden"}
                                        whileInView={"TextShow"}
                                        viewport={{ once: true, amount: 0.4 }}
                                        variants={ZoomIn}
                                    >
                                        <span
                                            className={`px-4 py-2 font-semibold rounded-full ${subtitleBG} text-[#2E2E2E]`}
                                        >
                                            {subtitle}
                                        </span>
                                        <h1 className="text-3xl sm:text-5xl  font-semibold text-[#2E2E2E] my-4">
                                            {title}
                                        </h1>
                                        <p className="text-lg sm:text-xl leading-8 font-medium my-12 text-[rgb(107,107,120)]">
                                            {description}
                                        </p>
                                    </motion.div>
                                    <motion.div
                                        initial={"CommentHidden"}
                                        whileInView={"CommentShow"}
                                        viewport={{ once: true, amount: 0.4 }}
                                        variants={ZoomIn}
                                        className={`flex relative  ${isReverse ? " flex-row-reverse" : ""
                                            }`}
                                    >
                                        <div className="absolute bottom-[-40px]">
                                            <img
                                                src={imgSrc}
                                                alt="temp-3"
                                                className="w-20 h-20 rounded-full object-contain"
                                            />
                                        </div>
                                        <div
                                            className={`w-[25rem] bg-[#2E2E2E] p-4 rounded-2xl  ${isReverse
                                                    ? "rounded-br-none me-20"
                                                    : "rounded-bl-none ms-20"
                                                } `}
                                        >
                                            <h1 className=" font-medium text-white">
                                                {commentDescription}
                                            </h1>
                                            <h2 className=" font-medium text-[#90909E]">
                                                {userDetails}
                                            </h2>
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={"PictureHidden"}
                                    whileInView={"PictureShow"}
                                    viewport={{ once: true, amount: 0.4 }}
                                    variants={ZoomIn}
                                    className="w-full sm:w-4/5 mx-auto lg:w-[50%] h-full"
                                >
                                    <img src={imagePath} alt="template-2" />
                                </motion.div>
                            </MotionConfig>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Discover;
