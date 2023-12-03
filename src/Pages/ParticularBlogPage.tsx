
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AiFillHome } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { BlogItems } from "../assets/BlogItem";

const ParticularBlogPage = () => {
    const { pathname } = useLocation();
    const currentPostId = +pathname.split("/blog/")[1];
    const { scrollYProgress } = useScroll();
    console.log(scrollYProgress)
    return (
        <>
            <div className="w-full  h-[87vh] mt-20" >
                <Navbar />
                <motion.div className="w-full h-[3px] bg-fadeBlack fixed top-20"
                    style={{
                        scaleX: scrollYProgress,
                    }}
                />
                <div className="overflow-y-scroll">
                    {BlogItems.filter((item) => item.id === currentPostId).map((post) => {
                        const {
                            id,
                            title,
                            postImage,
                            postTime,
                            moreDetails,
                            topBottomDetails,
                        } = post;
                        return (
                            <>
                                <motion.div
                                    initial={{ scale: 0, y: -100 }}
                                    animate={{ scale: 1, y: [100, 0] }}
                                    transition={{ duration: .5, ease: "backInOut", times: [0, 1], }}
                                    className="w-full max-w-[900px] mx-auto py-10 md:py-20 px-4 md:px-8 lg:px-0" key={id}>
                                    <div className=" w-full flex items-center my-4 text-fadeBlack overflow-x-hidden">
                                        <Link to={"/"}>
                                            <AiFillHome className={"cursor-pointer"} />
                                        </Link>
                                        <IoIosArrowForward className={" mx-1 sm:mx-3"} />
                                        <Link
                                            to={"/blog"}
                                            className="cursor-pointer hover:text-black_primary hover:underline"
                                        >
                                            Blog
                                        </Link>
                                        <IoIosArrowForward className={"mx-3"} />
                                        <h1 className=" text-black_primary  truncate ">{title}</h1>
                                    </div>
                                    <div>
                                        <img
                                            src={postImage}
                                            alt="blog image"
                                            className="rounded-3xl"
                                        />
                                        <div className=" md:w-4/5 mx-auto my-12">
                                            <h1 className="text-2xl md:text-4xl font-semibold text-black_primary">
                                                {title}
                                            </h1>
                                            <p className="max-sm:text-sm my-4  text-fadeBlack">{postTime}</p>
                                            <p className="text-[#666666] leading-7 max-sm:text-sm">
                                                {topBottomDetails[0]}
                                            </p>
                                            <ul className=" my-4 text-[#666666] leading-7">
                                                {
                                                    moreDetails.map((item, i) => {
                                                        return (
                                                            <li key={i}>
                                                                <h1 className="font-medium  my-4">
                                                                    {i + 1}. {item.heading}
                                                                </h1>
                                                                <p className="max-sm:text-sm">
                                                                    {item.details}
                                                                </p>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                            <div className="w-full h-[15rem] rounded-3xl bg-blue-200 my-8 p-4 md:p-8">
                                                <h1 className="text-xl  font-semibold md:text-3xl text-center">
                                                    Ready to meet the most advanced calendar app in the
                                                    market?
                                                </h1>
                                                <p className="max-sm:text-sm text-center text-fadeBlack my-4">
                                                    It is time to change the way you manage time.
                                                </p>
                                                <div className="w-full flex justify-center items-center my-4">
                                                    <motion.button
                                                        whileHover={{ scale: 1.05 }}
                                                        className="px-8 py-3 rounded-xl bg-[rgb(46,46,46)] text-white font-semibold  text-lg"
                                                    >
                                                        Get started
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-12">
                                            <h1 className=" text-2xl font-semibold md:text-4xl text-black_primary mb-4 sm:mb-8">
                                                Latest articles
                                            </h1>
                                            <div className="lg:flex justify-between cursor-pointer">
                                                <div className="w-[22rem] sm:w-[27rem] h-[10rem] rounded-2xl overflow-hidden bg-white flex mb-8 max-lg:mx-auto">
                                                    <img
                                                        src={BlogItems[0].postImage}
                                                        alt=""
                                                        className="w-[6rem] sm:w-[10rem] h-full object-cover"
                                                    />
                                                    <div className="p-4 ">
                                                        <p className="text-sm text-fadeBlack font-medium">
                                                            Resources
                                                        </p>
                                                        <h1 className=" text-sm text-[15px] leading-5 font-semibold my-2 sm:my-3">
                                                            {BlogItems[0].title}
                                                        </h1>
                                                        <p className="text-sm text-fadeBlack">{BlogItems[0].postTime}</p>
                                                    </div>
                                                </div>
                                                <div className="w-[27rem] h-[10rem] rounded-2xl overflow-hidden bg-white flex mb-8 max-lg:mx-auto">
                                                    <img
                                                        src={BlogItems[1].postImage}
                                                        alt=""
                                                        className="w-[10rem] h-full object-cover"
                                                    />
                                                    <div className="p-4 ">
                                                        <p className="text-sm text-fadeBlack font-medium">
                                                            Resources
                                                        </p>
                                                        <h1 className="text-[15px] leading-5 font-semibold my-3">
                                                            {BlogItems[1].title}
                                                        </h1>
                                                        <p className="text-sm text-fadeBlack">{BlogItems[1].postTime}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div >
                            </>
                        );
                    })}
                </div >
                <Footer />
            </div>
        </>
    );
};

export default ParticularBlogPage;
