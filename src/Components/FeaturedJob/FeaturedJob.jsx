import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatureJobCard from '../FeatuteJobCard/FeatureJobCard';

const FeaturedJob = () => {
  const [jobPost, setJobpost] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('featuredJob.json')
      .then((res) => res.json())
      .then((data) => {
        setJobpost(data.job_posts);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleSeeAll = () => {
    setShowAll(true);
  };

  const handleSeeLess = () => {
    setShowAll(false);
  };

  const displayJobPosts = () => {
    if (showAll) {
      return jobPost.map((singleJobPost) => (
        <FeatureJobCard key={singleJobPost.unique_id} singleJobPost={singleJobPost} />
      ));
    } else {
      return jobPost.slice(0, 4).map((singleJobPost) => (
        <FeatureJobCard key={singleJobPost.unique_id} singleJobPost={singleJobPost} />
      ));
    }
  };

  return (
    <div className='mt-11 mycontainer'>
      <div className='text-center '>
        <h2 className='text-3xl font-bold'>Featured Jobs </h2>
        <p className='my-3'>
          Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      {/* Featured Job Card*/}
      <div className='grid lg:grid-cols-2 items-center justify-center gap-5 mt-11'>
        {displayJobPosts()}
      </div>
      <div className='text-center'>
        {showAll ? (
          <button
            className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleSeeLess}
          >
            See Less
          </button>
        ) : (
          <button
            className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            onClick={handleSeeAll}
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedJob;
