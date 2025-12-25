import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { dailyPlans } from '../data/tripData';
import { ArrowLeft, Clock, MapPin, CheckCircle } from 'lucide-react';

const DayGuide: React.FC = () => {
    const { dayId } = useParams<{ dayId: string }>();
    const day = dailyPlans.find(d => d.day === Number(dayId));

    if (!day) {
        return <div className="p-8 text-center">Day not found! <Link to="/" className="text-blue-500 underline">Go Home</Link></div>;
    }

    return (
        <div className="bg-white min-h-full">
            {/* Header Image Area (Placeholder color for now) */}
            <div className={`h-40 ${day.color} relative`}>
                <Link to="/" className="absolute top-4 left-4 bg-white/20 p-2 rounded-full backdrop-blur-sm text-white hover:bg-white/40 transition">
                    <ArrowLeft size={24} />
                </Link>
                <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-bold opacity-90 uppercase tracking-widest">Day {day.day}</span>
                    <h1 className="text-3xl font-bold drop-shadow-md">{day.title}</h1>
                </div>
            </div>

            <div className="p-6 -mt-6 bg-white rounded-t-3xl relative z-10">
                <div className="flex items-center gap-2 text-slate-500 mb-6 font-medium">
                    <Clock size={18} />
                    <span>{day.date}</span>
                </div>

                <div className="space-y-6">
                    <section>
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <MapPin className="text-kid-pink" />
                            Where we stay
                        </h3>
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700">
                            {day.stay}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <CheckCircle className="text-kid-green" />
                            The Plan
                        </h3>
                        <ul className="space-y-3">
                            {day.activities.map((activity, index) => (
                                <li key={index} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <span className="bg-kid-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                                        {index + 1}
                                    </span>
                                    <span className="text-slate-700">{activity}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="mt-8 text-center">
                    <Link to="/journal" className="inline-block bg-kid-yellow text-yellow-900 font-bold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
                        Write in Journal!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DayGuide;
