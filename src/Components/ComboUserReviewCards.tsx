
import UsersReview from './UsersReview'

const ComboUserReviewCards = () => {
    return (
        <div>
            <div className='w-full overflow-hidden whitespace-nowrap my-6  review_container -z-10'>
                <div className='inline-block  whitespace-nowrap myAnimation paused '>
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
    )
}

export default ComboUserReviewCards
