import './App.css';
import Home from './components/Home';
import Chat from './components/Chat';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <Router>
      <NavBar/>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route  path="/chat" element={<Chat/>} />


        </Routes>

      </Router>
    </div>
  );
}

export default App;
