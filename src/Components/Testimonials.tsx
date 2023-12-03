
import Subheader from './Subheader'
import UsersReview from './UsersReview'
import { motion } from "framer-motion"

const Testimonials = () => {
    return (
        <>
            <div className="w-full  mx-auto pt-20 " id='testimonial'>
                <Subheader title="See what our users say about us" subtitile="They already love our products 😍" />
                <div className='w-full overflow-hidden whitespace-nowrap my-6  review_container'>
                    <motion.div className='inline-block  whitespace-nowrap myAnimation paused '>
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                    </motion.div>
                    <div className=' inline-block whitespace-nowrap myAnimation paused'>
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                    </div>
                </div>
                <div className='w-full overflow-hidden whitespace-nowrap my-6 review_container'>
                    <div className='inline-block  whitespace-nowrap myAnimation paused  '>
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                    </div>
                    <div className=' inline-block whitespace-nowrap myAnimation paused '>
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                    </div>
                </div>
                <div className='w-full overflow-hidden whitespace-nowrap my-6 review_container'>
                    <div className='inline-block  whitespace-nowrap myAnimation paused'>
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                    </div>
                    <div className=' inline-block whitespace-nowrap myAnimation paused'>
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                        <UsersReview />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials
