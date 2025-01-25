import { useLoaderData, useParams } from "react-router";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    return (
        <div>
            <h2 className="text-center text-4xl m-10">JOB</h2>
            <div className="grid gap-4 md:grid-cols-4 md:px-40 px-8">
                <div className=" md:col-span-3 text-[#757575] font-medium space-y-5 ">
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
                <div className=" md:col-span-1">
                    <div className="space-y-3">
                        <h3 className="text-xl">Job Details</h3>
                        <hr />
                        <div className="flex flex-row items-center space-x-1">
                            <AiOutlineDollar className="" />
                            <p className=" ">
                                <span className="font-bold">Salary :</span>
                                {job.salary}
                            </p>
                        </div>
                        <div className="flex flex-row items-center space-x-1">
                            <IoCalendarOutline />
                            <p className="">
                                <span className="font-bold">Job Title :</span>
                                {job.job_title}
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h3 className="text-xl">Contact Information</h3>
                        <hr />
                        <div className="flex flex-row items-center space-x-1">
                            <FaPhone />
                            <p className="">
                                <span className="font-bold">Phone :</span>
                                {job.contact_information.phone}
                            </p>
                        </div>
                        <div className="flex flex-row items-center space-x-1">
                            <MdOutlineMailOutline />
                            <p className="">
                                <span className="font-bold">Email :</span>
                                {job.contact_information.email}
                            </p>
                        </div>
                        <div className="flex flex-row items-center space-x-1">
                            <IoLocationOutline />
                            <p className="">
                                <span className="font-bold">Address :</span>
                                {job.contact_information.address}
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <button className="btn w-full">Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;