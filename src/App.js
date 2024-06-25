import './App.css';
import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ActionBar from './components/ActionBar/ActionBar';
import Settings from './components/Settings/Settings';
import BackButton from './components/BackButton/BackButton';
import Balance from './components/Balance/Balance';

const Layout = ({ children }) => {
  return (
    <div>
      <BackButton />
      {children}
    </div>
  );
};

function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="settings" element={<Settings />} />
          {/* Другие маршруты здесь */}
        </Routes>
    </div>
  );
}

const HomePage = () => {
  return (
    <Layout>
      <Balance />
      <ActionBar />
      <Header />
      {/* <Form /> */}
    </Layout>
  );
};

export default App;
