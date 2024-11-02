import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import CourseCard from './components/CourseCard';
import GalleryImage from './components/GalleryImage';


function App() {
    const courses = [
        {
            title: "Computer Science",
            description: "Comprehensive program covering programming, algorithms, and software development",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
            duration: "4 Years",
            level: "Bachelor's"
        },
        {
            title: "Data Science",
            description: "Master the art of data analysis, machine learning, and statistical modeling",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            duration: "2 Years",
            level: "Master's"
        },
        {
            title: "Business Administration",
            description: "Develop leadership skills and business acumen for the modern corporate world",
            image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
            duration: "4 Years",
            level: "Bachelor's"
        }
    ];

    const galleryImages = [
        {
            src: "https://images.unsplash.com/photo-1562774053-701939374585",
            alt: "Campus Life"
        },
        {
            src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
            alt: "Library"
        },
        {
            src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
            alt: "Graduation"
        }
    ];

    return (
        <div className="overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="relative h-screen flex items-center justify-center">
                <div className="absolute inset-0">
                    <img
                        src={galleryImages[0].src}
                        className="w-full h-full object-cover"
                        alt="University Campus"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                <div className="relative text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Empowering Future Leaders
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                        Through Excellence in Education and Innovation
                    </p>
                    <a
                        href="#contact"
                        className="inline-block bg-yellow-400 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            <AboutSection />

            {/* Courses Section */}
            <section id="courses" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Our Courses</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course) => (
                            <CourseCard key={course.title} {...course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section id="gallery" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Campus Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {galleryImages.map((image) => (
                            <GalleryImage key={image.alt} {...image} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-center space-x-4">
                                <MapPin className="text-blue-600 w-6 h-6" />
                                <div>
                                    <h3 className="font-semibold">Location</h3>
                                    <p className="text-gray-600">New Jersey, United States</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="text-blue-600 w-6 h-6" />
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <a href="mailto:contact@zenuniversity.edu" className="text-gray-600 hover:text-blue-600">
                                        contact@zenuniversity.edu
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="text-blue-600 w-6 h-6" />
                                <div>
                                    <h3 className="font-semibold">Phone</h3>
                                    <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600">
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                            </div>
                            <div>
                <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">ZEN University</h3>
                            <p className="text-gray-400">
                                Empowering minds, shaping futures.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {['Home', 'About', 'Courses', 'Gallery', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect</h4>
                            <div className="flex space-x-4">
                                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                                    <a
                                        key={social}
                                        href={`https://${social.toLowerCase()}.com`}
                                        className="text-gray-400 hover:text-white transition-colors duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <form className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} ZEN University. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;