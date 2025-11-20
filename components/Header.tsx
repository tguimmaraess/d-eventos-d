import React from 'react';
import { Bell, Menu, User } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 px-6 flex items-center justify-between sticky top-0 z-10 ml-16 md:ml-20">
      <div className="flex items-center gap-4">
        <button className="md:hidden text-gray-500">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold text-slate-800">{title}</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-700">Administrador</p>
            <p className="text-xs text-gray-500">Gerente Geral</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border border-gray-300">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;