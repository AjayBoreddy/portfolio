import React, { useEffect, useRef } from 'react';
import '../index.css';

const Progress = () => {
    const progressRef = useRef();
    const valueRef = useRef();

    useEffect(() => {
        const updateProgress = () => {
            const scrollProgress = progressRef.current;
            const progressValue = valueRef.current;

            const pos = document.documentElement.scrollTop;
            const calculateHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrollValue = Math.round((pos * 100) / calculateHeight);

            // Update the progress text
            progressValue.innerText = `${scrollValue}%`;

            // Apply a visual conic-gradient effect
            scrollProgress.style.background = `conic-gradient(#689af8 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
        };

        // Attach scroll event listener
        window.addEventListener('scroll', updateProgress);

        // Trigger once on page load
        updateProgress();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div id="progress" ref={progressRef}>
            <div ref={valueRef}>0%</div>
        </div>
    );
};

export default Progress;
