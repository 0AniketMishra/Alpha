"use client"
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ChatSidebar from '../components/ChatSidebar'
import Chat from '../components/Chat'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebaseConfig'
import Loading from '../components/Loading'


const Page = () => {
  

  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null)


  useEffect(() => { // Function to get JWT from cookies 

    const getTokenFromCookie = () => {
      const cookies = document.cookie.split('; ');
      const jwtCookie = cookies.find(cookie =>
        cookie.startsWith('jwt='));
      if (jwtCookie) {
        return jwtCookie.split('=')[1];
      } return null;
    };
    const jwtToken = getTokenFromCookie();
    setToken(jwtToken)
    setLoading(false)
  },[]);


  if (!token && !loading)
    router.push("/login")



  const chats = [
    {
      id: 1,
      user: "Support Team",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      lastMessage: "Hello! How can we assist you today?",
      timestamp: "2h",
      unread: 0,
      isOnline: true
    },
    {
      id: 2,
      user: "Sarah Wilson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
      lastMessage: "The new summer collection is amazing!",
      timestamp: "1h",
      unread: 2,
      isOnline: true
    },
    {
      id: 3,
      user: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      lastMessage: "Thanks for your help!",
      timestamp: "3h",
      unread: 0,
      isOnline: false,
      lastSeen: "2h ago"
    }
  ];

  const conversations = {
    1: [
      {
        id: 1,
        user: "Support Team",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        content: "Hello! How can we assist you today?",
        timestamp: "2 hours ago",
        isSupport: true,
        isRead: true
      },
      {
        id: 2,
        user: "You",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        content: "I have a question about my recent order",
        timestamp: "1 hour ago",
        isRead: true
      },
      {
        id: 3,
        user: "Support Team",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
        content: "Of course! Could you please provide your order number?",
        timestamp: "1 hour ago",
        isSupport: true,
        isRead: true
      },
      {
        id: 4,
        user: "You",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        content: "Here's a photo of the product I received",
        timestamp: "45 minutes ago",
        isRead: true,
        media: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
      }
    ],
    2: [
      {
        id: 1,
        user: "Sarah Wilson",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
        content: "The new summer collection is amazing! Love the quality of the products.",
        timestamp: "1 hour ago",
        isRead: false
      }
    ]
  };


  const [activeChat, setActiveChat] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showInfo, setShowInfo] = useState(false);


  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: conversations[activeChat].length + 1,
        user: "You",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
        content: newMessage,
        timestamp: "Just now",
        isRead: false
      };
      conversations[activeChat] = [...conversations[activeChat], message];
      setNewMessage('');
    }
  };
  

  const activeChatData = chats.find(chat => chat.id === activeChat);

  return (
   <div>
    {!loading && token ? (
      <div>
        <Header/>
        <div className="pt-20">
          <div className="lg:max-w-custom mx-auto px-2 lg:px-8 ">
            <div className="  rounded-lg  shadow-lg h-[calc(100vh-6rem)] flex">
              {/* Sidebar */}
                <div className="mx-auto lg:flex hidden lg:w-96 w-[97%] lg:border-r border-gray-600 lg:rounded-l-xl dark:bg-def">
                  <div>
                    <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
                      <h2 className="text-lg font-semibold">Messages</h2>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                      </button>
                    </div>

                    <div className="p-4 border-b dark:border-gray-700">
                      <div className="relative">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        <input
                          type="text"
                          placeholder="Search messages..."
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="overflow-y-auto h-[calc(100%-7.5rem)]">
                      {chats.map(chat => (
                        <button
                          key={chat.id}
                          onClick={() => setActiveChat(chat.id)}
                          className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 relative ${activeChat === chat.id ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
                            }`}
                        >
                          <div className="relative">
                            <img
                              src={chat.avatar}
                              alt={chat.user}
                              className="h-12 w-12 rounded-full object-cover"
                            />
                            {chat.isOnline && (
                              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-white dark:ring-gray-800" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {chat.user}
                              </p>
                              <p className="text-xs text-gray-500">{chat.timestamp}</p>
                            </div>
                            <p className={`text-sm truncate ${chat.unread ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'
                              }`}>
                              {chat.lastMessage}
                            </p>
                          </div>
                          {chat.unread > 0 && (
                            <span className="absolute top-4 right-4 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-indigo-600 rounded-full">
                              {chat.unread}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

              {/* Chat Area */}
              {activeChat ? (
                  <div className="hidden flex-1 lg:rounded-r-xl dark:bg-def   lg:flex flex-col">
                    <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={activeChatData?.avatar}
                          alt=""
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {activeChatData?.user}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {activeChatData?.isOnline ? 'Active now' : `Last seen ${activeChatData?.lastSeen}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">

                        <button
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                          onClick={() => setShowInfo(!showInfo)}
                        >

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                          </svg>

                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {conversations[activeChat]?.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.user === 'You' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex space-x-3 max-w-[70%] ${message.isSupport ? 'bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg' : ''}`}>
                            {message.user !== 'You' && (
                              <img
                                src={message.avatar}
                                alt={message.user}
                                className="h-8 w-8 rounded-full object-cover"
                              />
                            )}
                            <div className={`flex flex-col ${message.user === 'You' ? 'items-end' : 'items-start'}`}>
                              <div className={`rounded-2xl px-4 py-2 ${message.user === 'You'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-700'
                                }`}>
                                {message.content}
                              </div>
                              {message.media && (
                                <img
                                  src={message.media}
                                  alt="Shared media"
                                  className="mt-2 rounded-lg max-w-sm"
                                />
                              )}
                              <div className="flex items-center mt-1 space-x-2">
                                <p className="text-xs text-gray-500">{message.timestamp}</p>
                                {message.user === 'You' && (
                                  <span className="text-xs text-gray-500">
                                    {message.isRead ? '✓✓' : '✓'}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 border-t dark:border-gray-700">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                          </svg>

                        </button>
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="flex-1 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                          </svg>

                        </button>
                        <button
                          onClick={handleSendMessage}
                          className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                          </svg>

                        </button>
                      </div>
                    </div>
                  </div>
              ): (
                    <div className="hidden flex-1 lg:rounded-r-xl dark:bg-def  lg:flex flex-col">
                      <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
                  <h1 className='text-white'>Please select a chat to continue</h1>
                </div>
                </div>
              )}


{activeChat ? (
                  <div className="lg:hidden rounded-lg dark:bg-def">
                    <div className="p-2 border-b dark:border-gray-700 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <svg onClick={() => setActiveChat(null)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>

                        <img
                          src={activeChatData?.avatar}
                          alt=""
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {activeChatData?.user}
                          </h3>
                          <p className="text-xs text-gray-500">
                            {activeChatData?.isOnline ? 'Active now' : `Last seen ${activeChatData?.lastSeen}`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">

                        <button
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                          onClick={() => setShowInfo(!showInfo)}
                        >

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                          </svg>

                        </button>
                      </div>
                    </div>

                    <div className="h-[80vh] p-4 space-y-4 overflow-y-auto ">
                      {conversations[activeChat]?.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.user === 'You' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`flex space-x-3 max-w-[70%] ${message.isSupport ? 'bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg' : ''}`}>
                            {message.user !== 'You' && (
                              <img
                                src={message.avatar}
                                alt={message.user}
                                className="h-8 w-8 rounded-full object-cover"
                              />
                            )}
                            <div className={`flex flex-col ${message.user === 'You' ? 'items-end' : 'items-start'}`}>
                              <div className={`rounded-2xl px-4 py-2 ${message.user === 'You'
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-100 dark:bg-gray-700'
                                }`}>
                                {message.content}
                              </div>
                              {message.media && (
                                <img
                                  src={message.media}
                                  alt="Shared media"
                                  className="mt-2 rounded-lg  max-w-48 "
                                />
                              )}
                              <div className="flex items-center mt-1 space-x-2">
                                <p className="text-xs text-gray-500">{message.timestamp}</p>
                                {message.user === 'You' && (
                                  <span className="text-xs text-gray-500">
                                    {message.isRead ? '✓✓' : '✓'}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 border-t dark:border-gray-700">
                      <div className="flex  items-center fixed bottom-0 p-2 left-0 right-0 bg-def space-x-2">
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                          </svg>

                        </button>
                        <input
                          type="text"
                          placeholder="Type your message..."
                          className="w-[90%] flex-1 rounded-full border border-gray-300 dark:border-gray-600 px-4 py-2 focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">

                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                          </svg>

                        </button>
                        <button
                          onClick={handleSendMessage}
                          className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                          </svg>

                        </button>
                      </div>
                    </div>
                  </div>
) : (
                    <div className="mx-auto  lg:hidden lg:w-96 w-[97%] lg:border-r border-gray-600 lg:rounded-l-xl dark:bg-def">
                      <div>
                        <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
                          <h2 className="text-lg font-semibold">Messages</h2>
                          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                          </button>
                        </div>

                        <div className="p-4 border-b dark:border-gray-700">
                          <div className="relative">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>

                            <input
                              type="text"
                              placeholder="Search messages..."
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="overflow-y-auto ">
                          {chats.map(chat => (
                            <button
                              key={chat.id}
                              onClick={() => setActiveChat(chat.id)}
                              className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-700 relative ${activeChat === chat.id ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''
                                }`}
                            >
                              <div className="relative">
                                <img
                                  src={chat.avatar}
                                  alt={chat.user}
                                  className="h-12 w-12 rounded-full object-cover"
                                />
                                {chat.isOnline && (
                                  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 ring-2 ring-white dark:ring-gray-800" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                    {chat.user}
                                  </p>
                                  <p className="text-xs text-gray-500">{chat.timestamp}</p>
                                </div>
                                <p className={`text-sm truncate ${chat.unread ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500 dark:text-gray-400'
                                  }`}>
                                  {chat.lastMessage}
                                </p>
                              </div>
                              {chat.unread > 0 && (
                                <span className="absolute top-4 right-4 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-indigo-600 rounded-full">
                                  {chat.unread}
                                </span>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
)}
              {/* Info Sidebar */}
              {showInfo && (
                <div className="w-80 border-l dark:border-gray-700">
                  <div className="p-4 border-b dark:border-gray-700 flex items-center justify-between">
                    <h3 className="font-medium">Details</h3>
                    <button
                      onClick={() => setShowInfo(false)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                    >
                      
                    </button>
                  </div>
                  <div className="p-4">
                    <div className="text-center">
                      <img
                        src={activeChatData?.avatar}
                        alt=""
                        className="h-24 w-24 rounded-full mx-auto object-cover"
                      />
                      <h3 className="mt-2 font-medium">{activeChatData?.user}</h3>
                      <p className="text-sm text-gray-500">
                        {activeChatData?.isOnline ? 'Active now' : `Last seen ${activeChatData?.lastSeen}`}
                      </p>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2">Shared Media</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {conversations[activeChat]
                          ?.filter(msg => msg.media)
                          .map((msg, idx) => (
                            <img
                              key={idx}
                              src={msg.media}
                              alt=""
                              className="rounded-lg object-cover w-full h-20"
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
    ): (
      <Loading/>
    )}
   </div>
  )
}

export default Page