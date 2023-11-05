import './App.css';
import Nav from './Components/Nav';
import SignUp from './Components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        < Nav />
        <Routes>
          <Route path='/signup' element = {<SignUp />} />
          <Route path='/login' element = {<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
