import logo from './logo.svg';
import './App.css';
import { useStatevalue } from './ccontext/stateProvider';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Navbar from './components/navbar';
import HomePage from './pages/homepage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import StepperBox from './components/stepper';
function App() {
  const [{user},dispatch]=useStatevalue();
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' Component={Signin} />
      <Route path='/signup' Component={Signup} />
      <Route path='/home' Component={HomePage} />
      <Route path='/create-inbox' Component={ StepperBox } />
    </Routes>
    </BrowserRouter>

    {/* //pages */}
    {/* <Signin></Signin> */}
    {/* <Signup></Signup> */}
    {/* <Navbar></Navbar> */}
    {/* <HomePage></HomePage> */}
    </>
  );
}

export default App;
