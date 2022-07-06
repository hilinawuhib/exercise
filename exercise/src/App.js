import './App.css';
import MyMainpage from './components/Mainpage';
import LeftRail from './components/LeftRail'
import Thumbnail from "./components/Thumbnail"

function App() {
  return (
    <div className="App">
      <LeftRail />
      <MyMainpage />
      <Thumbnail />
    </div>
  );
}

export default App;
