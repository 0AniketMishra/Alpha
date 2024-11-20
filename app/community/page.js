import React from 'react';

import { Heart, MessageCircle, Share2 } from 'lucide-react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ComSidebar from '../components/ComSidebar';

 const Page = () => {
    const posts = [
        {
            id: 1,
            userId: 1,
            content: "Just got my new wireless headphones! The sound quality is amazing! 🎧",
            likes: 24,
            comments: 5,
            timestamp: new Date('2024-03-14T15:30:00'),
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            userId: 3,
            content: "The customer support team is incredibly helpful! Quick response and solved my issue right away. 👏",
            likes: 15,
            comments: 3,
            timestamp: new Date('2024-03-15T09:20:00')
        }
    ];
    const users = [
        {
            id: 1,
            name: "John Doe",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80",
            role: "user",
            online: true
        },
        {
            id: 2,
            name: "Support Team",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
            role: "support",
            online: true
        },
        {
            id: 3,
            name: "Alice Smith",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
            role: "user",
            online: false
        }
    ]
    return (
        <><Header /><div className="lg:max-w-custom flex mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className='mr-12 hidden w-[18%] lg:flex'>
                <ComSidebar/>
            </div>
            <div className=' lg:w-[40%] '>
               <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Community</h1>
                <div className=" bg-def rounded-lg shadow-md p-4">
                    <textarea
                        placeholder="Share your thoughts..."
                        className="w-full p-2    rounded-lg outline-none  dark:bg-gray-900 dark:text-white"
                        rows={3} />
                    <div className="mt-3 flex justify-end">
                        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                            Post
                        </button>
                    </div>
                </div>
              </div>

                <div className="space-y-6">
                    {posts.map(post => {
                        const user = users.find(u => u.id, post.userId

                        );
                        return (
                            <div key={post.id} className="bg-def rounded-lg shadow-md overflow-hidden">
                                <div className="p-4">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="h-10 w-10 rounded-full" />
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{user.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {post.timestamp.toLocaleDateString(undefined, {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-800 dark:text-gray-200 mb-4">{post.content}</p>
                                    {post.image && (
                                        <img
                                            src={post.image}
                                            alt="Post content"
                                            className="rounded-lg w-full mb-4" />
                                    )}
                                    <div className="flex items-center space-x-6 text-gray-500 dark:text-gray-400">
                                        <button className="flex items-center space-x-2 hover:text-red-500">
                                            <Heart className="h-5 w-5" />
                                            <span>{post.likes}</span>
                                        </button>
                                        <button className="flex items-center space-x-2 hover:text-indigo-500">
                                            <MessageCircle className="h-5 w-5" />
                                            <span>{post.comments}</span>
                                        </button>
                                        <button className="flex items-center space-x-2 hover:text-indigo-500">
                                            <Share2 className="h-5 w-5" />
                                            <span>Share</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div></div>

        </div></>
    );
};

export default Page