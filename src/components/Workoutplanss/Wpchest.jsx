// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../assets/css/Workoutplanscss/Wpchest.css'

// const Wpchest = () => {
//   return (
//     <div>
//         <div className="slider-container">
//             <nav className="slider-navbar">
//                 <ul className="navbar-list">
//                     <li><Link to='/workout-plans' id="Link" className='navbar-item'>Back</Link></li>
//                     <li className="navbar-item"><a href="#exaer">Aerobics</a></li>
//                     <li className="navbar-item"><a href="#exbox">Boxing</a></li>
//                     <li className="navbar-item"><a href="#excyc">Cycling</a></li>
//                     <li className="navbar-item"><a href="#exdan">Dancing</a></li>
//                     <li className="navbar-item"><a href="#exjog">Jogging</a></li>
//                     <li className="navbar-item"><a href="#expil">Pilates</a></li>
//                     <li className="navbar-item"><a href="#extred">Tredmill</a></li>
//                     <li className="navbar-item"><a href="#exswi">Swimming</a></li>
//                     <li className="navbar-item"><a href="#exwal">Walking</a></li>
//                     <li className="navbar-item"><a href="#exrun">Running</a></li>
//                     <li className="navbar-item"><a href="#exyog">Yoga</a></li>

//                 </ul>
//             </nav>
//         </div>
//         <div className="navspace"></div>
//         <div className="exercisecontainer" id='exaer'>
//             <div className="aerobicsimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Aerobics</div>
//                 <p className='exercisedesc'>Aerobic exercise is a physical activity that uses your body's large muscle groups,<br/>is rhythmic and repetitive. It increases your heart rate and how much <br/>oxygen your body uses. Examples of aerobic exercises include walking, cycling and swimming.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer"id='exbox'>
//             <div className="boxingimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Boxing</div>
//                 <p className='exercisedesc'>Boxing is one of the world's oldest combat sports. It is held in a ring and played by <br/>two boxers (people who fight in boxing fights). They wear padded gloves <br/>and try to hit one another. There are different ways to win in boxing.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer"id='excyc'>
//             <div className="cyclingimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Cycling</div>
//                 <p className='exercisedesc'>Cycling is mainly an aerobic activity, which means that your heart, blood vessels and lungs<br/> all get a workout. You will breathe deeper, perspire and experience increased<br/> body temperature, which will improve your overall fitness level.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator" id='exdan'></div>
//         <div className="exercisecontainer">
//             <div className="danceimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Dancing</div>
//                 <p className='exercisedesc'>Dancing combines the benefits of aerobic plus weight-bearing exercise. When you dance, you get <br/>many physical and mental health benefits, including: Better heart health. Stronger <br/>muscles. Better balance and coordination.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer" id='exjog'>
//             <div className="joggingimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Jogging</div>
//                 <p className='exercisedesc'>Jogging is a form of trotting or running at a slow or leisurely pace. The main intention is <br/>to increase physical fitness with less stress on the body than from faster running but<br/> more than walking, or to maintain a steady speed for longer periods of time.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer" id='expil'>
//             <div className="pilatesimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Pilates</div>
//                 <p className='exercisedesc'>Pilates is a mind-body exercise that requires core stability, strength, and flexibility <br/> and attention to muscle control, posture, and breathing</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer" id='extred'>
//             <div className="tredmillimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Tredmill</div>
//                 <p className='exercisedesc'>Treadmill working is an aerobic/ cardio exercise. Studies demonstrate that aerobic exercise <br/>can minimize the risk of heart diseases. Moreover, they can strengthen your heart muscles.<br/> This helps to lower blood pressure and allows the heart to pump blood more efficiently.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer" id='exswi'>
//             <div className="swimmingimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Swimming</div>
//                 <p className='exercisedesc'>Swimming is a great recreational activity for people of all ages. Recreational swimming can provide <br/>you with a low-impact workout and it's a good way to relax and feel good.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer" id='exwal'>
//             <div className="walkingimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Walking</div>
//                 <p className='exercisedesc'>Regular fitness walking will not only improve health indices and physical fitness, but also nurture<br/> self-discipline and strengthen will power. Moreover, fitness walking is a low impact<br/> aerobic exercise, which inflicts less impact force on the lower limbs than jogging.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer" id='exrun'>
//             <div className="runningimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Running</div>
//                 <p className='exercisedesc'>Running is a great exercise for the heart. Over time, it helps your heart pump more efficiently.<br/> Running keeps the arteries elastic so blood flows smoothly. Cardiovascular exercise also<br/> lowers your blood pressure.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="exercisecontainer" id='exyog'>
//             <div className="yogaimg"></div>
//             <div className="exercisetext">
//                 <div className="exercisetitle">Yoga</div>
//                 <p className='exercisedesc'>
//                 Yoga is a type of exercise in which you move your body into various positions in order to become <br/>more fit or flexible, to improve your breathing, and to relax your mind.</p>
//                 <button className='addexbut'>Add exercise</button>
//             </div>
//         </div>
//         <div className="exerciseseparator"></div>
//         <div className="contentbox footer">
//         <ul>
//           <li><h1>VEST ARMOUR</h1></li>
//           <li>© 2024 Vest Armour®, Inc. All rights reserved</li>
//           <li>Privacy Policy  |</li>
//           <li>Terms of use  |</li>
//           <li>Cookie Policy  |</li>
//           <li>Manage Your Content |</li>
//           <li>AdChoices|</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Wpchest




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Workoutplanscss/Wpcardio.css';

const Wpcardio = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentExercise, setCurrentExercise] = useState('');

  const showPopup = (exercise) => {
    setCurrentExercise(exercise);
    setPopupVisible(true);
  };

  const hidePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div>
      <div className="slider-container">
        <nav className="slider-navbar">
          <ul className="navbar-list">
            <li><Link to='/workout-plans' id="Link" className='navbar-item'>Back</Link></li>
            <li className="navbar-item"><a href="#exbp">Bench press</a></li>
            <li className="navbar-item"><a href="#exbpmac">BP machine</a></li>
            <li className="navbar-item"><a href="#exbpband">BP with bands</a></li>
            <li className="navbar-item"><a href="#excdip">Chest dips</a></li>
            <li className="navbar-item"><a href="#exnckp">Neck press</a></li>
            <li className="navbar-item"><a href="#exclspup">Close pushup</a></li>
            <li className="navbar-item"><a href="#expup">Pushup</a></li>
            <li className="navbar-item"><a href="#exrgpup">Ring pushup</a></li>
            <li className="navbar-item"><a href="#exdcbp">Decline BP</a></li>
            <li className="navbar-item"><a href="#exdccp">Decline CP</a></li>
            <li className="navbar-item"><a href="#exicbp">Incline BP</a></li>
            <li className="navbar-item"><a href="#exiccp">Incline CP</a></li>
            <li className="navbar-item"><a href="#exdbfl">DB flys</a></li>
            <li className="navbar-item"><a href="#exicfl">Incline flys</a></li>
          </ul>
        </nav>
      </div>
      <div className="navspace"></div>

      <div className="exercisecontainer" id='exbp'>
        <div className="aerobicsimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Bench Press</div>
          <p className='exercisedesc'>
          The mighty bench press is a great exercise for building a powerful chest.<br/>
          The bench press is one of the power exercises, known to be very effective <br/>for building body mass.
          </p>
          <button className='addexbut' onClick={() => showPopup('Bench press')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exbpmac'>
        <div className="boxingimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Bench press machine</div>
          <p className='exercisedesc'>
          This is a primary exercise for the Pectorals (chest muscles). Many people prefer <br/>
          this exercise to the standard Bench Press because if offers more stability for <br/>people new to exercise.
          </p>
          <button className='addexbut' onClick={() => showPopup('Bench press machine')}>Add exercise</button>
        </div>
      </div>
      
      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exbpband'>
        <div className="cyclingimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Bench press with bands</div>
          <p className='exercisedesc'>
          A bench press variation that uses bands as resistance. The resistance comes from a <br/>
          slightly different angle so will target a different area of your pectorals.
          </p>
          <button className='addexbut' onClick={() => showPopup('Bench press with bands')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='excdip'>
        <div className="danceimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Chest dips</div>
          <p className='exercisedesc'>
          The chest dip is a variation of the tricep dip that focuses more on your chest. Even though <br/>
          it uses a dip machine, it is a body weight only exercise.
          </p>
          <button className='addexbut' onClick={() => showPopup('Chest dips')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exnckp'>
        <div className="joggingimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Neck press</div>
          <p className='exercisedesc'>
          This is an advanced exercise for the chest. It is similar to a Bench Press except you keep <br/>
          the barbell moving over your neck not your chest.
          </p>
          <button className='addexbut' onClick={() => showPopup('Neck press')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exclspup'>
        <div className="pilatesimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Close pushup</div>
          <p className='exercisedesc'>
          These are variations on Push Ups, one of the best exercise for muscles of the chest (pectorals), <br/>
          arms (bicep and triceps) and core development. The core muscles are the rectus abdomen and <br/>
          obliques which support the spine.
          </p>
          <button className='addexbut' onClick={() => showPopup('Close pushup')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='expup'>
        <div className="treadmillimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Pushup</div>
          <p className='exercisedesc'>
          The push-up helps to build muscle and improve strength throughout the upper body. It targets the muscles<br/>
           in your chest (pectoralis major), arms (particularly the triceps) and shoulders (especially the<br/>
            scapular stabilising muscles).
          </p>
          <button className='addexbut' onClick={() => showPopup('Pushup')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exrgpup'>
        <div className="swimmingimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Ring pushup</div>
          <p className='exercisedesc'>
          Ring push-ups are a great way to develop the chest and shoulder muscles and by altering <br/>
          the height of the rings you can control the exercise difficulty.
          </p>
          <button className='addexbut' onClick={() => showPopup('Ring pushpup')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exdcbp'>
        <div className="walkingimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Decline bench press</div>
          <p className='exercisedesc'>
          The decline bench press is a variation of the bench press performed on a incline bench. <br/>
          It targets the lower part of your chest.
          </p>
          <button className='addexbut' onClick={() => showPopup('Decline bench press')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exdccp'>
        <div className="runningimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Decline chest press</div>
          <p className='exercisedesc'>
          This is an exercise for the lower portion of the Pectorals (chest muscles). Many people prefer <br/>
          this exercise to the Barbell or Dumbbell decline Press because if offers more stability for people new to exercise.
          </p>
          <button className='addexbut' onClick={() => showPopup('Decline chest press')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exiccp'>
        <div className="yogaimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Incline chest press</div>
          <p className='exercisedesc'>
          This is an exercise for the upper portion of the Pectorals (chest muscles). Many people prefer<br/>
           this exercise to the Barbell or Dumbbell Incline Press because if offers more stability <br/>
           for people new to exercise.
          </p>
          <button className='addexbut' onClick={() => showPopup('Incline chest press')}>Add exercise</button>
        </div>
      </div>

      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exicbp'>
        <div className="yogaimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Incline bench press</div>
          <p className='exercisedesc'>
          This is a variation of the bench press that targets your upper chest by using an incline bench. <br/>
          It'll help give your fuller, more balanced size.
          </p>
          <button className='addexbut' onClick={() => showPopup('Incline bench press')}>Add exercise</button>
        </div>
      </div>


      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exdbfl'>
        <div className="yogaimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Dumbbell flys</div>
          <p className='exercisedesc'>
          The dumbbell fly targets your pectorals with far more focus than the standard dumbbell bench press.<br/>
          You're keeping your arms relatively straight throughout the exercise so you wont use your triceps as much. <br/>
          It also focuses more on the inner part of your pecs.
          </p>
          <button className='addexbut' onClick={() => showPopup('Dumbbell flys')}>Add exercise</button>
        </div>
      </div>


      <div className="exerciseseparator"></div>
      <div className="exercisecontainer" id='exicfl'>
        <div className="yogaimg"></div>
        <div className="exercisetext">
          <div className="exercisetitle">Incline flys</div>
          <p className='exercisedesc'>
          The incline dumbbell fly is an isolation exercise that targets the upper chest muscles, <br/>
          activating the hard-to-develop upper pecs in a way that can't be achieved using a flat bench.
          </p>
          <button className='addexbut' onClick={() => showPopup('Incline flys')}>Add exercise</button>
        </div>
      </div>

      <div className={`popup-overlayy ${popupVisible ? 'popup-overlay-visiblee' : ''}`} onClick={hidePopup}></div>
      <div className={`popuppp ${popupVisible ? 'popup-visiblee' : ''}`}>
        <div className="popup-headerrr">{currentExercise}</div>
        <div className="popup-contenttt">
          <input className="popup-inputtt" type="number" placeholder="Enter number of reps" />
        </div>
        <button className="popup-closee" onClick={hidePopup}>Close</button>
      </div>


      <div className="contentbox footer">
        <ul>
          <li><h1>VEST ARMOUR</h1></li>
          <li>© 2024 Vest Armour®, Inc. All rights reserved</li>
          <li>Privacy Policy  |</li>
          <li>Terms of use  |</li>
          <li>Cookie Policy  |</li>
          <li>Manage Your Content |</li>
          <li>AdChoices|</li>
          <li>Contact</li>
        </ul>
      </div>

      
    </div>
  );
};

export default Wpcardio;
