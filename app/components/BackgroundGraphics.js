import React from 'react';

export function BackgroundGraphics() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated circles */}
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 blur-3xl animate-pulse" />
            <div className="absolute -top-20 -left-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 dark:from-blue-400/5 dark:to-cyan-400/5 blur-2xl animate-pulse delay-700" />

            {/* Decorative grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)]" />

            {/* Floating shapes */}
            <div className="absolute top-20 right-1/4 w-3 h-3 bg-blue-500/30 rounded-full animate-float" />
            <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-purple-500/30 rounded-full animate-float-delay" />
        </div>
    );
}