import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds total loading time
        const intervalTime = 20; // Update every 20ms
        const steps = duration / intervalTime;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 500); // Wait a bit before unmounting
                    return 100;
                }
                return next;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <div className="loading-screen">
            <div className="loading-text">
                NR<span className="loading-dot">.</span>
            </div>
            <div className="loading-bar-container">
                <div
                    className="loading-bar"
                    style={{ width: `${count}%` }}
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
