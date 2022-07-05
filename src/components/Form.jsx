import React from "react";

export default function Form() {
    return (
        <div className="flex-col">
            <form className="py-8">
                <input
                    className="border-solid border-2 border-gray-900"
                    type="text"
                    placeholder="Top Text"
                />
                <input
                    className="border-solid border-2 border-gray-900"
                    type="text"
                    placeholder="Bottom Text"
                />
                <button className="mt-4 h-[50px] text-white font-bold w-[100%] bg-gradient-to-r from-[#672280] to-[#A626D3]">
                    Get a new meme image 🖼️
                </button>
            </form>
        </div>
    );
}
