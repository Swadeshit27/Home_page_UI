
import ComboUserReviewCards from './ComboUserReviewCards'
import Subheader from './Subheader'

const Testimonials = () => {
    return (
        <>
            <div className="w-full  mx-auto pt-20 " id='testimonial'>
                <Subheader title="See what our users say about us" subtitile="They already love our products 😍" />
                <ComboUserReviewCards/>
                <ComboUserReviewCards/>
                <ComboUserReviewCards/>
            </div>
        </>
    )
}

export default Testimonials
