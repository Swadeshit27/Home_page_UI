import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavItems } from "../assets/NavItems";
import { FromTheBlog, Others, Resources } from "../assets/FooterItems";
import { Link } from "react-router-dom";





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
                    <h1 className="sm:text-[16px] text-xl font-semibold text-black_primary mb-4">Products</h1>
                    <ul>
                        {
                            NavItems.map((item, i) => i > 3 ? "" : <li key={i} className=" max-sm:text-sm cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline">{item.href ? <a href={item.link}>{item.name}</a> : <Link to={item.link}>{item.name}</Link>}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="sm:text-[16px] text-xl font-semibold text-black_primary mb-4">Resources</h1>
                    <ul>
                        {
                            Resources.map((item, i) => <li key={i} className=" cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline max-sm:text-sm"><Link to={item.link}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div>
                    <h1 className="text-xl font-semibold text-black_primary mb-4 sm:text-[16px]">Others</h1>
                    <ul>
                        {
                            Others.map((item, i) => <li key={i} className=" cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline max-sm:text-sm"><Link to={item.link}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
                <div className="max-sm:w-[18rem] w-[20rem]">
                    <h1 className="text-xl font-semibold text-black_primary mb-4 sm:text-[16px]">From the blog</h1>
                    <ul>
                        {
                            FromTheBlog.map((item, i) => <li key={i} className=" cursor-pointer my-2 text-fadeBlack hover:text-black hover:underline max-sm:text-sm"><Link to={item.link}>{item.name}</Link></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
