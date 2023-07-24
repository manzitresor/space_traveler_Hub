import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Rockets from './pages/Rockets';
import Profile from './pages/Profile';
import Missions from './pages/Missions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="profile" element={<Profile />} />
          <Route path="missions" element={<Missions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
