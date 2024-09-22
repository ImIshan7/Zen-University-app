import {Component} from "react";
import './custom.css';
import about from '../images/location/about01.jpg';
import e from '../images/location/05a.jpg';
import ambuluwawa from '../images/location/uniback.jpg';
import diyaluma from '../images/location/02.jpg';
import meemure from '../images/location/03.jpg';
import ella from '../images/location/04.jpg';
import forest from '../images/location/05.png';
import hotain from '../images/location/uniback01.jpg';
import db from '../images/location/db.jpg';
import ins from '../images/location/ins.jpg';
import data from '../images/location/Data Analysis.jpg';
import man from '../images/location/Management.jpg';
import work from '../images/location/workspace.jpg';


export class Home extends Component {

    render() {


        return (
            <div>

                <main id="home" className="dark:bg-sky-500 bg-white h-screen">


                    <header  className="h-18 sm:h-30 flex items-center z-30 ">

                        <div id="post" className="fixed top-0 w-full bg-sky-500 border-b-transparent text-black  font-bold font-mono shadow-md
 text-4xl py-4 z-50">
                            <div className="container mx-auto px-6 flex items-center justify-between">
                                ZEN University
                            </div>



                        <div className="flex items-center">
                                <nav
                                    className="font-sen text-indigo-100 dark:text-white uppercase text-lg lg:flex items-center hidden  rounded-md">
                                    <div id="post" className="flex items-center justify-between container mx-auto px-4">
                                        <div className="flex space-x-4">
                                            <a href="#home"
                                               className="py-2 px-6 flex font-semibold leading-none rounded-full hover:bg-black">
                                                Home
                                            </a>
                                            <a href="#about"
                                               className="py-2 px-6 flex font-semibold leading-none rounded-full hover:bg-black">
                                                About
                                            </a>
                                            <a href="#courses"
                                               className="py-2 px-6 flex font-semibold leading-none rounded-full hover:bg-black">
                                                Courses
                                            </a>
                                            <a href="#gallery"
                                               className="py-2 px-6 flex font-semibold leading-none rounded-full hover:bg-black">
                                                Gallery
                                            </a>
                                            <a href="#contact"
                                               className="py-2 px-6 flex font-semibold leading-none rounded-full hover:bg-black">
                                                Contact
                                            </a>
                                        </div>
                                    </div>
                                </nav>
                                <button className="lg:hidden flex flex-col ml-4">
                                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                                    <span className="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
                                </button>
                            </div>


                        </div>
                    </header>


                    <div className="relative bg-gradient-to-r  from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
                        <div className="absolute inset-0">
                            {/*<img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />*/}
                            <img
                                className="
                                  object-cover object-center w-full h-full duration-500 hover:scale-105 hover:shadow-xl"
                                src={hotain}/>
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                        </div>

                        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                            <h1 className="text-5xl font-bold leading-tight mb-4 font-bold font-mono">Empowering Future Leaders Through Excellence</h1>
                            <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
                            <a href="#contact" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Contact Us</a>
                        </div>
                    </div>



                    <div id="about" className="sm:flex items-center max-w-screen bg-indigo-100">
                        <div className="sm:w-1/2 p-10">
                            <div className="image object-center text-center">
                                <img
                                    className="rounded-md object-cover w-10/12 h-96 object-center  duration-500 hover:scale-105 hover:shadow-xl"
                                    src={about}/>
                            </div>
                        </div>

                        <div id="about" className="sm:w-1/2 pb-48 pop-in">
                            <div className="text mt-28 mr-24">
                                <span className="text-white text-5xl font-bold"></span>
                                <h2 className="my-4 font-Roboto font-bold font-mono text-2xl sm:text-4xl animate-slide-fade-in-delay ">
                                    About <span className="text-sky-500">Zen University</span>
                                </h2>
                                <p className="text-black font-medium text-lg font-poppins animate-slide-fade-in">
                                    At Zen University, we believe that education is the cornerstone of progress. Our app
                                    is designed to bridge the gap between students, faculty, and resources, making
                                    learning more accessible, engaging, and efficient.
                                </p>

                                <h2 className="my-4 font-bold font-mono text-3xl sm:text-4xl animate-slide-fade-in-delay ">
                                    Our <span className="text-sky-500">Vision</span>
                                </h2>
                                <p className="text-black font-medium text-lg animate-slide-fade-in">
                                    Our mission is to provide students, faculty, and administration with an all-in-one
                                    platform that simplifies educational processes. We aim to create a digital ecosystem
                                    where every user can focus on learning, teaching, and growing without the usual
                                    hassles.
                                </p>
                            </div>
                        </div>


                    </div>

                    <section className="w-full p-10 md:py-20 bg-indigo-100">
                        <section className="relative px-10 md:px-0 transform duration-500 hover:shadow-2xl cursor-pointer hover:-translate-y-1">
                            <img
                                className="w-full xl:max-w-full duration-500 hover:scale-105 hover:shadow-xl"
                                src={hotain}
                                alt=""
                            />
                            <div className="content bg-white p-2 pt-8 md:p-12 pb-12 lg:max-w-lg w-full lg:absolute top-48 right-5">
                                <div className="flex justify-between font-bold text-sm">
                                    <p className="text-gray-400"></p>
                                </div>
                                <h2 className="text-3xl font-semibold mt-4 md:mt-10">Why Choose Us?</h2>
                                <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
                                    At Zen University, we believe in a holistic approach to education. With world-class faculty,
                                    state-of-the-art facilities, and a vibrant student community, we offer an environment
                                    that fosters creativity, innovation, and excellence.
                                </p>
                                <button className="mt-2 md:mt-5 p-3 px-5 bg-black text-white font-bold text-sm hover:bg-purple-800">
                                    Read More
                                </button>
                            </div>
                        </section>
                    </section>



                    <div id="courses" className=" max-w-screen  px-2 bg-indigo-100">

                        <div className="flex justify-center text-5xl md:text-4xl font-bold font-mono  mb-4 text-black">
                            Courses
                        </div>


                        <section
                            className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4 cursor-pointer">
                            <div className="flex flex-wrap">
                                {/* Item 1 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                    <div
                                        className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <img className="w-full h-64 object-cover" src={ins} alt="Nature scene"/>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-1xl font-bold mb-2 text-gray-800">Introduction to
                                                Computer Science</h2>
                                            <p className="text-gray-600 mb-4">Dive into the fundamentals of computing,
                                                algorithms, and programming.
                                                This course covers basic programming languages, data structures, and
                                                problem-solving
                                                techniques.Dive into the fundamentals of computing,
                                                algorithms.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                    <div
                                        className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <img className="w-full h-64 object-cover" src={db} alt="Nature scene"/>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-1xl font-bold mb-2 text-gray-800">Introduction Data
                                                Structures</h2>
                                            <p className="text-gray-600 mb-4">Dive into the fundamentals of computing,
                                                algorithms, and programming.
                                                This course covers basic programming languages, data structures, and
                                                problem-solving
                                                techniques, perfect for beginners looking to build a solid foundation in
                                                technology.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                    <div
                                        className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <img className="w-full h-64 object-cover" src={data} alt="Nature scene"/>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-1xl font-bold mb-2 text-gray-800"> Introduction
                                                Algorithm Design</h2>
                                            <p className="text-gray-600 mb-4">Dive into the fundamentals of computing,
                                                algorithms, and programming.
                                                This course covers basic programming languages, data structures, and
                                                problem-solving
                                                techniques, perfect for beginners looking to build a solid foundation in
                                                technology.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-4 cursor-pointer">
                            <div className="flex flex-wrap">
                                {/* Item 1 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                    <div
                                        className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <img className="w-full h-64 object-cover" src={man} alt="Nature scene"/>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-1xl font-bold mb-2 text-gray-800">Business
                                                Management </h2>
                                            <p className="text-gray-600 mb-4"> Gain insights into the core principles of
                                                business management.
                                                This course covers leadership strategies, marketing, financial planning,
                                                and organizational behavior, equipping you with the skills to manage and
                                                grow a business.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                    <div
                                        className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <img className="w-full h-64 object-cover" src={work} alt="Nature scene"/>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-1xl font-bold mb-2 text-gray-800">Digital Marketing
                                                Strategy</h2>
                                            <p className="text-gray-600 mb-4">Learn the key tools and techniques to
                                                build, analyze, and optimize digital marketing
                                                campaigns. This course explores SEO, content marketing, social media
                                                strategies,
                                                and analytics to help you grow an online presence.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
                                    <div
                                        className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:scale-105">
                                        <div className="relative">
                                            <img className="w-full h-64 object-cover" src={e} alt="Nature scene"/>
                                        </div>
                                        <div className="p-6">
                                            <h2 className="text-1xl font-bold mb-2 text-gray-800">Development and
                                                Environmental Science</h2>
                                            <p className="text-gray-600 mb-4">Learn about the critical importance of
                                                sustainability in today’s world.
                                                This course covers environmental challenges, renewable energy, and
                                                sustainable in for you sustainability in today’s world.Learn about the critical importance of
                                                sustainability in today’s world.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>


                    <div id="gallery" className="bg-white dark:bg-indigo-100 max-w-screen">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                                <div className="flex items-center gap-12">
                                    <h2 className="text-2xl font-mono font-bold text-gray-800 lg:text-4xl dark:text-black">Gallery</h2>

                                </div>

                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src={ambuluwawa}/>


                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span
                                        className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"> </span>
                                </a>


                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src={diyaluma}/>

                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span
                                        className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
                                </a>


                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src={meemure}/>

                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span
                                        className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
                                </a>


                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src={ella}/>


                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span
                                        className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
                                </a>

                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src={forest}/>


                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span
                                        className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
                                </a>
                                <a href="#"
                                   className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                                    <img
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                        src={hotain}/>

                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                                    </div>

                                    <span
                                        className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg"></span>
                                </a>
                            </div>
                        </div>
                    </div>





                    <div className="bg-indigo-100 " id="contact">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 ">
                            <h2 id="contact" className="text-5xl font-mono text-black font-bold">Contact</h2>

                        </div>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
                            <div>

                                <p className="max-w-sm mt-4 mb-4 text-black text-lg font-medium">Have something to say? We are here to help. Fill up the form or send email or call phone.</p>
                                <div className="flex items-center mt-8 space-x-2 text-gray-900 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"></path>
                                    </svg>
                                    <span>New Jercy,United State</span>
                                </div>
                                <div className="flex items-center mt-2 space-x-2 text-gray-900 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"></path>
                                    </svg>
                                    <a href="zenunivercity@gmail.com">zenunivercity@gmail.com</a>
                                </div>
                                <div className="flex items-center mt-2 space-x-2 text-gray-900 font-semibold">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"></path>
                                    </svg>
                                    <a href="tel:1015093105">+1015093105</a>
                                </div>
                            </div>
                            <div>
                                <form>
                                    <input type="checkbox" id="botCheck" className="hidden" style={{ display: "none" }} name="botcheck" />
                                    <div className="mb-5">
                                        <input type="text" placeholder="Full Name" autoComplete="off" className="w-full px-4 py-3 border-2 placeholder-text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder-text-neutral-200 dark:bg-neutral-900 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0" name="name" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="email_address" className="sr-only">Email Address</label>
                                        <input id="email_address" type="email" placeholder="Email Address" autoComplete="off" className="w-full px-4 py-3 border-2 placeholder-text-neutral-800 dark:text-white rounded-md outline-none dark:placeholder-text-neutral-200 dark:bg-neutral-900 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0" name="email" />
                                    </div>
                                    <div className="mb-3">
                                        <textarea placeholder="Your Message" className="w-full px-4 py-3 border-2 placeholder-text-neutral-800 dark:text-white dark:placeholder-text-neutral-200 dark:bg-neutral-900 rounded-md outline-none h-36 focus:ring-4 border-neutral-300 focus:border-neutral-600 ring-neutral-100 dark:border-neutral-600 dark:focus:border-white dark:ring-0" name="message" />
                                    </div>
                                    <button type="submit" className="w-full py-4 font-semibold text-white transition-colors bg-neutral-900 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-neutral-200 px-7 dark:bg-white dark:text-black">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <footer className="flex flex-col space-y-10 justify-center  bg-gray-800 max-w-screen ">

                        <nav className=" mt-10 flex justify-center flex-wrap gap-6 text-white font-medium text-xl">
                            <a className="hover:text-yellow-400" href="#">HOME</a>
                            <a className="hover:text-yellow-400" href="#about">ABOUT</a>
                            <a className="hover:text-yellow-400" href="#courses">COURSES</a>
                            <a className="hover:text-yellow-400" href="#gallery">GALLERY</a>
                            <a className="hover:text-yellow-400" href="#contact">CONTACT</a>
                        </nav>

                        <div className="flex justify-center space-x-5">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png"/>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"/>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png"/>
                            </a>
                            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"/>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="https://img.icons8.com/fluent/30/000000/twitter.png"/>
                            </a>
                        </div>
                        <p className="text-center text-white font-semibold">&copy; 2024 Zen Univercity. All rights
                            reservered.</p>
                    </footer>

                </main>


            </div>



        );
    }
}
