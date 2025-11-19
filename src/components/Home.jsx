import React from 'react';
import { icons } from '../assets/icons/icons';
import { useContext } from "react";
import { Context } from '../context/Context';

const Home = () => {
  const {
    onSent,
    recentPrompt,
    showResults,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleCardClick = (promptText) => {
    setInput(promptText);
  };

  return (
    <div className="flex-1 min-h-screen pb-[25vh] relative main">
      {/* NAVBAR */}
      <div className="flex items-center justify-between text-[22px] p-5 text-[#585858]">
        <h1>ChatBot</h1>
        <img src={icons.user_icon} alt="" className="w-[50px] rounded-full" />
      </div>

      {/* CONTAINER */}
      <div className="max-w-[900px] mx-auto">
        
        {/* GREETING */}
        <div className="my-[50px] text-[56px] text-[#c4c7c5] font-semibold">
          <h1 className="leading-tight">
            Hello <span className="bg-linear-to-tr from-[#4b90ff] to-[#ff5546] text-transparent bg-clip-text">Developer</span>
          </h1>
        </div>

        {/* CARDS */}
        {!showResults &&(
        <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
          {[ 
            "Explain React Context",
            "Create UI Components",
            "Fix JavaScript Bugs",
            "Generate API Ideas"
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(item)}
              className="h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea] transition"
            >
              <p className="text-[#585858] text-[17px]">{item}</p>
              <img
                src={icons.send_icon}
                alt=""
                className="w-[35px] p-[5px] rounded-[20px] bg-white absolute bottom-2 right-2"
              />
            </div>
          ))}
        </div>
          )}
      </div>

      {/* BOTTOM SEARCH */}
      <div className="absolute left-0 right-0 bottom-0 w-full px-5 mx-auto">
        <div className='flex justify-center'>
        <div className="flex items-center justify-between gap-5 bg-[#cfcfcf] rounded-full py-2.5 px-5 shadow-2xl">
          <img src={icons.gallery_icon} alt="gallery" className="w-[24px] cursor-pointer" />
          <input
            type="text"
            placeholder="Ask Gemini…"
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none p-2 text-[18px]"
          />
          <div className="flex items-center gap-4">
            <img src={icons.mic_icon} alt="mic" className="w-[24px] cursor-pointer" />
            <img src={icons.send_icon} onClick={onSent}  alt="send" className="w-[24px] cursor-pointer" />
          </div>
        </div>
      </div>
        <p className="text-[13px] my-4 text-center font-light text-gray-500">
          Gemini may display inaccurate info, so double-check important details.
        </p>
      </div>

      {/* RESULT SECTION */}
      {showResults && (
        <div className="px-[5%] max-h-[70vh] overflow-y-scroll no-scrollbar">
          <div className="my-10 flex items-center gap-5">
            <img src={icons.user_icon} alt="user" className="w-[40px] rounded-full" />
            <p className="text-xl">{recentPrompt}</p>
          </div>

          <div className="flex items-start gap-5">
            <img src={icons.gemini_icon} alt="gemini" className="w-[40px] rounded-full" />

            {/* LOADING ANIMATION */}
            {loading ? (
              <div className="w-full flex flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <hr
                    key={i}
                    className="rounded bg-linear-to-r from-[#b1d5ee] via-[#c953e98a] to-[#9ed7ff] bg-size-[800px_50px] h-5 animate-[loader_4s_linear_infinite] border-none"
                  />
                ))}
              </div>
            ) : (
              <p className="text-[17px] font-light leading-[1.8] whitespace-pre-wrap">
                {resultData}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
