import React from 'react';
import Login from './components/Login';
import './App.css';
import './styles/Login.css';
import './styles/ApplicantData.css';
import './styles/ApplicantCartData.css';
import ApplicantData from './components/ApplicantData';
import ApplicantCartData from './components/ApplicantCartData';
// import ApplicantForm from './components/ApplicantForm';
import { Routes, Route, useLocation} from 'react-router-dom';

function App() {

  const PathDisplay = () => {
    const location = useLocation();
    const path = location.pathname === '/' ? 'home' : location.pathname.slice(1);
  
    return <h1>You API end path is: {path}</h1>;
  };

  const Home = () => <div>Welcome to Home!</div>;
  const About = () => <div>Welcome to About!</div>;

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />}/>
        {/* <Route path='/form' element={<ApplicantForm />}/> */}
        <Route path='/applicants' element={<ApplicantData />}/>
        <Route path='/cart' element={<ApplicantCartData />}/>
        <Route path='*' element={<Login />}/>
        <Route path="/about" element={About} />
        <Route path="/home" element={Home} />
        {/* <Route>
        <PathDisplay />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;
