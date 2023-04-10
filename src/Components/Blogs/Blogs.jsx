import React from 'react';
import { Link } from 'react-router-dom';
import BlogsCard from '../BlogsCard/BlogsCard';

const Blogs = () => {
    const blogs = [
        {
          id: 1,
          question: "When should we use Context API?",
          answer: "Context API is a powerful feature in React that allows you to share data across the entire component tree without manually passing props down the hierarchy. You should consider using Context API when you need to pass data to multiple nested components that are not direct descendants, or when you have many intermediate components that don't require the data but only pass it down to their children. It can also be useful when the data needs to be consumed by many components across the app. However, it's important to use Context API judiciously, as overusing it can make your code harder to maintain and debug.",
          image: "https://i.ibb.co/9NNzp1G/contex-api.png"
        },
        {
          id: 2,
          question: "What is a custom hook?",
          answer: "Custom hooks are a way to reuse functionality in React applications by encapsulating it in a function. They allow developers to extract common logic from components and reuse it across the application. By doing this, code becomes more modular and easier to maintain. Custom hooks can be created for any functionality that needs to be shared across multiple components, such as fetching data from an API, handling form submissions, or managing state. With custom hooks, developers can write more reusable code and avoid duplicating the same logic in multiple components.",
          image: "https://i.ibb.co/fGcG5kR/custom-hook.png"
        },
        {
          id: 3,
          question: "What is useRef?",
          answer: "'useRef' is a hook provided by React that allows you to create a mutable variable that persists across component renders. It returns a single mutable ref object that contains a current property, which is initialized to the argument passed to 'useRef'. The current property can be used to store any value, similar to an instance property on a class. One of the main use cases of 'useRef' is to access DOM elements or store references to other components. It's important to note that 'useRef' does not cause a re-render when its value changes, which makes it a useful tool for optimizing performance by avoiding unnecessary re-renders.",
          image: "https://i.ibb.co/0q5Zbjc/ureRef.png"
        },
        {
          id: 4,
          question: "What is useMemo?",
          answer: "'useMemo' is a React Hook that is used for performance optimization by memoizing the result of a function. When you use 'useMemo', React will only recompute the memoized value when one of the dependencies has changed, rather than recomputing it on every render. This can help to reduce unnecessary re-renders of your components and improve the overall performance of your application. Use 'useMemo' when you have expensive calculations that do not need to be computed on every render or when you want to avoid expensive rendering operations.",
          image: "https://i.ibb.co/DVzd7yz/useMemo.jpg"
        }
      ];
      
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap -mx-4">
                {
                    blogs.map(singleBlogs=> <BlogsCard 
                    key={singleBlogs.id}
                    singleBlogs={singleBlogs}
                    />)
                }
            </div>
        </div>

    );
};

export default Blogs;