import React from 'react';
import { dailyPlans } from '../data/tripData';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="p-4 flex flex-col items-center gap-6 pb-20">
            <div className="text-center mt-4">
                <h2 className="text-4xl font-extrabold text-kid-purple mb-2 animate-bounce">
                    Welcome Explorer!
                </h2>
                <p className="text-lg text-slate-600">
                    Get ready for our amazing 4-day trip!
                </p>
            </div>

            <div className="w-full max-w-md space-y-4">
                <h3 className="text-xl font-bold text-slate-800 ml-2">Our Plan</h3>
                {dailyPlans.map((plan) => (
                    <Link
                        key={plan.day}
                        to={`/day/${plan.day}`}
                        className={`${plan.color} block rounded-2xl p-4 shadow-lg transform transition-transform hover:scale-105 active:scale-95 text-white`}
                    >
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-sm font-bold opacity-90 uppercase tracking-widest">Day {plan.day}</span>
                                <h4 className="text-2xl font-bold">{plan.title}</h4>
                                <p className="opacity-90 text-sm mt-1">{plan.date}</p>
                            </div>
                            <ArrowRight size={24} className="opacity-75" />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-4 p-6 bg-yellow-100 rounded-3xl border-4 border-yellow-300 w-full max-w-md text-center">
                <h3 className="text-xl font-bold text-yellow-800 mb-2">My Travel Goal</h3>
                <p className="text-yellow-900 font-medium">
                    "Have fun, stay cool, and tell everyone what I saw!"
                </p>
            </div>
        </div>
    );
};

export default Home;
