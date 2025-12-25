import React, { useState, useEffect } from 'react';
import { dailyPlans, journalCategories } from '../data/tripData';
import { Star } from 'lucide-react';
import clsx from 'clsx';

const MyJournal: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<number>(1);
    const [entries, setEntries] = useState<Record<string, string>>({});

    // Load from local storage
    useEffect(() => {
        const saved = localStorage.getItem('travelJournal');
        if (saved) {
            setEntries(JSON.parse(saved));
        }
    }, []);

    const handleEntryChange = (categoryId: string, value: string) => {
        setEntries(prev => {
            const newEntries = { ...prev, [`${selectedDay}-${categoryId}`]: value };
            localStorage.setItem('travelJournal', JSON.stringify(newEntries));
            return newEntries;
        });
    };

    return (
        <div className="p-4 pb-20">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-kid-pink">My Travel Journal</h2>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold border border-yellow-300 flex items-center gap-1">
                    <Star size={12} fill="currentColor" />
                    Earn Juice!
                </div>
            </div>

            {/* Day Selector */}
            <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                {dailyPlans.map(plan => (
                    <button
                        key={plan.day}
                        onClick={() => setSelectedDay(plan.day)}
                        className={clsx(
                            "px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all",
                            selectedDay === plan.day
                                ? "bg-kid-purple text-white shadow-lg scale-105"
                                : "bg-white text-slate-500 border border-slate-200"
                        )}
                    >
                        Day {plan.day}
                    </button>
                ))}
            </div>

            <div className="space-y-6 animate-fadeIn">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="font-bold text-lg text-slate-800 mb-2">
                        {dailyPlans.find(d => d.day === selectedDay)?.title}
                    </h3>
                    <p className="text-sm text-slate-500">Record your discoveries for today!</p>
                </div>

                {journalCategories.map(category => (
                    <div key={category.id} className="bg-white p-4 rounded-2xl shadow-sm border-l-4 border-kid-blue">
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                            {category.label} <span className="text-xs font-normal text-slate-400 ml-1">- {category.prompt}</span>
                        </label>
                        <textarea
                            value={entries[`${selectedDay}-${category.id}`] || ''}
                            onChange={(e) => handleEntryChange(category.id, e.target.value)}
                            placeholder="I saw..."
                            className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kid-blue min-h-[80px]"
                        />
                    </div>
                ))}

                <div className="bg-kid-green/10 p-4 rounded-2xl border-2 border-dashed border-kid-green">
                    <label className="block text-lg font-bold text-kid-green mb-2">
                        Best Part of the Day Story
                    </label>
                    <textarea
                        value={entries[`${selectedDay}-story`] || ''}
                        onChange={(e) => handleEntryChange('story', e.target.value)}
                        placeholder="Write a story about your favorite part!"
                        className="w-full p-4 rounded-xl bg-white border border-kid-green/30 focus:outline-none focus:ring-2 focus:ring-kid-green min-h-[150px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default MyJournal;
