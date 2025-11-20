import React from 'react';
import { LayoutDashboard, ShoppingBag, Users, FileText, LogOut, Wallet } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'events', label: 'Eventos', icon: <Users size={20} /> }, // Using events as secondary view
    { id: 'pos', label: 'Caixas', icon: <Wallet size={20} /> },
    { id: 'products', label: 'Produtos', icon: <ShoppingBag size={20} /> },
    { id: 'reports', label: 'Relatórios', icon: <FileText size={20} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-16 md:w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 z-20 shadow-sm">
      <div className="mb-8">
        <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-xl">
          D
        </div>
      </div>

      <nav className="flex-1 flex flex-col gap-4 w-full">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full p-3 flex justify-center transition-colors relative group ${
              activeTab === item.id 
                ? 'text-indigo-600 bg-indigo-50 border-r-4 border-indigo-600' 
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.icon}
            <span className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <button className="mb-4 p-3 text-gray-400 hover:text-red-500 transition-colors">
        <LogOut size={20} />
      </button>
    </aside>
  );
};

export default Sidebar;