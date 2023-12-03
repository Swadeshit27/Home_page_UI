import { useState } from 'react'
import Subheader from './Subheader'
import ReviewCard from './ReviewCard'
import {  motion, useAnimationControls, } from "framer-motion"

const Pricing = () => {
    const [category, setCategory] = useState("monthly")
    const control = useAnimationControls();
    const handelClickRight = () => {
        setCategory('annually')
        control.start("right")
    }
    const handelClickLeft = () => {
        setCategory('monthly');
        control.start("left")
    }
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto pt-20 " id="pricing">
                <Subheader title="Find the best plan for your needs" subtitile="Pricing and plans 💰" />
                <div className="w-[20rem] h-12 mx-auto flex items-center rounded-lg bg-[#F1F2F4] p-1 mt-12 relative">
                    <div className={`w-1/2 h-full rounded-md text-lg font-medium  flex justify-center items-center cursor-pointer z-50 ${category === "monthly" ? "text-black_primary" : "text-fadeBlack"}`} onClick={handelClickLeft}>Monthly</div>
                    <div className={`w-1/2 h-full rounded-md text-lg font-medium  flex justify-center items-center cursor-pointer z-50 ${category !== "monthly" ? "text-black_primary" : "text-fadeBlack"}`} onClick={handelClickRight}>Annually</div>
                    <motion.div
                        variants={{
                            initial: {
                                transform: "translate(0%,0)"
                            },
                            left: {
                                transform: "translate(0%,0)"
                            },
                            right: {
                                transform: "translate(95%,0)"
                            }
                        }}
                        animate={control}
                        className='w-1/2 h-10 mx-1 rounded-xl bg-white absolute left-0 z-30' ></motion.div>
                </div>
                <div className="flex max-lg:flex-col my-12 lg:flex-wrap justify-between">
                    <ReviewCard category={category} />
                </div>
            </div>
        </>
    )
}

export default Pricing
