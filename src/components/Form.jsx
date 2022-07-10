import React, { useState } from "react";

export default function Form({ generate, fillForm }) {
    return (
        <div className="flex-col pb-5">
            <form className="py-8">
                <input
                    className="border-solid border-2 border-gray-900"
                    type="text"
                    placeholder="Top Text"
                    name="topText"
                    onChange={fillForm}
                />
                <input
                    className="border-solid border-2 border-gray-900"
                    type="text"
                    placeholder="Bottom Text"
                    name="bottomText"
                    onChange={fillForm}
                />
                <button
                    className="mt-4 h-[50px] text-white font-bold w-[100%] bg-gradient-to-r from-[#672280] to-[#A626D3]"
                    onClick={generate}
                >
                    Get a new meme image 🖼️
                </button>
            </form>
        </div>
    );
}
