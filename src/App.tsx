import { Dashboard, ResourceList, ResourceDetail } from 'routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'context/ThemeContext';
import { MainLayout } from 'layouts/MainLayout';
import { ResourceNameProvider } from 'context/ResourceNameContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ResourceNameProvider>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/:resource" element={<ResourceList />} />
              <Route path="/:resource/:id" element={<ResourceDetail />} />
            </Routes>
          </MainLayout>
        </ResourceNameProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
