import './App.css';
import HeaderComponent from './components/Navigation/Header';
import MainComponent from './components/Navigation/TopNav';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeaderComponent title="Home" />
      <MainComponent />
    </div>
  );
}

export default App;
