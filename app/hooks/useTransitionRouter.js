'use client';
import { useEffect } from 'react';
import { useTransitionRouter } from 'next-view-transitions';

function useRouteTransition() {
    const router = useTransitionRouter();

    useEffect(() => {
        const handleRouteChangeStart = () => {
            console.log('Route transition started');
        };

        const handleRouteChangeComplete = () => {
            console.log('Route transition completed');
        };

        router.events.on('routeChangeStart', handleRouteChangeStart);
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        router.events.on('routeChangeError', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart);
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
            router.events.off('routeChangeError', handleRouteChangeComplete);
        };
    }, [router]);

    return null;
}

export default useRouteTransition;
