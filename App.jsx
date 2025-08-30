import React, { useState } from 'react';
import BottomNav from './components/BottomNav.jsx';
import Dashboard from './components/Dashboard.jsx';
import AddEntry from './components/AddEntry.jsx';
import History from './components/History.jsx';
import Settings from './components/Settings.jsx';

export default function App() {
  const [tab, setTab] = useState('dashboard');

  return (
    <div className="app">
      <header className="header">
        <div className="title">Fin</div>
        <div className="small">Personal PWA</div>
      </header>

      <main className="content">
        {tab==='dashboard' && <Dashboard />}
        {tab==='add' && <AddEntry onAdded={()=>setTab('history')} />}
        {tab==='history' && <History />}
        {tab==='settings' && <Settings />}
      </main>

      <BottomNav tab={tab} setTab={setTab} />
    </div>
  );
}
