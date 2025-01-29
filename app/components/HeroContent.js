import React from 'react';
import { ArrowRight, Truck, RefreshCw, Shield } from 'lucide-react';

export function HeroContent() {
    return (
        <div className="space-y-8">
            <div className="space-y-6">
                <span className="px-3 py-1 bg-orange-100 text-black rounded-full text-sm font-medium">
                    Lowest Fees Guaranteed
                </span>
                {/* <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-red-500/5 dark:to-orange-500/5 blur-3xl animate-pulse" /> */}

                <div className="absolute -top-80 -left-20 w-[700px] h-[700px] rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-400/5 dark:to-orange-400/5 blur-2xl animate-pulse delay-900" />
                <h1 className="text-5xl font-bold text-gray-900 leading-tight text-black dark:text-white">
                    The Only Darknet Marketplace <br />
                    <span className="dark:text-orange-500 text-orange-600">You Need To Use!</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-md">
                    Discover our curated collection of premium fashion items designed to make you stand out.
                </p>
            </div>

            <div className="flex gap-4">
                <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-medium inline-flex items-center group hover:bg-orange-700 transition-colors">
                    Shop
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    Learn
                </button>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-3 gap-6 pt-8 pr-8">
                <div className="flex items-center gap-2">
                    <Truck className=" dark:text-orange-400" size={20} />
                    <span className="text-sm text-black dark:text-gray-400">Free Shipping</span>
                </div>
                <div className="lg:flex hidden  items-center gap-2">
                    <Shield className="text-orange-400" size={20} />
                    <span className="text-sm text-black dark:text-gray-400">Secure Payment</span>
                </div>
                <div className="flex items-center gap-2">
                    <RefreshCw className="text-orange-400" size={20} />
                    <span className="text-sm text-black dark:text-gray-400">Easy Returns</span>
                </div>
            </div>
        </div>
    );
}