import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppliedJobsCards from '../AppliedJobsCards/AppliedJobsCards';

const AppliedJobs = () => {
    const existingApplications = JSON.parse(localStorage.getItem('jobApplications')) || [];

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(`Selected option: ${event.target.value}`);
    }

    // Filter applications based on selected option
    const filteredApplications = selectedOption === 'remote'
        ? existingApplications.filter((application) => application.job_location === 'Remote')
        : selectedOption === 'onsite'
            ? existingApplications.filter((application) => application.job_location === 'Onsite')
            : existingApplications;

    return (
        <>
            <div className='pt-11 pb-11 bg-[#F9F9FF]'>
                <h2 className='text-center text-4xl font-bold'>Applied Jobs</h2>
            </div>

            <div className='mycontainer'>
                <div className='flex justify-end mb-4 '>
                    <select className='bg-[#F4F4F4] p-2 border-0 outline-none rounded-md' onChange={handleOptionChange}>
                        <option value=''>Sort by</option>
                        <option value='remote'>Sort by Remote</option>
                        <option value='onsite'>Sort by Onsite</option>
                    </select>
                </div>
                <div className='mt-11'>
                    {filteredApplications.length > 0 ? (
                        filteredApplications.map((singleExistingAplication) => (
                            <AppliedJobsCards
                                key={singleExistingAplication.unique_id}
                                singleExistingApplication={singleExistingAplication}
                            ></AppliedJobsCards>
                        ))
                    ) : (
                        <p className='text-center'>No results found for selected option</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default AppliedJobs;
