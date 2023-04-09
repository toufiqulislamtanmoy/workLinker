import React from 'react';
import JoblistCard from '../JoblistCard/JoblistCard';

const JobCatagory = ({ jobList }) => {

    return (
        <div className='mt-11 mycontainer'>
            <div className='text-center '>
                <h2 className='text-3xl font-bold'>Job Category List</h2>
                <p className='my-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            {/* Job list card */}
            <div className='grid lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-5 mt-11'>
            {
                jobList.map(singleJobList => <JoblistCard 
                key={singleJobList.id}
                singleJobList={singleJobList}
                />)
            }

            </div>
        </div>
    );
};

export default JobCatagory;