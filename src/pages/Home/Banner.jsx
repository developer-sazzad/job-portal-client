import Header from "../shared/Header";
import team1 from "../../assets/banner-team-work1.jpg"
import team2 from "../../assets/banner-team-work2.jpg"
import { easeInOut, easeOut, motion } from "framer-motion"

const Banner = () => {
    return (
        <div className="banner-background">
            <Header></Header>


            <div class="container mx-auto items-center overflow-visible">
                <div class="flex gap-10 justify-center items-center flex-col py-32 lg:flex-row-reverse">
                    <div className="flex-1">
                        <div className="flex flex-col justify-center">
                            <motion.img
                                animate={{ y: [-50, 50, -50] }}
                                transition={{ duration: 10, ease: easeInOut, repeat: Infinity }}
                                src={team1}
                                class="max-w-md rounded-t-[50px] rounded-br-[50px] border-b-8 border-l-8 border-blue-600 shadow-2xl" />
                            <motion.img
                                animate={{ x: [120, 200, 120] }}
                                transition={{ duration: 10, delay: 0.5, ease: easeOut, repeat: Infinity }}
                                src={team2}
                                class="max-w-md -mt-16 rounded-t-[50px] rounded-br-[50px] border-b-8 border-l-8 border-blue-600 shadow-2xl" />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h1 class="text-6xl font-bold">The <motion.span
                            animate={{ color: ['#002bff', '#04ff00', '#ff002b'] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="bg-linear-to-t from-[#DFE7FC] px-4"
                        >Easiest Way
                        </motion.span>
                            <br /> to Get Your New Job</h1>
                        <p class="py-6 text-2xl">
                            Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day
                        </p>
                        <div className="flex">
                            <input className="input" type="text" placeholder="input" />
                            <input className="input" type="text" placeholder="input" />
                            <input className='btn' type="submit" value="Search" />
                        </div>
                        <p className="py-5">Popular Searches: Content Writer , Finance , Human Resource , Management</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;