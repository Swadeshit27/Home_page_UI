import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BlogCard from '../Components/BlogCard'
import { BlogItems } from '../assets/BlogItem'


const BlogPage = () => {
    return (
        <>
            <div
                className="w-full  h-[87vh] mt-20 overflow-y-scroll">
                <Navbar />
                <div className='w-full max-w-[1200px] mx-auto py-20 max-lg:p-6'>
                    <div className='w-full lg:w-2/5 mx-auto flex flex-col justify-center items-center'>
                        <h1 className=' text-4xl font-bold md:text-6xl text-black_primary py-6'>Milton blog</h1>
                        <h4 className='font-medium text-[16px] md:text-xl text-fadeBlack text-center'>All you need to start using our incredible tool correctly. And nothing else.</h4>
                    </div>
                    <div className='flex flex-wrap max-xl:justify-center item-center my-8  md:my-20'>
                        {
                            BlogItems.map(item => <BlogCard props={item} />)
                        }
                    </div>
                </div>
                <Footer />
            </div >
        </>
    )
}

export default BlogPage
