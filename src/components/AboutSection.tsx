import React from 'react';
import { GraduationCap, Users, Trophy, Target } from 'lucide-react';

interface StatProps {
    icon: React.ReactNode;
    number: string;
    label: string;
}

const Stat: React.FC<StatProps> = ({ icon, number, label }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
        <div className="text-blue-600 mb-4">
            {icon}
        </div>
        <h3 className="text-3xl font-bold mb-2">{number}</h3>
        <p className="text-gray-600 text-center">{label}</p>
    </div>
);

const AboutSection = () => {
    const stats = [
        { icon: <GraduationCap size={32} />, number: "15,000+", label: "Graduates" },
        { icon: <Users size={32} />, number: "200+", label: "Expert Faculty" },
        { icon: <Trophy size={32} />, number: "50+", label: "Awards" },
        { icon: <Target size={32} />, number: "100%", label: "Success Rate" }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Shaping Tomorrow's Leaders Today
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            At ZEN University, we believe in nurturing not just students, but future leaders who will shape the world of tomorrow. Our commitment to excellence in education spans over three decades.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Innovative Learning</h3>
                                    <p className="text-gray-600">Cutting-edge technology and modern teaching methods.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Industry Connections</h3>
                                    <p className="text-gray-600">Strong partnerships with leading companies.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative h-[600px] rounded-lg overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
                                alt="University Campus"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <Stat key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;