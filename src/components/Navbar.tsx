import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Home', 'About', 'Courses', 'Gallery', 'Contact'];

    return (
        <header className="fixed w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl md:text-3xl font-bold font-mono tracking-wider">
                        ZEN University
                    </h1>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-white hover:text-yellow-300 transition-colors duration-300"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2 text-white hover:text-yellow-300 transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Navbar;