import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/Authentication/login';
import RegisterComponent from './components/Authentication/register';
import DashboardNavComponent from './components/Dashboard';


function App() {
  document.title = "Home • Sidebrief"
  

  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<LoginComponent />} />
          <Route path="/register" index element={<RegisterComponent />} />
          <Route path="/" index element={<DashboardNavComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
