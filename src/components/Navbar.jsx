// src/Navbar.jsx
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'About' },
        { id: 3, text: 'Services' },
        { id: 4, text: 'Contact' },
    ];

    return (
        <div className="bg-red-800 text-white flex justify-between items-center h-16 px-4">
            <h1 className="text-2xl font-bold">My Website</h1>
            <ul className="hidden md:flex space-x-4">
                {navItems.map(item => (
                    <li key={item.id} className="hover:text-gray-400 cursor-pointer">
                        {item.text}
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className="md:hidden cursor-pointer">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={`fixed top-0 left-0 w-2/3 h-full bg-gray-900 transition-transform duration-300 ${nav ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <h1 className="text-2xl font-bold text-center mt-4">My Website</h1>
                {navItems.map(item => (
                    <li key={item.id} className="p-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer">
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;