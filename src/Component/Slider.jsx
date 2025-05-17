import React, { useState, useEffect } from 'react';

export function Slider({ slides, panelImage }) { // Fixed line 3
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex(prev => (prev + 1) % slides.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, slides.length, isPaused]);

    const goToNext = () => {
        setCurrentIndex(prev => (prev + 1) % slides.length);
    };

    const goToPrevious = () => {
        setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full relative min-h-[400px] md:min-h-[500px]"
             onMouseEnter={() => setIsPaused(true)}
             onMouseLeave={() => setIsPaused(false)}>

            {/* Main Container */}
            <div className="mx-auto flex flex-col-reverse md:flex-row items-center gap-24 pt-5">

                {/* Static White Panel Banner */}
                <div
                    className="w-full md:w-[35%] h-[300px] md:h-[500px] bg-neutral-200 rounded-r-[200px] shadow-[var(--drop-shadow-slider)] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${panelImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    {/* Main banner content */}
                </div>

                {/* Image Slider */}
                <div className="w-full md:w-[60%] relative h-[300px] md:h-[500px]">
                    <div
                        className="w-full h-full rounded-l-[200px] bg-cover bg-center transition-all duration-500 shadow-[var(--drop-shadow-slider)]"
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}>

                        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded text-sm md:text-base">
                            {slides[currentIndex].title}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors">
                        &lt;
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors">
                        &gt;
                    </button>

                    {/* Progress Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                                    index === currentIndex ? 'bg-white' : 'bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}