import bannerImg from "../../assets/images/user.png"
// import {bg1} from "../../assets/images/bg1.png"
// import {bg2} from "../../assets/images/bg2.png"

const Banner = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between bg-[#97a8f536] pt-14 px-5 lg:px-24 lg:gap-12 gap-5">
            <div className="lg:w-1/2 space-y-2">
                <h1 className="text-6xl font-semibold leading-16 ">
                    One Step <br />
                    Closer To Your <br />
                    <span className="text-blue-500"> Dream Job</span>
                </h1>
                <p className="text-[#757575] ">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn rounded-lg bg-blue-500 text-white text-base">Get Started</button>
            </div>
            <div className="lg:w-1/2 w-full">
                <img src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;