import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Meme from "./memesData";

function generateMeme() {}

function App() {
    return (
        <div className="App">
            <Header />
            <div className="m-auto w-[700px]">
                <Form />
                <img src={Meme.data.memes[3].url} />
            </div>
        </div>
    );
}

export default App;
