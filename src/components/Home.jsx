import React from 'react';
import { icons } from '../../public/icons';
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
        <p>Gemini Clone</p>
        <img src={icons.user_icon} alt="" className="w-[50px] rounded-full" />
      </div>

      {/* CONTAINER */}
      <div className="max-w-[900px] mx-auto">
        
        {/* GREETING */}
        <div className="my-[50px] text-[56px] text-[#c4c7c5] font-semibold">
          <p className="leading-tight">
            Hello <span className="bg-gradient-to-tr from-[#4b90ff] to-[#ff5546] text-transparent bg-clip-text">Developer</span>
          </p>
        </div>

        {/* CARDS */}
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

      </div>

      {/* BOTTOM SEARCH */}
      <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
        <div className="flex items-center justify-between gap-5 bg-[#f0f4f9] rounded-full py-2.5 px-5">
          <img src={icons.gallery_icon} alt="" className="w-[24px] cursor-pointer" />
          <input
            type="text"
            placeholder="Ask Gemini…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none border-none p-2 text-[18px]"
          />
          <div className="flex items-center gap-4">
            <img src={icons.mic_icon} alt="" className="w-[24px] cursor-pointer" />
            <img src={icons.send_icon} onClick={onSent} alt="" className="w-[24px] cursor-pointer" />
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
            <img src={icons.user_icon} alt="" className="w-[40px] rounded-full" />
            <p className="text-xl">{recentPrompt}</p>
          </div>

          <div className="flex items-start gap-5">
            <img src={icons.gemini_icon} alt="" className="w-[40px] rounded-full" />

            {/* LOADING ANIMATION */}
            {loading ? (
              <div className="w-full flex flex-col gap-2">
                {[...Array(6)].map((_, i) => (
                  <hr
                    key={i}
                    className="rounded bg-gradient-to-r from-[#b1d5ee] via-[#c953e98a] to-[#9ed7ff] bg-[length:800px_50px] h-[20px] animate-[loader_4s_linear_infinite] border-none"
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
