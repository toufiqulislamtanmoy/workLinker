import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#F9F9FF]'>
            <div className='mycontainer lg:grid lg:grid-cols-2 lg:items-center'>
                <div className='lg:col-start-1 lg:col-end-2'>
                    <h2 className='text-5xl font-bold tracking-wider'>Bringing Your Vision to Reality, One Step Closer to Your <span className='text-[#7E90FE]'>Dream Job</span></h2>
                    <p className='mt-5'>Having a clear vision of your dream job and taking actionable steps towards it is essential to turn it into a reality. This involves setting specific goals, networking, gaining relevant education or training, building a portfolio or resume, and actively seeking out job opportunities that align with your vision. It requires perseverance and determination, but with the right mindset and approach, you can overcome any obstacle and make your dream job a reality.</p>

                    

                </div>
                <div className=''>
                    <img src="https://i.ibb.co/Y2xTLSv/P3-OLGJ1-copy-1.png" alt="not found" />
                </div>
            </div>


        </div>
    );
};

export default Banner;