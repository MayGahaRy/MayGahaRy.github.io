import React from 'react';
import PropTypes from 'prop-types';
import Header from "../Component/Header.jsx";
import GamesCard from "../Component/GamesCard.jsx";
import FC24 from "../assets/img/FC24.jpg";
import DyingLight from "../assets/img/DyingLight2.png";
import R_E_P_O_cover from "../assets/img/R_E_P_O_cover.jpg";
import DeadbyDaylight from "../assets/img/DeadbyDaylight.avif";
import { useState } from "react";

const gamesData = [
  {
    imageUrl: FC24,
    title: "FC 24 - Ultimate Edition",
    price: 69.99,
    isFree: true,
  },
  {
    imageUrl: DyingLight,
    title: "Dying Light 2",
    price: 49.99,
    isFree: true,
  },
  {
    imageUrl: R_E_P_O_cover,
    title: "R.E.P.O.",
    price: 5.79,
    isFree: false,
  },
  {
    imageUrl: DeadbyDaylight,
    title: "Deadby Daylight",
    price: 14.99,
    isFree: false,
  },
];

export function Shop() {
  const [search, setSearch] = useState("");

  const filteredGames = gamesData.filter(game =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            className="w-full p-3 rounded border shadow-[var(--drop-shadow-slider)] border-0"
            placeholder="Search games by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        {/* Responsive Grid of Games */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.length > 0 ? (
            filteredGames.map((game, index) => (
              <GamesCard
                key={index}
                imageUrl={game.imageUrl}
                title={game.title}
                price={game.price}
                isFree={game.isFree}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">No games found.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Shop;