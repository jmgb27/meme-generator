import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Memes from "./memesData";
let newArr = [];
function App() {
    function generateImage() {
        newArr = Memes.data.memes.filter((x) => {
            return x.box_count === 2;
        });
        setRand(Math.floor(Math.random() * newArr.length));
        setShowImage(true);
    }
    const [rand, setRand] = useState(0);
    const [showImage, setShowImage] = useState(false);
    return (
        <div className="App">
            <Header />
            <div className="m-auto w-[700px]">
                <Form
                    generate={(e) => {
                        e.preventDefault();
                        generateImage();
                    }}
                />
                {showImage ? (
                    <img className="h-[400px] m-auto" src={newArr[rand].url} />
                ) : null}
            </div>
        </div>
    );
}

export default App;
