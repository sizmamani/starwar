import { Dashboard, ResourceList, ResourceDetail } from 'routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:resource" element={<ResourceList />} />
        <Route path="/:resource/:id" element={<ResourceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
