import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Map, BookOpen, Home as HomeIcon } from 'lucide-react';
import clsx from 'clsx';

const Layout: React.FC = () => {
    return (
        <div className="flex flex-col h-screen max-h-screen overflow-hidden bg-slate-50">
            {/* Header */}
            <header className="bg-kid-blue p-4 shadow-md z-10">
                <h1 className="text-2xl font-bold text-white text-center drop-shadow-md">
                    Family Adventure 2025
                </h1>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto relative scroll-smooth">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="bg-white border-t border-slate-200 p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <ul className="flex justify-around items-center max-w-md mx-auto">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => clsx(
                                "flex flex-col items-center p-2 rounded-lg transition-colors",
                                isActive ? "text-kid-purple bg-purple-100" : "text-slate-500 hover:bg-slate-100"
                            )}
                        >
                            <HomeIcon size={28} />
                            <span className="text-xs font-bold mt-1">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/map"
                            className={({ isActive }) => clsx(
                                "flex flex-col items-center p-2 rounded-lg transition-colors",
                                isActive ? "text-kid-green bg-green-100" : "text-slate-500 hover:bg-slate-100"
                            )}
                        >
                            <Map size={28} />
                            <span className="text-xs font-bold mt-1">Map</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/journal"
                            className={({ isActive }) => clsx(
                                "flex flex-col items-center p-2 rounded-lg transition-colors",
                                isActive ? "text-kid-pink bg-pink-100" : "text-slate-500 hover:bg-slate-100"
                            )}
                        >
                            <BookOpen size={28} />
                            <span className="text-xs font-bold mt-1">Journal</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Layout;
