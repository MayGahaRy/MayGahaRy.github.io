import React from 'react';

function SectionTitle({ title }) {
    return (
        <section className="mx-auto my-8 pt-10">
            <div className="flex flex-col items-center">
                {/* Section Title */}
                <h2 className=" bg-neutral-300 drop-shadow-lg p-2 rounded-t-[20px] text-2xl font-bold text-center text-white mb-0">
                    {title}
                </h2>

                {/* Decorative Line */}
                <div className="relative w-full">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full h-[15px]  bg-neutral-300 backdrop-blur-sm drop-shadow-lg mx-auto" style={{ width: '100%' }}></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-neutral-300 backdrop-blur-sm drop-shadow-lg-300 text-gray-500 text-sm">
                            {/* Optional decorative element */}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionTitle;