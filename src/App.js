import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <Routes>
          <Route  path="/" element={<Home />} />



        </Routes>

      </Router>
      <Footer/>
   
    </div>
  );
}

export default App;
