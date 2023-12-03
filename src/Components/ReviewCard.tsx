import { IoMdCheckmark } from "react-icons/io";
import { ReviewCardItem } from "../assets/ReviewCardItem";
import { motion } from "framer-motion";
import { CardVariant } from "../Utils/motion";

const ReviewCard = ({ category }: { category: string }) => {
    return (
        <>
            {ReviewCardItem.filter((values) => values.category === category).map(
                (item, i) => {
                    const {
                        header,
                        title,
                        price,
                        description,
                        Trial,
                        features,
                    } = item;
                    return (
                        <motion.div
                            initial={"hidden"}
                            whileInView={"show"}
                            viewport={{ once: true }}
                            variants={CardVariant}
                            className="w-[18rem] sm:w-[24rem] mx-auto h-auto sm:h-[35rem] mb-6 p-4 sm:p-8 bg-white rounded-2xl"
                            key={i}
                        >
                            <span className=" max-sm:text-sm px-6 py-2 font-semibold rounded-full bg-[#F1F2F4] text-[#2E2E2E]">
                                {header}
                            </span>
                            <p className="font-medium text-fadeBlack my-4">{title}</p>
                            <h1 className="text-4xl sm:text-6xl font-bold  text-black_primary mt-4 sm:mt-8">
                                ${price}
                                <span className="text-lg font-semibold text-fadeBlack">
                                    /mo
                                </span>
                            </h1>
                            <h4 className="text-[16px] sm:text-lg font-medium text-fadeBlack">
                                {description}
                            </h4>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, ease: "linear" }}
                                className="w-full p-3 rounded-xl bg-black_primary text-white mt-6"
                            >
                                Get started
                            </motion.button>
                            <p className="text-[12px] text-center mt-2">{Trial}</p>
                            <ul className="mt-6">
                                <h1 className=" text-[16px] sm:text-lg font-medium text-black_primary">
                                    What's included:
                                </h1>
                                {features.map((item, i) => (
                                    <li key={i} className="flex items-center text-fadeBlack max-sm:text-sm">
                                        <IoMdCheckmark size={25} className="text-violet-400 me-4" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                }
            )}
        </>
    );
};

export default ReviewCard;
