import { Routes, Route } from 'react-router-dom';
import { Stack } from '@mui/material';
import ShaadiCardGenerator from './pages/shaadi-card-generator';
import Template1 from './pages/template-1/template-1';

function App() {
  return (
      <Stack minHeight="100vh" sx={{ background: '#f8f4ff' }}>
        <Routes>
          <Route path="/" element={<ShaadiCardGenerator />} />
          <Route path="/download" element={<Template1 />} />
        </Routes>
      </Stack>
  );
}

export default App;
