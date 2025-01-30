"use client"
import React, { useState, useEffect } from 'react';
import {
    User,
    MapPin,
    Package,
    LogOut,
    ChevronRight,
    Phone,
    Mail,
    RefreshCw,
    RotateCcw,
    MessageSquare,
    CreditCard,
    Heart,
    Moon,
    Sun,
    Truck,
    Bell,
    Shield
} from 'lucide-react';

// Mock data for demonstration
const mockOrders = [
    {
        id: '1',
        date: '2024-03-10',
        status: 'Delivered',
        trackingNumber: 'TN123456789',
        items: [{ name: 'Wireless Headphones', price: 129.99 }],
        total: 129.99,
        timeline: [
            { date: '2024-03-08', status: 'Order Placed' },
            { date: '2024-03-09', status: 'Shipped' },
            { date: '2024-03-10', status: 'Delivered' }
        ]
    },
    {
        id: '2',
        date: '2024-03-15',
        status: 'In Transit',
        trackingNumber: 'TN987654321',
        items: [{ name: 'Smart Watch', price: 299.99 }],
        total: 299.99,
        timeline: [
            { date: '2024-03-15', status: 'Order Placed' },
            { date: '2024-03-15', status: 'Shipped' }
        ]
    }
];

const mockAddresses = [
    {
        id: '1',
        type: 'Home',
        street: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        default: true
    },
    {
        id: '2',
        type: 'Work',
        street: '456 Business Ave',
        city: 'New York',
        state: 'NY',
        zip: '10002',
        default: false
    }
];

const mockWishlist = [
    {
        id: '1',
        name: 'Premium Smartwatch',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300'
    },
    {
        id: '2',
        name: 'Noise-Cancelling Headphones',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300'
    }
];

const mockPaymentMethods = [
    {
        id: '1',
        type: 'Visa',
        last4: '4242',
        expiry: '12/25',
        default: true
    },
    {
        id: '2',
        type: 'Mastercard',
        last4: '8888',
        expiry: '08/24',
        default: false
    }
];

function Dashboard() {
    const [activeTab, setActiveTab] = useState('orders');
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return false;
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const userProfile = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '+1 (555) 123-4567',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        memberSince: '2023',
        notifications: {
            orderUpdates: true,
            promotions: false,
            security: true
        }
    };

    const renderOrderTimeline = (timeline) => (
        <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="text-sm font-medium mb-2">Order Timeline</h4>
            <div className="space-y-2">
                {timeline.map((event, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {event.date} - {event.status}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderOrders = () => (
        <div className="space-y-4">
            {mockOrders.map((order) => (
                <div key={order.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold dark:text-white">Order #{order.id}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{order.date}</p>
                            <p className="text-sm mt-1 dark:text-gray-300">
                                {order.items.map(item => item.name).join(', ')}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Tracking: {order.trackingNumber}
                            </p>
                        </div>
                        <div className="text-right">
                            <p className="font-semibold dark:text-white">${order.total}</p>
                            <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-600 dark:text-green-400' : 'text-blue-600 dark:text-blue-400'
                                }`}>
                                {order.status}
                            </p>
                        </div>
                    </div>
                    {renderOrderTimeline(order.timeline)}
                    <div className="mt-4 flex gap-2">
                        <button className="text-sm flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                            <RotateCcw size={16} /> Return
                        </button>
                        <button className="text-sm flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                            <RefreshCw size={16} /> Refund
                        </button>
                        <button className="text-sm flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                            <MessageSquare size={16} /> Support
                        </button>
                        <button className="text-sm flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                            <Truck size={16} /> Track
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );

    const renderAddresses = () => (
        <div className="space-y-4">
            {mockAddresses.map((address) => (
                <div key={address.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="font-semibold dark:text-white">{address.type}</p>
                                {address.default && (
                                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded">
                                        Default
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{address.street}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {address.city}, {address.state} {address.zip}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                Edit
                            </button>
                            {!address.default && (
                                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    Set as Default
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <button className="w-full py-2 px-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                + Add New Address
            </button>
        </div>
    );

    const renderWishlist = () => (
        <div className="grid grid-cols-2 gap-4">
            {mockWishlist.map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="font-semibold dark:text-white">{item.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
                    <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );

    const renderPaymentMethods = () => (
        <div className="space-y-4">
            {mockPaymentMethods.map((method) => (
                <div key={method.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="flex items-center gap-2">
                                <CreditCard className="text-gray-400" size={20} />
                                <p className="font-semibold dark:text-white">
                                    {method.type} ending in {method.last4}
                                </p>
                                {method.default && (
                                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded">
                                        Default
                                    </span>
                                )}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Expires {method.expiry}</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                Edit
                            </button>
                            {!method.default && (
                                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                                    Set as Default
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <button className="w-full py-2 px-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-400 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                + Add New Payment Method
            </button>
        </div>
    );

    const renderProfile = () => (
        <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={userProfile.avatar}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="text-xl font-semibold dark:text-white">{userProfile.name}</h2>
                        <p className="text-gray-500 dark:text-gray-400">Premium Member</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Member since {userProfile.memberSince}</p>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <Mail className="text-gray-400" size={20} />
                        <p className="dark:text-gray-300">{userProfile.email}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="text-gray-400" size={20} />
                        <p className="dark:text-gray-300">{userProfile.phone}</p>
                    </div>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Edit Profile
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Notification Preferences</h3>
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Truck className="text-gray-400" size={20} />
                            <span className="dark:text-gray-300">Order Updates</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={userProfile.notifications.orderUpdates} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Bell className="text-gray-400" size={20} />
                            <span className="dark:text-gray-300">Promotions</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={userProfile.notifications.promotions} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Shield className="text-gray-400" size={20} />
                            <span className="dark:text-gray-300">Security Alerts</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={userProfile.notifications.security} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen bg-gray-50 dark:bg-black transition-colors`}>
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Account</h1>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setDarkMode(!darkMode)}
                                className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            >
                                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                                <LogOut size={20} />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-custom mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-12 gap-8">
                    {/* Sidebar */}
                    <div className="col-span-2">
                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`w-full flex items-center justify-between p-3 rounded-lg ${activeTab === 'orders'
                                        ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Package size={20} />
                                    <span>Orders</span>
                                </div>
                                <ChevronRight size={16} />
                            </button>
                            <button
                                onClick={() => setActiveTab('addresses')}
                                className={`w-full flex items-center justify-between p-3 rounded-lg ${activeTab === 'addresses'
                                        ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <MapPin size={20} />
                                    <span>Addresses</span>
                                </div>
                                <ChevronRight size={16} />
                            </button>
                            <button
                                onClick={() => setActiveTab('wishlist')}
                                className={`w-full flex items-center justify-between p-3 rounded-lg ${activeTab === 'wishlist'
                                        ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <Heart size={20} />
                                    <span>Wishlist</span>
                                </div>
                                <ChevronRight size={16} />
                            </button>
                            <button
                                onClick={() => setActiveTab('payment')}
                                className={`w-full flex items-center justify-between p-3 rounded-lg ${activeTab === 'payment'
                                        ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <CreditCard size={20} />
                                    <span>Payment Methods</span>
                                </div>
                                <ChevronRight size={16} />
                            </button>
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`w-full flex items-center justify-between p-3 rounded-lg ${activeTab === 'profile'
                                        ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    <User size={20} />
                                    <span>Profile</span>
                                </div>
                                <ChevronRight size={16} />
                            </button>
                        </nav>
                    </div>

                    {/* Content Area */}
                    <div className="col-span-10">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-semibold mb-6 dark:text-white">
                                {activeTab === 'orders' && 'My Orders'}
                                {activeTab === 'addresses' && 'My Addresses'}
                                {activeTab === 'wishlist' && 'My Wishlist'}
                                {activeTab === 'payment' && 'Payment Methods'}
                                {activeTab === 'profile' && 'My Profile'}
                            </h2>
                            {activeTab === 'orders' && renderOrders()}
                            {activeTab === 'addresses' && renderAddresses()}
                            {activeTab === 'wishlist' && renderWishlist()}
                            {activeTab === 'payment' && renderPaymentMethods()}
                            {activeTab === 'profile' && renderProfile()}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;
