"use client"
import React, { useState } from 'react';
import {
    LineChart, Line, AreaChart, Area, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';
import {
    TrendingUp, Users, ShoppingBag, DollarSign, Package,
    Eye, ShoppingCart, Star, LayoutDashboard, ClipboardList,
    CreditCard, Truck, Settings, LogOut, Bell, Search,
    Plus, Filter, ArrowUpRight, ArrowDownRight, Clock,
    CheckCircle, XCircle, AlertCircle
} from 'lucide-react';
import Header from '../components/Header';

const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 }
];

const productPerformance = [
    { name: 'Wireless Headphones', revenue: 2500, impressions: 12000, conversion: 3.2, stock: 45 },
    { name: 'Smart Watch', revenue: 3500, impressions: 15000, conversion: 4.1, stock: 28 },
    { name: 'Backpack', revenue: 1800, impressions: 8000, conversion: 2.8, stock: 12 }
];

const categoryDistribution = [
    { name: 'Electronics', value: 45 },
    { name: 'Fashion', value: 30 },
    { name: 'Home & Living', value: 15 },
    { name: 'Sports', value: 10 }
];

const pendingOrders = [
    {
        id: '#ORD-001',
        customer: 'John Doe',
        items: ['Wireless Headphones', 'Smart Watch'],
        total: 799.98,
        date: '2024-03-15',
        status: 'pending'
    },
    {
        id: '#ORD-002',
        customer: 'Sarah Smith',
        items: ['Backpack'],
        total: 79.99,
        date: '2024-03-15',
        status: 'pending'
    }
];

const ongoingOrders = [
    {
        id: '#ORD-003',
        customer: 'Mike Johnson',
        items: ['Smart Watch'],
        total: 399.99,
        date: '2024-03-14',
        status: 'processing',
        shippingUpdates: [
            { date: '2024-03-14', status: 'Order Confirmed' },
            { date: '2024-03-15', status: 'Packaging in Progress' }
        ]
    }
];

const recentTransactions = [
    {
        id: '#TRX-001',
        customer: 'Alice Brown',
        amount: 299.99,
        date: '2024-03-15',
        status: 'completed'
    },
    {
        id: '#TRX-002',
        customer: 'Bob Wilson',
        amount: 159.99,
        date: '2024-03-14',
        status: 'pending'
    }
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', name: 'Orders', icon: ShoppingBag },
    { id: 'products', name: 'Products', icon: Package },
    { id: 'transactions', name: 'Transactions', icon: CreditCard },
    { id: 'shipping', name: 'Shipping', icon: Truck },
    { id: 'settings', name: 'Settings', icon: Settings }
];

export default function SellerDashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [activeOrdersTab, setActiveOrdersTab] = useState('pending');
    const [showNotifications, setShowNotifications] = useState(false);

    const totalRevenue = revenueData.reduce((acc, item) => acc + item.value, 0);
    const totalImpressions = productPerformance.reduce((acc, item) => acc + item.impressions, 0);
    const averageConversion = productPerformance.reduce((acc, item) => acc + item.conversion, 0) / productPerformance.length;


    
    const StatCard = ({ icon: Icon, title, value, trend, trendValue }) => (
        <div className="bg-white dark:bg-def rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className={`flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                    {trend === 'up' ? (
                        <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                        <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    <span className="text-sm font-medium">{trendValue}%</span>
                </div>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
            <p className="mt-1 text-sm text-gray-500">{title}</p>
        </div>
    );

    const renderDashboard = () => (
        <>
        
            <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    icon={DollarSign}
                    title="Total Revenue"
                    value={`$${totalRevenue.toLocaleString()}`}
                    trend="up"
                    trendValue={12.5}
                />
                <StatCard
                    icon={Eye}
                    title="Total Impressions"
                    value={totalImpressions.toLocaleString()}
                    trend="up"
                    trendValue={8.2}
                />
                <StatCard
                    icon={ShoppingCart}
                    title="Conversion Rate"
                    value={`${averageConversion.toFixed(1)}%`}
                    trend="down"
                    trendValue={2.4}
                />
                <StatCard
                    icon={Package}
                    title="Active Products"
                    value="24"
                    trend="up"
                    trendValue={5.7}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white dark:bg-def rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area
                                    type="monotone"
                                    dataKey="value"
                                    stroke="#4F46E5"
                                    fill="#4F46E5"
                                    fillOpacity={0.1}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-def rounded-lg p-6 shadow-sm">
                    <h2 className="text-lg font-semibold mb-4">Category Distribution</h2>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={categoryDistribution}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {categoryDistribution.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {categoryDistribution.map((item, index) => (
                            <div key={item.name} className="flex items-center">
                                <div
                                    className="w-3 h-3 rounded-full mr-2"
                                    style={{ backgroundColor: COLORS[index] }}
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.name} ({item.value}%)
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-def rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Recent Orders</h2>
                        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                            View All
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b dark:border-gray-700">
                                    <th className="pb-4 font-medium text-gray-500">Order ID</th>
                                    <th className="pb-4 font-medium text-gray-500">Customer</th>
                                    <th className="pb-4 font-medium text-gray-500">Items</th>
                                    <th className="pb-4 font-medium text-gray-500">Total</th>
                                    <th className="pb-4 font-medium text-gray-500">Status</th>
                                    <th className="pb-4 font-medium text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingOrders.map((order) => (
                                    <tr key={order.id} className="border-b dark:border-gray-700 last:border-0">
                                        <td className="py-4">{order.id}</td>
                                        <td className="py-4">{order.customer}</td>
                                        <td className="py-4">{order.items.join(', ')}</td>
                                        <td className="py-4">${order.total}</td>
                                        <td className="py-4">
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <button className="text-indigo-600 hover:text-indigo-700">View Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );

    const renderOrders = () => (
        <div className="space-y-6">
            <div className="bg-white dark:bg-def rounded-lg shadow-sm p-6">
                <div className="flex space-x-4 mb-6">
                    <button
                        className={`px-4 py-2 rounded-lg ${activeOrdersTab === 'pending'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveOrdersTab('pending')}
                    >
                        Pending
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${activeOrdersTab === 'ongoing'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveOrdersTab('ongoing')}
                    >
                        Ongoing
                    </button>
                    <button
                        className={`px-4 py-2 rounded-lg ${activeOrdersTab === 'completed'
                                ? 'bg-indigo-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                            }`}
                        onClick={() => setActiveOrdersTab('completed')}
                    >
                        Completed
                    </button>
                </div>

                {activeOrdersTab === 'pending' && (
                    <div className="space-y-4">
                        {pendingOrders.map((order) => (
                            <div key={order.id} className="border dark:border-gray-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-medium">{order.id}</h3>
                                        <p className="text-sm text-gray-500">{order.date}</p>
                                    </div>
                                    <div className="flex space-x-2">
                                        <button className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm">
                                            Accept
                                        </button>
                                        <button className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm">
                                            Reject
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p><span className="text-gray-500">Customer:</span> {order.customer}</p>
                                    <p><span className="text-gray-500">Items:</span> {order.items.join(', ')}</p>
                                    <p><span className="text-gray-500">Total:</span> ${order.total}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeOrdersTab === 'ongoing' && (
                    <div className="space-y-4">
                        {ongoingOrders.map((order) => (
                            <div key={order.id} className="border dark:border-gray-700 rounded-lg p-4">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="font-medium">{order.id}</h3>
                                        <p className="text-sm text-gray-500">{order.date}</p>
                                    </div>
                                    <button className="px-3 py-1 bg-indigo-600 text-white rounded-lg text-sm">
                                        Update Status
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <p><span className="text-gray-500">Customer:</span> {order.customer}</p>
                                    <p><span className="text-gray-500">Items:</span> {order.items.join(', ')}</p>
                                    <p><span className="text-gray-500">Total:</span> ${order.total}</p>
                                    <div className="mt-4">
                                        <h4 className="font-medium mb-2">Shipping Updates</h4>
                                        <div className="space-y-2">
                                            {order.shippingUpdates.map((update, index) => (
                                                <div key={index} className="flex items-center space-x-2">
                                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                                    <span className="text-sm">{update.status}</span>
                                                    <span className="text-sm text-gray-500">- {update.date}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );

    const renderProducts = () => (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700"
                        />
                    </div>
                    <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg">
                        <Filter className="h-5 w-5" />
                    </button>
                </div>
                <button className="flex items-center space-x-2 bg-indigo-600 text-white w-fit p-2 border-2 border-indigo-600 rounded-lg hover:bg-indigo-700">
                    <Plus className="h-5 w-5" />
                    <span className='hidden lg:flex'>Add Product</span>
                </button>
            </div>
            

            <div className="bg-white dark:bg-def  rounded-lg shadow-sm overflow-x-scroll w-full">
                <div className="p-6">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b dark:border-gray-700">
                                <th className="pb-4 font-medium text-gray-500">Product</th>
                                <th className="pb-4 font-medium text-gray-500">Stock</th>
                                <th className="pb-4 font-medium text-gray-500">Price</th>
                                <th className="pb-4 font-medium text-gray-500">Sales</th>
                                <th className="pb-4 font-medium text-gray-500">Status</th>
                                <th className="pb-4 font-medium text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productPerformance.map((product) => (
                                <tr key={product.name} className="border-b  dark:border-gray-700 last:border-0">
                                    <td className="py-4">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-100" />
                                            <div>
                                                <p className="font-medium">{product.name}</p>
                                                <p className="text-sm text-gray-500">SKU: PRD-{Math.random().toString(36).substr(2, 9)}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-4">{product.stock} units</td>
                                    <td className="py-4 px-4">${(product.revenue / 100).toFixed(2)}</td>
                                    <td className="py-4 px-4">{Math.floor(Math.random() * 100)} units</td>
                                    <td className="py-4 px-4">
                                        <span className={`px-2 py-1  text-xs font-medium rounded-full ${product.stock > 20
                                                ? 'bg-green-100 text-green-800'
                                                : product.stock > 10
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-red-100 text-red-800'
                                            }`}>
                                            {product.stock > 20 ? 'In Stock' : product.stock > 10 ? 'Low Stock' : 'Critical Stock'}
                                        </span>
                                    </td>
                                    <td className="py-4">
                                        <div className="flex space-x-2 pr-4">
                                            <button className="text-indigo-600 hover:text-indigo-700">Edit</button>
                                            <button className="text-red-600 hover:text-red-700">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const renderTransactions = () => (
        <div className="space-y-6">
            <div className="bg-white dark:bg-def rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
                <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border dark:border-gray-700 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className={`p-2 rounded-full ${transaction.status === 'completed'
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-yellow-100 text-yellow-600'
                                    }`}>
                                    {transaction.status === 'completed' ? (
                                        <CheckCircle className="h-6 w-6" />
                                    ) : (
                                        <Clock className="h-6 w-6" />
                                    )}
                                </div>
                                <div>
                                    <p className="font-medium">{transaction.id}</p>
                                    <p className="text-sm text-gray-500">{transaction.customer}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="font-medium">${transaction.amount}</p>
                                <p className="text-sm text-gray-500">{transaction.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return renderDashboard();
            case 'orders':
                return renderOrders();
            case 'products':
                return renderProducts();
            case 'transactions':
                return renderTransactions();
            default:
                return null;
        }
    };

    return (
        <div className="pt-16">
            <Header/>
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-defl  dark:bg-def z-10 border-t dark:border-gray-700 px-4 py-2">
                <div className="flex justify-around items-center">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`p-3 rounded-lg ${activeTab === tab.id
                                        ? 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
                                        : 'text-gray-600 dark:text-gray-400'
                                    }`}
                            >
                                <Icon className="h-6 w-6" />
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="flex h-[calc(100vh-4rem)]">
                {/* Sidebar */}
                <div className="w-64 hidden md:flex bg-white dark:bg-def border-r dark:border-gray-700  flex-col">
                    <div className="p-4">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white"></h2>
                    </div>

                    <nav className="flex-1 px-2 py-4 space-y-1">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm ${activeTab === tab.id
                                            ? 'bg-indigo-600 text-white'
                                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{tab.name}</span>
                                </button>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t dark:border-gray-700">
                        <button className="w-full flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                            <LogOut className="h-5 w-5" />
                            <span>Logout</span>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-auto bg-gray-50 dark:bg-black">
                    <div className="lg:p-8 p-4">
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                {tabs.find(tab => tab.id === activeTab)?.name}
                            </h1>

                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <button
                                        onClick={() => setShowNotifications(!showNotifications)}
                                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative"
                                    >
                                        <Bell className="h-6 w-6" />
                                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" />
                                    </button>

                                    {showNotifications && (
                                        <div className="absolute right-0  mt-2 w-80 bg-white dark:bg-def rounded-lg shadow-lg border dark:border-gray-700 py-2">
                                            <div className="px-4 py-2 border-b dark:border-gray-700">
                                                <h3 className="font-medium">Notifications</h3>
                                            </div>
                                            <div className="max-h-64 overflow-y-auto">
                                                <div className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <p className="text-sm">New order received</p>
                                                    <p className="text-xs text-gray-500">2 minutes ago</p>
                                                </div>
                                                <div className="px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700">
                                                    <p className="text-sm">Low stock alert: Wireless Headphones</p>
                                                    <p className="text-xs text-gray-500">1 hour ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
                            </div>
                        </div>

                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
}