import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './404-page';
import ForgotPasswordComponent from './components/Authentication/forgotPassword';
import LoginComponent from './components/Authentication/login';
import RegisterComponent from './components/Authentication/register';
import DashboardNavComponent from './components/Dashboard';
import FormationNewComponent from './components/Actions/FormationWrap';


function App() {
  document.title = "Home • Sidebrief"
  
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/login" index element={<LoginComponent />} />
          <Route path="/register" index element={<RegisterComponent />} />
          <Route path="/forgot-password" index element={<ForgotPasswordComponent />} />
          <Route path="/dashboard" index element={<DashboardNavComponent />} />
          <Route path="/dashboard/formation" index element={<FormationNewComponent />} />
          <Route path="/dashboard/ip" index element={<FormationNewComponent />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
