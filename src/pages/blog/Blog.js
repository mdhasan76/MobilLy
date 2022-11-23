import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-4xl md:text-6xl font-medium text-white px-6 py-16  bg-gradient-to-r from-primary to-blue-500  m-3 rounded-lg'>Frequent Ask Question</h1>

            <section className='max-w-2xl mx-auto p-3'>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>Q1. What are the different ways to manage a state in a React application??</h4>
                    <div className='text-slate-600 text-lg text-justify leading-10'>State represents the value of a dynamic properties of a React component at a given instance. React provides a dynamic data store for each component. The internal data represents the state of a React component and can be accessed using this. state member variable of the component.The Five Kinds of React State to Manage:-
                        <ul className='list-disc list-inside font-bold'>
                            <li>Logical state</li>
                            <li>Server state</li>
                            <li>Form state</li>
                            <li>Navigation state</li>
                            <li>Browser state</li>
                        </ul>
                    </div>
                </div>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>Q2. How does prototypical inheritance work?</h4>
                    <p className='text-slate-600 text-lg text-justify leading-10'>Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. it is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                </div>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>Q3. What is a unit test? Why should we write unit tests?</h4>
                    <p className='text-slate-600 text-lg text-justify leading-10'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.</p>
                </div>
                <div className='my-5'>
                    <h4 className='text-3xl py-2'>4. what is node? How does node works?</h4>
                    <p className='text-slate-600 text-lg text-justify leading-10'><strong>Anguler:- </strong> Angular, developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. <br />
                        <strong>Vue:- </strong>Vue, also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company.Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage. <br />
                        <strong>React:- </strong> React, developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp).React is Similar to Vue.React is just old enough to be mature and has a huge number of contributions from the community. It has gained widespread acceptance. The job market for React is really good, and the future for this framework looks bright. React looks like a good choice for someone getting started with front-end JavaScript frameworks, startups, and developers who like some flexibility. The ability to integrate with other frameworks seamlessly gives it a great advantage for those who would like some flexibility in their code.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Blog;