
import { FaStar } from "react-icons/fa";

const UsersReview = () => {
    return (
        <>
            <div className='w-[20rem] sm:w-[30rem] max-sm:h-auto h-[12rem] bg-white rounded-2xl p-4 mx-4 inline-block  -z-10   '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src="https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png" alt="user photo" className='w-8 h-8 sm:w-10 sm:h-10 rounded-full ' />
                        <h1 className=' max-sm:text-sm font-semibold text-black_primary ms-2'>“Highly recommend”</h1>
                    </div>
                    <div className='flex text-yellow-400'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <p className=' w-full text-fadeBlack whitespace-normal my-3 max-sm:text-sm  '>This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.</p>
                <div className='flex justify-between items-center'>
                    <h1 className='font-medium text-black_primary'>Sophie Devilan</h1>
                    <h1 className='text-fadeBlack'>Entrepreneur</h1>
                </div>
            </div>
        </>
    )
}

export default UsersReview
