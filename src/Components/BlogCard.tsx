import React from 'react'
import { BlogItemsType } from '../Types'
import { useNavigate } from 'react-router-dom';


const BlogCard = ({ props }: { props: BlogItemsType }) => {
    const { id, title, postImage, description, postUserImage, postUserName, postTime } = props;
    const navigate = useNavigate();
    return (
        <>
            <div className='w-[24rem] min-h-[20rem] cursor-pointer mb-6 sm:me-4 ' key={id} onClick={() => navigate(`/blog/${id}`)}>
                <div className='w-full h-[15rem] rounded-2xl overflow-hidden '>
                    <img src={postImage} alt="template" className='w-full h-full object-cover' />
                </div>
                <h1 className=' text-xl md:text-2xl font-semibold text-black_primary my-4'>{title}</h1>
                <div className='w-full flex justify-between items-center' >
                    <div className='flex items-center' >
                        <img src={postUserImage} alt="photo" className='w-8 h-8 rounded-full object-cover' />
                        <h1 className=' text-fadeBlack font-medium ms-3 max-sm:text-sm'>{postUserName}</h1>
                    </div>
                    <p className=' text-fadeBlack font-medium max-sm:text-sm'>{postTime}</p>
                </div>
                <h4 className='text-fadeBlack my-4 max-sm:text-[16px]'>{description}</h4>
            </div>
        </>
    )
}

export default BlogCard
