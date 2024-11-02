import React from 'react';

interface CourseCardProps {
    title: string;
    description: string;
    image: string;
    duration: string;
    level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, image, duration, level }) => {
    return (
        <div id="courses" className ="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div className="relative h-48">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{duration}</span>
                    <span>{level}</span>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;