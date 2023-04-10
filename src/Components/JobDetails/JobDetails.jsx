import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobDetails = useLoaderData()
    console.log(jobDetails)
    const { job_description, job_responsibilities, educational_requirements, experience, job_post_title, company_address, company_email, company_phone, company_name, salary_range } = jobDetails;
    const handleApplyNowClick = () => {
        const existingApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];
        
        const isJobExists = existingApplications.find(application => application.unique_id === jobDetails.unique_id);
        
        if (isJobExists) {
          alert('Job application already exists!');
          return;
        }
        
        const updatedApplications = [...existingApplications, jobDetails];
        
        localStorage.setItem('jobApplications', JSON.stringify(updatedApplications));
        
        alert('Job application added successfully!');
      };
      
      
      
      
    
    return (
        <div className=''>
            <div className='pt-11 pb-11 bg-[#F9F9FF]'>
                <h2 className='text-center text-4xl font-bold'>Job Details</h2>
            </div>
            <div className='mycontainer h-[80vh] lg:flex items-center gap-5'>
                <div className='w-full leading-10'>
                    <p className='text-gray-500'><span className='font-bold'>Job Description: </span>{job_description}</p>
                    <p className='text-gray-500'><span className='font-bold'>Job Responsibilities: </span>{job_responsibilities}</p>
                    <p className='text-gray-500'><span className='font-bold'>Educational Requirements: </span>{educational_requirements}</p>
                    <p className='text-gray-500'><span className='font-bold'>Experience: </span>{experience}</p>
                </div>
                <div className='lg:w-[50%]'>
                    <div className='bg-[#e9e2fe]  p-5 rounded-md'>
                        <h3 className='mt-5 font-semibold'>Job Details</h3>
                        <hr />
                        <div className='flex items-center mt-3'>
                            <img src="https://i.ibb.co/5v0scQJ/Frame.png" alt="notfound" />
                            <p>Salary: {salary_range}</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <img src="https://i.ibb.co/5v0scQJ/Frame.png" alt="notfound" />
                            <p>Job Title: {job_post_title}</p>
                        </div>
                        <h3 className='mt-5 font-semibold'>Contact Information</h3>

                        <div className='flex items-center mt-3'>
                            <img src="https://i.ibb.co/5v0scQJ/Frame.png" alt="notfound" />
                            <p>Phone: {company_phone}</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <img src="https://i.ibb.co/5v0scQJ/Frame.png" alt="notfound" />
                            <p>Email: {company_email}</p>
                        </div>
                        <div className='flex items-center mt-3'>
                            <img src="https://i.ibb.co/52xkvZW/Location-Icon.png" alt="" />
                            <address>
                                {company_address}
                            </address>
                        </div >

                    </div>
                    <div className='mt-5'>
                        <button onClick={ handleApplyNowClick} className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Apply Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;