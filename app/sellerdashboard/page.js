"use client"
import React from 'react';
import {
    LineChart, Line, AreaChart, Area, BarChart, Bar,
    XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from 'recharts';


import {
    TrendingUp, Users, ShoppingBag, DollarSign,
    Package, Eye, ShoppingCart, Star
} from 'lucide-react';
import Header from '../components/Header';

// Data arrays
const revenueData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 4500 },
    { name: 'May', value: 6000 },
    { name: 'Jun', value: 5500 }
];

const productPerformance = [
    { name: 'Wireless Headphones', revenue: 2500, impressions: 12000, conversion: 3.2 },
    { name: 'Smart Watch', revenue: 3500, impressions: 15000, conversion: 4.1 },
    { name: 'Backpack', revenue: 1800, impressions: 8000, conversion: 2.8 }
];

const categoryDistribution = [
    { name: 'Electronics', value: 45 },
    { name: 'Fashion', value: 30 },
    { name: 'Home & Living', value: 15 },
    { name: 'Sports', value: 10 }
];

const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

const Page = () => {
    const totalRevenue = revenueData.reduce((acc, item) => acc + item.value, 0);
    const totalImpressions = productPerformance.reduce((acc, item) => acc + item.impressions, 0);
    const averageConversion = productPerformance.reduce((acc, item) => acc + item.conversion, 0) / productPerformance.length;

    const StatCard = ({ icon: Icon, title, value, trend }) => (
        <div className="bg-white dark:bg-def rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="p-2 bg-indigo-100 dark:bg-indigo-900/20 rounded-lg">
                    <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <span className={`text-sm font-medium ${trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {trend > 0 ? '+' : ''}{trend}%
                </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
            <p className="mt-1 text-sm text-gray-500">{title}</p>
        </div>
    );

    return (
        <><Header /><div className="pt-28 px-4 sm:px-6 lg:px-8 max-w-custom mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Seller Dashboard</h1>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    Add New Product
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    icon={DollarSign}
                    title="Total Revenue"
                    value={`$${totalRevenue.toLocaleString()}`}
                    trend={12.5} />
                <StatCard
                    icon={Eye}
                    title="Total Impressions"
                    value={totalImpressions.toLocaleString()}
                    trend={8.2} />
                <StatCard
                    icon={ShoppingCart}
                    title="Conversion Rate"
                    value={`${averageConversion.toFixed(1)}%`}
                    trend={-2.4} />
                <StatCard
                    icon={Package}
                    title="Active Products"
                    value="24"
                    trend={5.7} />
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Revenue Trend */}
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
                                    fillOpacity={0.1} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Category Distribution */}
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
                                    style={{ backgroundColor: COLORS[index] }} />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {item.name} ({item.value}%)
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Performance Table */}
            <div className="bg-white dark:bg-def mb-20 rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                    <h2 className="text-lg font-semibold mb-4">Product Performance</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b dark:border-gray-700">
                                    <th className="pb-4 font-medium text-gray-500">Product</th>
                                    <th className="pb-4 font-medium text-gray-500">Revenue</th>
                                    <th className="pb-4 font-medium text-gray-500">Impressions</th>
                                    <th className="pb-4 font-medium text-gray-500">Conversion Rate</th>
                                    <th className="pb-4 font-medium text-gray-500">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productPerformance.map((product) => (
                                    <tr key={product.name} className="border-b dark:border-gray-700 last:border-0">
                                        <td className="py-4">{product.name}</td>
                                        <td className="py-4">${product.revenue.toLocaleString()}</td>
                                        <td className="py-4">{product.impressions.toLocaleString()}</td>
                                        <td className="py-4">{product.conversion}%</td>
                                        <td className="py-4">
                                            <button className="text-indigo-600 hover:text-indigo-700">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div></>
    );
};

export default Page;
