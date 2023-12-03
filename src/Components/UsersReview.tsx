
import { FaStar } from "react-icons/fa";

const UsersReview = () => {
    return (
        <>
            <div className=' w-[30rem]  h-[12rem] bg-white rounded-2xl p-4 mx-4 inline-block    '>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <img src="https://framerusercontent.com/images/2fFFaPF5ZAByC4EYJKR5YVw5yw.png" alt="user photo" className='w-10 h-10 rounded-full ' />
                        <h1 className='font-semibold text-black_primary ms-2'>“Highly recommend”</h1>
                    </div>
                    <div className='flex text-yellow-400'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <p className=' w-full text-fadeBlack whitespace-normal my-3  '>This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.</p>
                <div className='flex justify-between items-center'>
                    <h1 className='font-medium text-black_primary'>Sophie Devilan</h1>
                    <h1 className='text-fadeBlack'>Entrepreneur</h1>
                </div>
            </div>
        </>
    )
}

export default UsersReview
