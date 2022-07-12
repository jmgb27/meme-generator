import React from "react";
import Lol from "../images/lol.png";

export default function Header() {
    return (
        <div className="flex bg-gradient-to-r from-[#672280] to-[#A626D3] text-white px-14 py-4">
            <img className="h-[50px] pr-3 self-center" src={Lol} />
            <h1 className="text-[40px] self-center font-bold tracking-tighter">
                Meme Generator
            </h1>
            <span className="ml-auto self-center">
                React Course - Project 3
            </span>
        </div>
    );
}
