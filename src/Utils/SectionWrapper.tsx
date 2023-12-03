import { motion } from "framer-motion";

import { styles } from "../Style";
import { staggerContainer } from "./motion";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.paddingX} max-w-7xl mx-auto relative z-0 pt-[100px]`}
                id={idName}
            >
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;