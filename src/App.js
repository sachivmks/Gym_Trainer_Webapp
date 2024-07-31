import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Demos from './components/others/Demos';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Dietfoods from './components/others/Dietfoods';
import Workouts from './components/others/Workouts';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/register' element={<Signuppage/>}></Route>
        <Route path='/demos' element={<Demos/>}></Route>
        <Route path='/workouts' element={<Workouts/>}></Route>
        <Route path='/nutrients' element={<Dietfoods/>}></Route>

      </Routes>
   </div>
  );
}

export default App;
