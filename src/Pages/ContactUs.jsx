import React from 'react';
import Header from "../Component/Header.jsx";

export function ContactUs() {
    return (
        <>
            <Header/>
            <div className="aling-center container mx-auto p-20">
                <div
                    className="text-center p-10 bg-linear-to-t from-stone-50/0.0 to-stone-50/40 backdrop-blur-sm drop-shadow-lg rounded-[20px] text-neutral-100 text-[25px] [text-shadow:_0_2px_4px_rgb(51_51_51_/_0.3)] font-bold">
                    Created by : Abolfazl Karami
                    <div className="p-10">
                        If you have problem at site you can connect us with : a.b.k.10xd@gmail.com
                    </div>
                    <a href="">
                    <div className="p-5 bg-linear-to-t from-stone-50/0.0 to-stone-50/40 backdrop-blur-sm drop-shadow-lg rounded-[20px]">
                        If you enjoyed you can buy a coffee for me.☕
                        Thanks ❤️
                    </div>
                    </a>
                </div>
            </div>

        </>
    );
}

export default ContactUs;