import React, { useState } from 'react';
import { icons } from '../assets/icons/icons';

const Sidebar = () => {
  const [extended, setExtended] = useState(false)
  const onClick = ()=>{
    setExtended(prev=>!prev)
  }

  return (
    <div className={`min-h-screen bg-[#f0f4f9] flex flex-col transition-all duration-300 ${
        extended ? 'md:w-64 px-6' : 'md:w-20 px-4 w-15 block'
      } `}>
      <div className="mt-[15px]">
        <img
          src={icons.menu_icon}
          alt="menu"
          className="w-[30px] block md:ml-2.5 cursor-pointer hover:opacity-70 transition"
          onClick={onClick}
        />
      </div>
        <div className='flex items-center justify-center'>
      <div className="gap-3 my-[30px] py-2 px-1.5 inline-flex items-center bg-[#e6eaf1] rounded-3xl text-gray-500 text-sm cursor-pointer hover:bg-[#dde2ea] transition">
        <img src={icons.plus_icon} alt="new chat" className="h-5 w-5" />
        {extended?<span>new chat</span>:null}
      </div>
      </div>
      <div className="flex flex-col flex-1">
      {extended?
      <>
        <p className="mt-[30px] mb-5 text-sm font-medium text-gray-600">Recent</p>

        <div className="space-y-1">
          <div className="flex items-start gap-2.5 py-2.5 px-2.5 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition">
            <img src={icons.message_icon} alt="chat" className="w-[30px] shrink-0 mt-0.5" />
            <p className="text-sm pt-1">..</p>
          </div>

          <div className="flex items-start gap-2.5 py-2.5 px-2.5 pr-10 rounded-full text-[#282828] cursor-pointer hover:bg-[#e2e6eb] transition">
            <img src={icons.message_icon} alt="chat" className="w-[30px] h-[30px] shrink-0 mt-0.5" />
            <p className="text-sm pt-1">..</p>
          </div>
        </div>
        </>
      :null}
      </div>

      <div className="flex flex-col space-y-4 pb-4 md:pl-2">
        <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-70 transition">
          <img src={icons.question_icon} alt="help" className="w-[30px] h-[30px]" />
          {extended?<p className="text-sm text-gray-700">Help</p>:null}
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-70 transition">
          <img src={icons.history_icon} alt="history" className="w-[30px] h-[30px]" />
          {extended?<p className="text-sm text-gray-700">Activity</p>:null}
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-70 transition">
          <img src={icons.setting_icon} alt="settings" className="w-[30px] h-[30px]" />
          {extended?<p className="text-sm text-gray-700">Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;