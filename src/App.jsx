import HomePage from '../src/components/home-page/home-page';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/login/login';
import RequestsPage from '../src/components/requests-page/requests-page';
import './App.css';

function App(){

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/requests" element={<RequestsPage/>} />

      </Routes>
    </Router>
  )
}

export default App