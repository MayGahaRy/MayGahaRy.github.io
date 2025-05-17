import React from 'react';

function FreeGame({ freeGames }) {
    return (
        <section className="container mx-auto p-4">
            {/*<h2 className="text-2xl font-bold mb-6 text-center">Free Games</h2>*/}
            <div className="flex flex-wrap justify-center gap-15">
                {freeGames.map((game, index) => (
                    <div
                        key={index}
                        className="w-full md:w-[700px] h-[300px] rounded-2xl overflow-hidden
                                 relative group transition-transform duration-300 hover:scale-105"
                    >
                        {/* Game Image Background */}
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${game.url})` }}
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        {/* Game Name */}
                        <div className="absolute bottom-4 left-4 text-white text-xl font-bold">
                            {game.GameName}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FreeGame;