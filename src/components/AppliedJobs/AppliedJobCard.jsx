import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from 'react-router';

const AppliedJobCard = ({ job }) => {
    // console.log(job);
    const { id, company_name, job_title, job_type, location, logo, remote_or_onsite, salary } = job;
    return (
        <div className="border border-gray-400 text-left space-y-2 p-5 rounded-xl flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col lg:flex-row gap-7">
                <div className="rounded-xl p-8 flex justify-center items-center bg-gray-200">
                    <img className="mt-5 w-32" src={logo} alt="" />
                </div>
                <div className="space-y-2">
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
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className="btn bg-blue-500 font-semibold text-white text-sm rounded-sm ">View Details</button>
            </Link>
        </div>
    );
};

export default AppliedJobCard;

AppliedJobCard.propTypes = {
    job: PropTypes.object
}