import React from 'react';
import Header from "../Component/Header.jsx";
import { Slider } from "../Component/Slider.jsx";
import GameStyleList from "../Component/GameStyle.jsx";
import FreeGame from "../Component/FreeGame.jsx";
import SectionTitle from "../Component/SectionTitle.jsx";
import GamesCard from "../Component/GamesCard.jsx";
// Import images directly
import img1 from "../assets/img/gamebanerslider1.jpg";
import img2 from "../assets/img/gamebanerslider2.png";
import img3 from "../assets/img/gamebanerslider3.png";
// Import images Game Styles
import ImgAction from "../assets/img/Action.jpg";
import ImgRPG from "../assets/img/RPG.jpg";
import ImgSurvival from "../assets/img/Survival.jpg";
import ImgSport from "../assets/img/Sport.jpg";
// Import Images Free games
import FC24 from "../assets/img/FC24.jpg";
import DyingLight from "../assets/img/DyingLight2.png";
import R_E_P_O_cover from "../assets/img/R_E_P_O_cover.jpg";
import DeadbyDaylight from "../assets/img/DeadbyDaylight.avif";
import mainbanner from "../assets/img/mainbaner.png";
const slides = [
    {
        url: ImgAction,
        panelUrl: "../assets/img/mainbaner.png",  // Add panel image path
        title: "Action game is available in site now !"
    },
    {
        url: FC24,
        panelUrl: "../assets/img/mainbaner.png",
        title: "FC24 is Free for just today !"
    },
    {
        url: DyingLight,
        panelUrl: "../assets/img/white-panel-image3.jpg",
        title: "DyingLight is Free for just today !"
    }
];

const games = [
    { url: ImgAction, text: "Action Games" },
    { url: ImgRPG, text: "RPG Games" },
    { url: ImgSurvival, text: "Strategy Games" },
    { url: ImgSport, text: "Sports Games" },
];

const freegames = [
    { url: FC24, GameName: "FC24" },
    { url: DyingLight, GameName: "Dying Light 2" },
];
const sectionsname = [
    {title:"Free Game"},
    {title:"Games"}
]

const gamesprop = [
    {
        imageUrl: FC24,
        title: "FC 24 - Ultimate Edition",
        price: 69.99,
        isFree: true
    },
    {
        imageUrl: DyingLight,
        title: "Dying Light 2",
        price: 49.99,
        isFree: true
    },
    {
        imageUrl: R_E_P_O_cover,
        title: "R.E.P.O.",
        price: 5.79,
        isFree: false
    },
    {
      imageUrl: DeadbyDaylight,
      title: "Deadby Daylight",
      price: 14.99,
      isFree: false
    },
];

export function Home() {
    return (
        <div className="">
            <Header/>
            <main className="mx-auto">
                <Slider
                    slides={slides}
                    panelImage={mainbanner}  // Static main banner image
                />
                <SectionTitle title="Game Categories"/>
                <GameStyleList games={games}/>

                <SectionTitle title="Free Games"/>
                <FreeGame freeGames={freegames}/>
                <SectionTitle title="Games"/>
                <div className="flex justify-center">
                    <div className="grid w-full max-w-7xl gap-6 py-8 px-2
                                    grid-cols-1
                                    sm:grid-cols-2
                                    md:grid-cols-2
                                    lg:grid-cols-4">
                        {gamesprop.map((game, index) => (
                            <GamesCard
                                key={index}
                                imageUrl={game.imageUrl}
                                title={game.title}
                                price={game.price}
                                isFree={game.isFree}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;