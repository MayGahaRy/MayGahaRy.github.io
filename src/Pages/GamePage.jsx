import React, {useState} from 'react';
import Header from "../Component/Header.jsx";
import GamesCard from "../Component/GamesCard.jsx";
import FC24 from "../assets/img/FC24.jpg";
import DyingLight from "../assets/img/DyingLight2.png";
import R_E_P_O_cover from "../assets/img/R_E_P_O_cover.jpg";
import DeadbyDaylight from "../assets/img/DeadbyDaylight.avif";
import { useParams } from "react-router-dom";

const gamesprop = [
    {
        imageUrl: FC24,
        title: "FC 24 - Ultimate Edition",
        price: 69.99,
        isFree: true,
        type: "Sports"
    },
    {
        imageUrl: DyingLight,
        title: "Dying Light 2",
        price: 49.99,
        isFree: true,
        type: "Action"
    },
    {
        imageUrl: R_E_P_O_cover,
        title: "R.E.P.O.",
        price: 5.79,
        isFree: false,
        type: "Strategy"
    },
    {
        imageUrl: DeadbyDaylight,
        title: "Deadby Daylight",
        price: 14.99,
        isFree: false,
        type: "Horror"
    },
];


export default function GamePage() {
    const [isLiked, setIsLiked] = useState(false);
    const { title } = useParams();
    const decodedTitle = title ? decodeURIComponent(title) : "";
    const game = gamesprop.find(g => g.title.trim().toLowerCase() === decodedTitle.trim().toLowerCase());
    // Like button handler
    const handleLikeClick = (e) => {
        e.stopPropagation(); // Prevent card click
        setIsLiked(!isLiked);
    };
    if (!game) {
        return (
            <div>
                <Header />
                <div className="text-center text-white py-20 text-2xl">Game not found.</div>
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="flex flex-wrap w-full mx-auto mt-8 gap-8">
                {/* Game Image */}
                <div className="flex-1 min-w-[300px] max-w-[1500px] h-[500px] rounded-r-[100px] overflow-hidden shadow-lg bg-white/30  flex items-center justify-center">
                    <img
                        src={game.imageUrl}
                        alt={game.title}
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Game Info */}
                <div className="flex-1 min-w-[250px] flex flex-col gap-4 justify-center rounded-tl-[188px] text-center rounded-bl-[53px] bg-linear-to-t from-stone-50/0.0 to-stone-50/40 backdrop-blur-sm drop-shadow-lg relative">
                    <h2 className="text-3xl font-bold text-white">{game.title}</h2>
                    <div className="text-lg text-white">Type: {game.type}</div>
                    <div className="text-lg text-white">
                        Price: {game.isFree ? <span className="text-green-300">Free</span> : `$${game.price}`}
                    </div>
                    <div className="flex gap-4 mt-4 b-0 absolute bottom-0 left-0 p-2">
                        <button className="bg-blue-500 text-white px-15 py-5 rounded-[20px] rounded-bl-[53px] font-bold shadow hover:bg-blue-600 transition">Buy</button>
                        <button onClick={handleLikeClick} className={`bg-blue-400 text-white px-15 py-5 rounded-[10px] font-bold shadow hover:bg-blue-500 transition ${isLiked ? 'text-red-500' : 'text-white'}`}>
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
                        <button className="bg-blue-300 text-white px-15 py-5 rounded-[10px] font-bold shadow hover:bg-blue-400 transition">Add to Wish List</button>
                    </div>
                </div>
            </div>
            {/* Suggested Games */}
            <div className="max-w-full mx-auto mt-12 p-[20px]">
                <div className="mb-2 font-bold text-lg text-white">Suggested Games</div>
                <div className="flex gap-4 overflow-x-auto pb-4 cursor-grab">
                    {gamesprop.filter(g => g.title !== game.title).map((g, idx) => (
                        <div key={idx} className="min-w-[250px]">
                            <GamesCard
                                imageUrl={g.imageUrl}
                                title={g.title}
                                price={g.price}
                                isFree={g.isFree}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}