import React from 'react';
import { Shield, Lock } from 'lucide-react';

export function HeroImage() {
    return (
        <div className="relative w-full h-full mt-12 lg:mt-0 overflow-hidden md:hidden block lg:block">
            {/* Main image container with gradient overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 dark:from-blue-900/40 dark:to-purple-900/40 mix-blend-overlay" />
                <img
                    src="https://www.forex.academy/wp-content/uploads/2023/04/what-is-forex-in-trading.jpg"
                    alt="Secure crypto payments"
                    className="w-full h-[400px] lg:h-[500px]  object-cover"
                />

                {/* Floating security badges */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 p-3 rounded-xl backdrop-blur-sm shadow-lg flex items-center gap-2 animate-float">
                    <Shield className="text-blue-600 dark:text-blue-400" size={24} />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Bank-grade Security</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-gray-900/90 p-3 rounded-xl backdrop-blur-sm shadow-lg flex items-center gap-2 animate-float-delay">
                    <Lock className="text-purple-600 dark:text-purple-400" size={24} />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">End-to-End Encrypted</span>
                </div>
            </div>
        </div>
    );
}