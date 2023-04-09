import React from 'react';
import Banner from '../Banner/Banner';
import JobCatagory from '../JobCatagory/JobCatagory';
import { useLoaderData } from 'react-router-dom';
import FeaturedJob from '../FeaturedJob/FeaturedJob';


const Home = () => {
    const jobList = useLoaderData();
    return (
        <div>
            <Banner />
            <JobCatagory
                key={jobList.jobs.id}
                jobList={jobList.jobs}
            />
            <FeaturedJob/>
        </div>
    );
};

export default Home;