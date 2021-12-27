import './App.css';
import HeaderComponent from './components/Navigation/Header';
import NavbarComponent from './components/Navigation/Navbar';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderComponent title="Home" />
      <NavbarComponent />
    </div>
  );
}

export default App;
