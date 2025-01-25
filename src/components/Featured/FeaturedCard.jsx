import PropTypes from 'prop-types'; // ES6
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router';



const FeaturedCard = ({ job }) => {
    const { id, company_name, job_title, job_type, location, logo, remote_or_onsite, salary } = job;
    // console.log(job);
    return (
        <div className="border border-gray-400 text-left space-y-2 p-5 rounded-2xl">
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
            
            <Link to={`/job/${id}`}>
                <button className="btn bg-blue-500 font-semibold text-white text-sm rounded-sm ">View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedCard;


FeaturedCard.propTypes = {
    job: PropTypes.object
}