import React from 'react';

function GameStyleList({ games }) {
    return (
        <div className="transform translate-y-10 mx-auto p-30 w-screen bg-neutral-200/80 dark:bg-neutral-900/80">
            <div className="flex flex-wrap justify-center gap-4 md:gap-24">
                {games.map((game, index) => (
                    <div
                        key={index}
                        className="group relative w-[150px] h-[150px] md:w-[250px] md:h-[250px]
                                   rounded-2xl overflow-hidden transition-transform duration-300 drop-shadow-md
                                   hover:scale-105 hover:shadow-lg"
                    >
                        {/* Game Image */}
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${game.url})` }}
                        />

                        {/* Text Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4
                                        text-center text-sm md:text-base transition-all duration-300
                                        group-hover:bg-black/80">
                            {game.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GameStyleList;