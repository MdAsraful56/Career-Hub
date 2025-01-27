import { useLoaderData, useParams } from "react-router";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify';
import { saveJob } from "../../utlity/LocalStroage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    // console.log(job)

    const handleApplyNow = () => {
        saveJob(id);
        toast('Apply Complete !');
    }

    return (
        <div>
            <h2 className="text-center lg:text-3xl text-xl font-semibold  m-10"><span className="font-bold">Job Title : </span>{job.job_title }</h2>
            <div className="grid gap-4 lg:grid-cols-6 lg:px-28 px-3">
                <div className="lg:col-span-4 text-[#757575] font-medium space-y-5 ">
                    <p className="">
                        <span className="font-bold text-black">Job Description:</span>
                        {job.job_description}
                    </p>
                    <p className="">
                        <span className="font-bold text-black">Job Responsibility:</span>
                        {job.job_responsibility}
                    </p>
                    <p className="font-bold text-black">Educational Requirements:</p>
                    <p className="">{job.educational_requirements}</p>
                    <p className="font-bold text-black">Experiences:</p>
                    <p className="">{job.experiences}</p>
                </div>
                <div className=" lg:col-span-2 space-y-6 text-[#757575] font-semibold bg-blue-100 rounded-lg p-4">
                    <div className="space-y-3">
                        <h3 className="text-lg text-black font-bold">Job Details</h3>
                        <hr />
                        <div className="flex flex-row items-center space-x-1">
                            <AiOutlineDollar className="" />
                            <p className=" ">
                                <span className="font-bold text-black">Salary :</span>
                                {job.salary}
                            </p>
                        </div>
                        <div className="flex flex-row items-center space-x-1">
                            <IoCalendarOutline />
                            <p className="">
                                <span className="font-bold text-black">Job Title :</span>
                                {job.job_title}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-lg text-black font-bold">Contact Information</h3>
                        <hr />
                        <div className="flex flex-row items-center space-x-1">
                            <FaPhone />
                            <p className="">
                                <span className="font-bold text-black">Phone :</span>
                                {job.contact_information.phone}
                            </p>
                        </div>
                        <div className="flex flex-row items-center space-x-1">
                            <MdOutlineMailOutline />
                            <p className="">
                                <span className="font-bold text-black">Email :</span>
                                {job.contact_information.email}
                            </p>
                        </div>
                        <div className="flex flex-row  space-x-1">
                            <IoLocationOutline className="text-3xl" />
                            <p className="">
                                <span className="font-bold text-black">Address :</span>
                                {job.contact_information.address}
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <button onClick={handleApplyNow} className="btn bg-blue-500 text-white w-full">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;