import './App.css';
import Home from './components/Home';
import Chat from './components/Chat';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import About from './components/About';
import Registration from './components/Registration';


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/chat" element={<Chat/>} />
          <Route  path="/about" element={<About/>} />
          <Route path="register" element={<Registration/>}/>

        </Routes>

      </Router>
    </div>
  );
}

export default App;
