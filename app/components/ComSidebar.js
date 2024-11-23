import React from 'react';
import { Home, Bell, Bookmark, MessageSquare, User, MoreHorizontal } from 'lucide-react';

const ComSidebar = () => {
    return (
        <div className="sticky top-0 rounded-xl w-72 bg-white shadow-md dark:bg-def p-5 flex flex-col justify-between">
            <div>
                <div className="text-xl font-bold mb-6 text-indigo-600 dark:text-white">MyApp</div>
                <div className="space-y-4">
                    <SidebarItem icon={Home} text="Home" />
                    <SidebarItem icon={Bell} text="Notifications" />
                    <SidebarItem icon={Bookmark} text="Bookmarks" />
                    <SidebarItem icon={MessageSquare} text="Messages" />
                    <SidebarItem icon={User} text="Profile" />
                    <SidebarItem icon={MoreHorizontal} text="More" />
                </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                © 2024 MyApp, Inc.
            </div>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, text }) => (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition">
        <Icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
        <span className="text-gray-700 dark:text-gray-200">{text}</span>
    </div>
);

export default ComSidebar;
