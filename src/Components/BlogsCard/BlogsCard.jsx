import React, { useState, useEffect } from 'react';

const BlogsCard = ({ singleBlogs }) => {
    const { id, question, answer, image } = singleBlogs;
    const [showAll, setShowAll] = useState(false);
    const [shortAnswer, setShortAnswer] = useState('');

    useEffect(() => {
        if (answer.length > 30) {
            setShortAnswer(answer.slice(0, 30) + '...');
        } else {
            setShortAnswer(answer);
        }
    }, [answer]);

    const toggleAnswer = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <div className="w-full md:w-1/2 lg:w-1/2 px-4 py-6">
                <div className="bg-white shadow-lg hover:shadow-xl rounded-lg overflow-hidden">
                    <img className="w-full h-48 object-cover" src={image} alt="Blog 1" />
                    <div className="py-4 px-6">
                        <h2 className="text-lg font-semibold text-gray-800">{question}</h2>
                        <p className="mt-2 text-gray-600">{showAll ? answer : shortAnswer}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-500">April 10, 2023</span>
                            <span className="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-500" onClick={toggleAnswer}>
                                {showAll ? 'Read less' : 'Read more'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogsCard;
