import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Demos from './components/others/Demos';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import Dietfoods from './components/others/Dietfoods';
import Workouts from './components/others/Workouts';
import Workoutplans from './components/others/Workoutplans';
import Gymlocator from './components/others/Gymlocator';
import VirtualTrainer from './components/others/VirtualTrainer';
import Goalsetting from './components/others/Goalsetting';
import Wpcardio from './components/Workoutplanss/Wpcardio';
import Wpchest from './components/Workoutplanss/Wpchest';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/login' element={<Loginpage/>}></Route>
        <Route path='/register' element={<Signuppage/>}></Route>
        <Route path='/gymlocator' element={<Gymlocator/>}></Route>
        <Route path='/workouts' element={<Workouts/>}></Route>
            <Route path='/workout-plans' element={<Workoutplans/>}></Route>
                <Route path='/wp/cardio' element={<Wpcardio/>}></Route>
                <Route path='/wp/chest' element={<Wpchest/>}></Route>
        <Route path='/demos' element={<Demos/>}></Route>
        <Route path='/nutrients' element={<Dietfoods/>}></Route>
        <Route path='/virtualtrainer' element={<VirtualTrainer/>}></Route>
        <Route path='/schedule' element={<Goalsetting/>}></Route>
      </Routes>
   </div>
  );
}

export default App;
