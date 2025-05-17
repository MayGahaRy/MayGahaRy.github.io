import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function GamesCard({ imageUrl, title, price, isFree = false }) {
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    // Card click handler
    const handleCardClick = () => {
        navigate(`/game/${encodeURIComponent(title)}`);
    };

    // Like button handler
    const handleLikeClick = (e) => {
        e.stopPropagation(); // Prevent card click
        setIsLiked(!isLiked);
    };

    // Buy button handler
    const handleBuyClick = (e) => {
        e.stopPropagation(); // Prevent card click
        // Add your buy logic here
    };

    return (
        <div
            className="group relative w-full max-w-[300px] h-[200px] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={handleCardClick}
            tabIndex={0}
            onKeyDown={e => { if (e.key === 'Enter') handleCardClick(); }}
            role="button"
            aria-label={`View details for ${title}`}
        >
            {/* Image Container */}
            <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/40" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg mb-2 truncate">
                    {title}
                </h3>

                <div className="flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button
                        className={`px-4 py-2 rounded-lg text-white ${
                            isFree
                                ? 'bg-blue-500 hover:bg-blue-600'
                                : 'bg-green-500 hover:bg-green-600'
                        }`}
                        onClick={handleBuyClick}
                    >
                        {isFree ? (
                            <>
                                Buy Now -
                                <span className="line-through mx-1">${price.toFixed(2)}</span>
                                Free
                            </>
                        ) : (
                            `Buy Now - $${price.toFixed(2)}`
                        )}
                    </button>
                    <button
                        onClick={handleLikeClick}
                        className={`p-2 rounded-lg transition-colors ${isLiked ? 'text-red-500' : 'text-white'}`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            fill={isLiked ? 'currentColor' : 'none'}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

GamesCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isFree: PropTypes.bool
};

GamesCard.defaultProps = {
    isFree: false
};

export default GamesCard;