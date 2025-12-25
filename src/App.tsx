import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import MyJournal from './pages/MyJournal';
import DayGuide from './pages/DayGuide';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="map" element={<MapPage />} />
        <Route path="journal" element={<MyJournal />} />
        <Route path="day/:dayId" element={<DayGuide />} />
      </Route>
    </Routes>
  );
}

export default App;
