import React from 'react';
import { Calendar, ChevronLeft, ChevronRight, CreditCard, Ticket, DollarSign, MapPin, Edit2 } from 'lucide-react';

const EventsView: React.FC = () => {
  return (
    <div className="p-6 space-y-6 max-w-[1600px] mx-auto">
      
      {/* Event Header Card */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
         <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
               <MapPin size={18} className="text-indigo-500" />
               <span className="font-semibold uppercase tracking-wide text-sm md:text-base">Baguncinha x Quintal do Augusto</span>
            </div>
            <div className="flex gap-4 text-xs font-medium text-gray-400">
               <span className="text-indigo-600 border-b-2 border-indigo-600 cursor-pointer pb-1">Mais recente</span>
               <span className="hover:text-gray-600 cursor-pointer">Mais antigo</span>
               <span className="hover:text-gray-600 cursor-pointer">Maior faturamento</span>
            </div>
         </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-slate-800 text-white rounded-xl p-4 flex justify-between items-center shadow-lg">
         <span className="font-medium px-2">1 eventos</span>
         <div className="flex items-center gap-4">
            <button className="hover:text-indigo-300"><ChevronLeft size={20} /></button>
            <div className="flex items-center gap-2 font-semibold">
               <Calendar size={18} />
               <span>Outubro de 2025</span>
            </div>
            <button className="hover:text-indigo-300"><ChevronRight size={20} /></button>
         </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Green Cards - Revenue */}
         <div className="bg-green-400 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-32 relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-full -mr-8 -mt-8"></div>
            <div className="flex items-center gap-2 mb-1 z-10">
               <DollarSign size={20} className="opacity-80" />
               <span className="font-medium opacity-90">Faturamento total</span>
            </div>
            <span className="text-3xl font-bold z-10">R$ 86.615,52</span>
         </div>

         <div className="bg-green-400 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-32 relative overflow-hidden group hover:scale-[1.02] transition-transform">
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-5 rounded-full -ml-10 -mb-10"></div>
            <div className="flex items-center gap-2 mb-1 z-10">
               <DollarSign size={20} className="opacity-80" />
               <span className="font-medium opacity-90">Total consumido</span>
            </div>
            <span className="text-3xl font-bold z-10">R$ 95.645,89</span>
         </div>

         {/* Purple Cards - Cashless */}
         <div className="bg-slate-700 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-32 relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="absolute top-1/2 right-4 w-12 h-12 border-2 border-white opacity-10 rounded-full"></div>
            <div className="flex items-center gap-2 mb-1 z-10">
               <CreditCard size={20} className="opacity-80" />
               <span className="font-medium opacity-90">Ticket médio cashless</span>
            </div>
            <span className="text-3xl font-bold z-10">R$ 185,08</span>
         </div>

         <div className="bg-slate-700 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-32 relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-2 mb-1 z-10">
               <CreditCard size={20} className="opacity-80" />
               <span className="font-medium opacity-90">Clientes cashless</span>
            </div>
            <span className="text-3xl font-bold z-10">468</span>
         </div>

         {/* Cyan Cards - Fichas */}
         <div className="bg-cyan-400 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-32 relative overflow-hidden group hover:scale-[1.02] transition-transform">
             <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-20 transform rotate-45 translate-x-8 -translate-y-8"></div>
            <div className="flex items-center gap-2 mb-1 z-10">
               <Ticket size={20} className="opacity-80" />
               <span className="font-medium opacity-90">Ticket médio ficha</span>
            </div>
            <span className="text-3xl font-bold z-10">R$ 0,00</span>
         </div>

         <div className="bg-cyan-400 text-white p-6 rounded-2xl shadow-md flex flex-col justify-between h-32 relative overflow-hidden group hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-2 mb-1 z-10">
               <Ticket size={20} className="opacity-80" />
               <span className="font-medium opacity-90">Fichas emitidas</span>
            </div>
            <span className="text-3xl font-bold z-10">0</span>
         </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center gap-4 border-b border-gray-200 pb-4">
         <button className="bg-red-400 hover:bg-red-500 text-white text-sm font-medium px-4 py-2 rounded shadow-sm transition-colors flex items-center gap-2">
            <span>×</span> Encerrar evento aberto
         </button>
         <div className="flex text-sm font-medium text-gray-400 gap-4">
            <span className="text-gray-600 border-b-2 border-gray-600 cursor-pointer">Dados na vertical</span>
            <span className="hover:text-gray-600 cursor-pointer">Dados na horizontal</span>
         </div>
      </div>

      {/* Event List Item */}
      <div className="bg-white rounded-l-xl border-l-8 border-green-400 shadow-sm flex flex-col md:flex-row overflow-hidden h-auto md:h-48 relative">
         {/* Left Side: Info */}
         <div className="p-6 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xl font-semibold text-slate-800 mb-4">
               <span>Qui - 23/10</span>
               <button className="text-gray-400 hover:text-indigo-600"><Edit2 size={16} /></button>
            </div>
            
            <div className="mb-4">
               <span className="bg-slate-700 text-white text-xs px-3 py-1.5 rounded-md flex items-center gap-2 w-max">
                  <CreditCard size={12} /> Cashless
               </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
               <Calendar size={14} />
               <span>23/10/2025 - 19:46</span>
            </div>

             {/* Vertical text label */}
             <div className="absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center -ml-6">
                 <span className="transform -rotate-90 text-white font-bold text-xs tracking-widest uppercase">Aberto</span>
             </div>
         </div>

         {/* Right Side: Stats Summary */}
         <div className="bg-white p-6 w-full md:w-[500px] flex flex-col justify-center gap-3 border-l border-gray-100 relative">
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500 flex items-center gap-2"><DollarSign size={14} /> Faturamento</span>
               <span className="bg-green-400 text-white px-2 py-0.5 rounded text-xs font-bold">R$ 86.615,52</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500 flex items-center gap-2"><DollarSign size={14} /> Total consumido</span>
               <span className="bg-green-400 text-white px-2 py-0.5 rounded text-xs font-bold">R$ 95.645,89</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500 flex items-center gap-2"><CreditCard size={14} /> Clientes</span>
               <span className="bg-slate-700 text-white px-2 py-0.5 rounded text-xs font-bold">468</span>
            </div>
            <div className="flex justify-between items-center text-sm">
               <span className="text-gray-500 flex items-center gap-2"><CreditCard size={14} /> Ticket médio</span>
               <span className="bg-slate-700 text-white px-2 py-0.5 rounded text-xs font-bold">R$ 185,08</span>
            </div>

            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center transition-colors">
               <ChevronRight size={16} className="text-gray-400" />
            </div>
         </div>
      </div>
    </div>
  );
};

export default EventsView;