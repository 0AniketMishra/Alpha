import React from 'react';

export function BackgroundGraphics() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none ">
            {/* Animated circles */}
            {/* <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 blur-3xl animate-pulse" /> */}
            {/* <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-400/5 dark:to-cyan-400/5 blur-2xl animate-pulse delay-700" /> */}

            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />

         
        </div>
    );
}