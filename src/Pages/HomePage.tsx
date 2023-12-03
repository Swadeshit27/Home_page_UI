
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Discover from '../Components/Discover'
import FeaturesCard from '../Components/FeaturesCard'
import Testimonials from '../Components/Testimonials'
import Pricing from '../Components/Pricing'
import FaqSection from '../Components/FaqSection'
import ButtomSection from '../Components/ButtomSection'
import Footer from '../Components/Footer'
import { motion, Variants } from "framer-motion"

export const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const HomePage = () => {
    return (
        <div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="w-full  h-[87vh] mt-20 overflow-y-scroll">
                <Navbar />
                <Header props={cardVariants} />
                <Discover />
                <FeaturesCard />
                <Testimonials />
                <Pricing />
                <FaqSection />
                <ButtomSection />
                <Footer />
            </motion.div>
        </div>
    )
}

export default HomePage
