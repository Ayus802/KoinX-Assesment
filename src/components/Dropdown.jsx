import React, { useState } from 'react';

export default function DropdownMenu({isOpen}) {

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {isOpen && (
                <div className="fixed mt-2 w-full bg-white rounded-md shadow-lg z-10 left-2 right-2 top-12 bottom-0">
                    <ul className="py-1 ">
                        <li className="my-3 font-semibold px-4 py-4 hover:bg-gray-200 cursor-pointer shadow-lg w-[90%]">Crypto Taxes</li>
                        <li className="my-3 font-semibold px-4 py-4 hover:bg-gray-200 cursor-pointer shadow-lg w-[90%]">Free Tools</li>
                        <li className="my-3 font-semibold px-4 py-4 hover:bg-gray-200 cursor-pointer shadow-lg w-[90%]">Resource enter</li>
                        <li className="my-3 font-semibold px-4 py-4 hover:bg-gray-200 cursor-pointer shadow-lg shadow-blue-700 rounded-lg bg-blue-600 w-[90%]">Get Started</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
