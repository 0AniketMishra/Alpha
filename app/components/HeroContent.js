import React from 'react';
import { ArrowRight, Truck, RefreshCw, Shield } from 'lucide-react';

export function HeroContent() {
    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    New Collection 2024
                </span>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight text-black dark:text-white">
                    The Only Marketplace <br />
                    <span className="text-blue-600 dark:text-blue-400">You Need</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-md">
                    Discover our curated collection of premium fashion items designed to make you stand out.
                </p>
            </div>

            <div className="flex gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center group hover:bg-blue-700 transition-colors">
                    Shop
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    Learn
                </button>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-3 gap-6 pt-8 pr-8">
                <div className="flex items-center gap-2">
                    <Truck className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-600">Free Shipping</span>
                </div>
                <div className="lg:flex hidden  items-center gap-2">
                    <Shield className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-600">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                    <RefreshCw className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-600">Easy Returns</span>
                </div>
                <div className="flex items-center gap-2">
                    <Shield className="text-blue-600" size={20} />
                    <span className="text-sm text-gray-600">Secure Payment</span>
                </div>
            </div>
        </div>
    );
}