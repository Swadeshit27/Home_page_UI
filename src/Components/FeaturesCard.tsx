
import { CardVariant } from '../Utils/motion';
import { FeaturesCardItems } from '../assets/FeatureCardItem'
import Subheader from './Subheader';
import { motion } from "framer-motion"

const FeaturesCard = () => {
    return (
        <>
            <div className="w-full p-6 max-w-[1200px] mx-auto pt-10 sm:pt-20 " id="features">
                <Subheader title="Our features to make your life easier" subtitile="And so much more... 💼" />
                <div className="flex my-12 max-lg:flex-col max-lg:justify-center  max-lg:items-center flex-wrap justify-between">
                    {
                        FeaturesCardItems.map((item, i) => {
                            const { cardImage, cardHeader, cardHeaderBgColor, cardDescription } = item;
                            return (
                                <motion.div
                                    initial={"hidden"}
                                    whileInView={"show"}
                                    viewport={{ once: true }}
                                    variants={CardVariant}
                                    className=" w-[18rem] mx-auto sm:w-[23rem] h-[25rem] mb-16" key={i}>
                                    <div className="w-full h-[15rem] bg-[#F1F2F4] rounded-2xl p-8">
                                        <img src={cardImage} alt="calender1" className="w-full object-contain h-full" />
                                    </div>
                                    <div className="my-8">
                                        <span className={`px-4 py-2 font-semibold rounded-full ${cardHeaderBgColor} text-[#2E2E2E] `}>{cardHeader}</span>
                                        <h1 className="font-medium text-[rgb(107,107,120)] mt-6">{cardDescription}</h1>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FeaturesCard
