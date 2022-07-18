import './App.css';
import Home from './components/Home';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Planner from './components/Planner';


function App() {
  return (
    <div>
            <nav>
                <Link to="/">
            <h1>CT Planner</h1>
                </Link>
                <Link to="./Planner.js">Planner</Link>
            </nav>
            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Planner.js" element={<Planner/>}/>
                </Routes>
            </main>
        </div>
  );
}

export default App;
