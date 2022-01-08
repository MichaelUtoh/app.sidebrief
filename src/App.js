import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChangePasswordComponent from './components/Authentication/changePassword';
import DashboardNavComponent from './components/Dashboard';
import ForgotPasswordComponent from './components/Authentication/forgotPassword';
import FormationWrap from './components/Actions/FormationWrap';
import IpNewComponent from './components/Actions/IpWrap';
import LoginComponent from './components/Authentication/login';
import MyProfileComponent from './components/Actions/ProfileWrap';
import PageNotFound from './404-page';
import RegisterComponent from './components/Authentication/register';
import SettingsComponent from './components/Actions/SettingsWrap';


function App() {
  document.title = "Home • Sidebrief"
  
  return (
    <div className="bg-white min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/change-password" index element={<ChangePasswordComponent />} />
          <Route path="/dashboard" index element={<DashboardNavComponent />} />
          <Route path="/dashboard/formation" index element={<FormationWrap />} />
          <Route path="/dashboard/ip" index element={<IpNewComponent />} />
          <Route path="/forgot-password" index element={<ForgotPasswordComponent />} />
          <Route path="/login" index element={<LoginComponent />} />
          <Route path="/register" index element={<RegisterComponent />} />
          <Route path="/settings" index element={<SettingsComponent />} />
          <Route path="/" index element={<MyProfileComponent />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
