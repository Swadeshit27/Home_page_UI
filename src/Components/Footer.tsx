import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavItems } from "../assets/NavItems";
import { NavItemType } from "../Types";


const Others: NavItemType[] = [
    {
        name: "Privacy",
        link: "/"
    },
    {
        name: "Terms",
        link: "/"
    },
    {
        name: "Affiliation",
        link: "/"
    },
    {
        name: "Press",
        link: "/"
    },
]
const Resources: NavItemType[] = [
    {
        name: "Change log",
        link: "/"
    },
    {
        name: "Help center",
        link: "/"
    },
    {
        name: "Blog",
        link: "/"
    },
    {
        name: "Contact",
        link: "/"
    },
]
const FromTheBlog: NavItemType[] = [
    {
        name: "Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life",
        link: "/"
    },
    {
        name: "Organizing Your Calendar for Enhanced Productivity and Focus",
        link: "/"
    },
    {
        name: "The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks",
        link: "/"
    },
    {
        name: "Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar",
        link: "/"
    },
]


const Footer = () => {
    return (
        <div className="w-full min-h-[20rem] bg-gray_primary">
            <div className="w-full max-w-[1300px] mx-auto h-full p-8 flex max-sm:flex-col justify-between flex-wrap">
                <div className="w-[14rem]">
                    <h1 className="text-xl font-semibold text-black_primary mb-4">Milton</h1>
                    <p className=" my-2 text-fadeBlack ">A short text explaining why my startup is so cool</p>
                    <p className=" mt-4 text-fadeBlack ">© My super start-up</p>
                    <ul className="flex  w-full my-6">
                        <li className=" cursor-pointer me-4 w-10 h-10 bg-blue-400 text-white text-xl  rounded-full flex justify-center items-center"><FaTwitter /></li>
                        <li className=" cursor-pointer w-10  me-4 h-10 bg-blue-800 text-white text-xl  rounded-full flex justify-center items-center"><FaFacebook /></li>
                        <li className=" cursor-pointer w-10 h-10 bg-blue-800 text-white text-xl  rounded-full flex justify-center items-center"><FaLinkedin /></li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-black_primary mb-4">Products</h1>
                    <ul>
                        {
                            NavItems.map((item, i) => i > 3 ? "" : <li key={i} className=" cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline">{item.name}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-black_primary mb-4">Resources</h1>
                    <ul>
                        {
                            Resources.map((item, i) => <li key={i} className=" cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline">{item.name}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-black_primary mb-4">Others</h1>
                    <ul>
                        {
                            Others.map((item, i) => <li key={i} className=" cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline">{item.name}</li>)
                        }
                    </ul>
                </div>
                <div className="w-[20rem]">
                    <h1 className="text-xl font-semibold text-black_primary mb-4">From the blog</h1>
                    <ul>
                        {
                            FromTheBlog.map((item, i) => <li key={i} className=" cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline">{item.name}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
