import logo from './logo.svg';
import './App.css';
import HomeImage from './assets/home.png'

function App() {
  return (
    <div className="App">
      <div className="SidePanel">
        <div className="child-div-SidePanel">
          <img className="child-div-SidePanel-img" src={HomeImage}></img>
          <h3 className="child-div-SidePanel-h3">Home</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
