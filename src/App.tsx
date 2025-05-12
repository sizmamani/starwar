import { Dashboard, ResourceList, ResourceDetail } from 'routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'context/ThemeContext';
import { MainLayout } from 'layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/:resource" element={<ResourceList />} />
            <Route path="/:resource/:id" element={<ResourceDetail />} />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
