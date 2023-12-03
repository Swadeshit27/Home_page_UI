import { useState } from 'react'
import Subheader from './Subheader'
import { BsPlusCircleFill } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import { FaqItems } from '../assets/FaqItems';
import {motion} from "framer-motion"

const FaqSection = () => {
    const [open, setOpen] = useState({
        id: -1,
        status: false
    })
    return (
        <>
            <div className="w-full max-w-[1200px] mx-auto pt-20 " id='faqs'>
                <Subheader title="Frequently asked questions" subtitile="Relevant stuff, bla bla 📣" />

                {
                    FaqItems.map((item, i) => {
                        const { question, answer } = item;
                        return (
                            <motion.div layout transition={{duration:.3, ease:"linear"}} className="w-4/5 mx-auto min-h-12 bg-gray_primary flex flex-col py-2  px-8 rounded-xl mt-8 cursor-pointer" key={i} onClick={() => setOpen({ id: i, status: !open.status })}>
                                <div className='flex justify-between items-center w-full h-16 ' >
                                    <h1 className="font-semibold text-[16px] sm:text-xl text-black_primary">{question}</h1>
                                    {
                                        open.id == i && open.status ? <FaCircleMinus className={"text-2xl text-fadeBlack "} /> : <BsPlusCircleFill size={25}  className={"mx-2 text-fadeBlack "} />
                                    }
                                </div>
                                {
                                    open.id == i && open.status && (
                                        <>
                                            <p className="font-medium text-fadeBlack pb-3">{answer}</p>
                                        </>
                                    )
                                }
                            </motion.div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FaqSection
