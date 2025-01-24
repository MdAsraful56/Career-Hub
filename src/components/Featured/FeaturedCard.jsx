import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";



const FeaturedCard = ({ job }) => {
    const { company_name, educational_requirements, experiences, id, job_description, job_responsibility, job_title, job_type, location, logo, remote_or_onsite, salary,  contact_information  } = job;
    console.log(job)
    return (
        <div className="border-2 text-left space-y-2 p-5 rounded-2xl">
            <img className="mt-5" src={logo} alt="" />
            <h3 className="text-2xl font-semibold">{job_title}</h3>
            <p className="text-[#757575] text-lg">{company_name}</p>
            <div className="flex flex-row gap-3">
                <button className="text-[#7E90FE] btn border-[#7E90FE] font-semibold">{remote_or_onsite}</button>
                <button className="text-[#7E90FE] btn border-[#7E90FE] font-semibold">{job_type}</button>
            </div>
            <div className="flex flex-row gap-8 text-[#757575]">
                <div className="flex flex-row items-center space-x-2">
                    <CiLocationOn className="text-base" />
                    <p className="">{location}</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <AiOutlineDollarCircle className="text-base" />
                    <p className="">{salary}</p>
                </div>
            </div>
            <button className="btn bg-blue-500 ">View Details</button>
        </div>
    );
};

export default FeaturedCard;