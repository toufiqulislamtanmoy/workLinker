import React from 'react';

const JoblistCard = ({singleJobList}) => {
    const {title,log,available_jobs} = singleJobList;
    return (
        <>
            <div className="cardLayout bg-[#f6effb]">
                <img className="w-10 ml-5  mt-5" src={log} alt="Card" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-500 text-base">{available_jobs}</p>
                </div>
            </div>
        </>
    );
};

export default JoblistCard;