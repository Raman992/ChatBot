import React from 'react';
import { icons } from '../../public/icons';

const Sidebar = () => {
  return (
    <div className="min-h-screen hidden md:inline-flex flex-col justify-between bg-[#f0f4f9] px-[15px] pt-2.5 pb-[15px] w-64">
      <div className="mt-[15px]">
        <img
          src={icons.menu_icon}
          alt="menu"
          className="w-[30px] block ml-2.5 cursor-pointer hover:opacity-70 transition"
        />
      </div>
        <div className='flex items-center justify-center'>
      <div className="gap-3 mt-[50px] inline-flex items-center bg-[#e6eaf1] rounded-full text-gray-500 text-sm cursor-pointer hover:bg-[#dde2ea] transition">
        <img src={icons.plus_icon} alt="new chat" className="h-[30px]" />
        <span>new chat</span>
      </div>
      </div>
      <div className="flex flex-col flex-1">
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
      </div>

      <div className="flex flex-col space-y-4 pb-4">
        <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-70 transition">
          <img src={icons.question_icon} alt="help" className="w-[30px] h-[30px]" />
          <p className="text-sm text-gray-700">Help</p>
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-70 transition">
          <img src={icons.history_icon} alt="history" className="w-[30px] h-[30px]" />
          <p className="text-sm text-gray-700">Activity</p>
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer hover:opacity-70 transition">
          <img src={icons.setting_icon} alt="settings" className="w-[30px] h-[30px]" />
          <p className="text-sm text-gray-700">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;