
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Discover from '../Components/Discover'
import FeaturesCard from '../Components/FeaturesCard'
import Testimonials from '../Components/Testimonials'
import Pricing from '../Components/Pricing'
import FaqSection from '../Components/FaqSection'
import ButtomSection from '../Components/ButtomSection'
import Footer from '../Components/Footer'
import { motion } from "framer-motion"



const HomePage = () => {
    return (
        <div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className="w-full  h-screen pt-20 overflow-y-scroll">
                <Navbar />
                <Header  />
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
