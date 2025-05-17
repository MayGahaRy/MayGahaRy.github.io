import React from 'react';
import {Link} from 'react-router-dom';

export function Nav() {
    return (
        <div className="aling-center container mx-auto pt-[20px]">
            <div className="bg-linear-[170deg,rgba(255,255,255,0.65)_0%,rgba(46,128,251,0.5)_35%,rgba(46,128,251,0.2)_69%,rgba(46,128,252,1)_100%] p-[1px] rounded-[20px]">
                <div className="bg-blue-500 rounded-[20px]">
                    <div className="bg-linear-to-t from-stone-50/0.0 to-stone-50/40 backdrop-blur-sm drop-shadow-lg p-[20px] font-Signika text-neutral-100 text-[25px] [text-shadow:_0_2px_4px_rgb(51_51_51_/_0.3)] rounded-[20px]">
                        <ul className="w-full flex items-center justify-center gap-[4vw] font-bold">
                            <li className="flex flex-wrap items-center justify-between">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/Contact-Us">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Nav;