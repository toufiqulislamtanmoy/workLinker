import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobsCards = ({ singleExistingApplication }) => {
    const {company_address, company_logo, job_post_title, company_name, job_type, job_location, salary_range,unique_id } = singleExistingApplication;
    return (
        <>
            <div className='flex  items-center justify-between cardLayout px-4 py-3 mb-5'>
                <div className='flex items-center gap-5'>
                    <div className='w-28'>
                        <img src={company_logo} alt="notfound" />
                    </div>
                    <div>
                        <h2>{job_post_title}</h2>
                        <h4>{company_name}</h4>
                        <div className='mt-5 gap-5 flex'>
                            <button className='outline px-5 py-1 rounded-sm text-[#7E90FE] hover:text-[#9873FF]'>{job_location}</button>
                            <button className='outline px-5 py-1 rounded-sm text-[#7E90FE] hover:text-[#9873FF]'>{job_type}</button>
                        </div>
                        <div className='flex gap-5  items-center mt-5'>
                            <div className='flex items-center'>
                                <img src="https://i.ibb.co/52xkvZW/Location-Icon.png" alt="" />
                                <address>
                                    {company_address}
                                </address>
                            </div >

                            <div className='flex items-center'>
                                <img src="https://i.ibb.co/5v0scQJ/Frame.png" alt="notfound" />
                                <p>Salary: {salary_range}</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className='mt-8'>
                    <Link to={`/jobDetails/${unique_id}`} className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>View Details</Link>
                </div>
            </div>

        </>
    );
};

export default AppliedJobsCards;