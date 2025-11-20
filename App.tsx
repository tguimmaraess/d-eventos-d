import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import EventsView from './components/EventsView';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="ml-16 md:ml-20 min-h-screen flex flex-col">
        <Header title={activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'events' ? 'Eventos' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
        
        <main className="flex-1 overflow-y-auto">
          {activeTab === 'dashboard' && <DashboardView />}
          {activeTab === 'events' && <EventsView />}
          {activeTab !== 'dashboard' && activeTab !== 'events' && (
            <div className="flex flex-col items-center justify-center h-[80vh] text-gray-400">
              <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <h2 className="text-2xl font-bold mb-2 text-gray-600">Em construção</h2>
                <p>O módulo <strong>{activeTab}</strong> estará disponível em breve.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;