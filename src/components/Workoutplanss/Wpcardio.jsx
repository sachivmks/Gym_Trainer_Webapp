import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Workoutplanscss/Wpcardio.css'

const Wpcardio = () => {
  return (
    <div>
        <div className="slider-container">
            <nav className="slider-navbar">
                <ul className="navbar-list">
                    <li><Link to='/workout-plans' id="Link" className='navbar-item'>Back</Link></li>
                    <li className="navbar-item"><a href="#exaer">Aerobics</a></li>
                    <li className="navbar-item"><a href="#exbox">Boxing</a></li>
                    <li className="navbar-item"><a href="#excyc">Cycling</a></li>
                    <li className="navbar-item"><a href="#exdan">Dancing</a></li>
                    <li className="navbar-item"><a href="#exjog">Jogging</a></li>
                    <li className="navbar-item"><a href="#expil">Pilates</a></li>
                    <li className="navbar-item"><a href="#extred">Tredmill</a></li>
                    <li className="navbar-item"><a href="#exswi">Swimming</a></li>
                    <li className="navbar-item"><a href="#exwal">Walking</a></li>
                    <li className="navbar-item"><a href="#exrun">Running</a></li>
                    <li className="navbar-item"><a href="#exyog">Yoga</a></li>
                </ul>
            </nav>
        </div>
        <div className="navspace"></div>
        <div className="exercisecontainer" id='exaer'>
            <div className="aerobicsimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Aerobics</div>
                <p className='exercisedesc'>Aerobic exercise is a physical activity that uses your body's large muscle groups,<br/>is rhythmic and repetitive. It increases your heart rate and how much <br/>oxygen your body uses. Examples of aerobic exercises include walking, cycling and swimming.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer"id='exbox'>
            <div className="boxingimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Boxing</div>
                <p className='exercisedesc'>Boxing is one of the world's oldest combat sports. It is held in a ring and played by <br/>two boxers (people who fight in boxing fights). They wear padded gloves <br/>and try to hit one another. There are different ways to win in boxing.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer"id='excyc'>
            <div className="cyclingimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Cycling</div>
                <p className='exercisedesc'>Cycling is mainly an aerobic activity, which means that your heart, blood vessels and lungs<br/> all get a workout. You will breathe deeper, perspire and experience increased<br/> body temperature, which will improve your overall fitness level.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator" id='exdan'></div>
        <div className="exercisecontainer">
            <div className="danceimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Dancing</div>
                <p className='exercisedesc'>Dancing combines the benefits of aerobic plus weight-bearing exercise. When you dance, you get <br/>many physical and mental health benefits, including: Better heart health. Stronger <br/>muscles. Better balance and coordination.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer" id='exjog'>
            <div className="joggingimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Jogging</div>
                <p className='exercisedesc'>Jogging is a form of trotting or running at a slow or leisurely pace. The main intention is <br/>to increase physical fitness with less stress on the body than from faster running but<br/> more than walking, or to maintain a steady speed for longer periods of time.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer" id='expil'>
            <div className="pilatesimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Pilates</div>
                <p className='exercisedesc'>Pilates is a mind-body exercise that requires core stability, strength, and flexibility <br/> and attention to muscle control, posture, and breathing</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer" id='extred'>
            <div className="tredmillimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Tredmill</div>
                <p className='exercisedesc'>Treadmill working is an aerobic/ cardio exercise. Studies demonstrate that aerobic exercise <br/>can minimize the risk of heart diseases. Moreover, they can strengthen your heart muscles.<br/> This helps to lower blood pressure and allows the heart to pump blood more efficiently.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer" id='exswi'>
            <div className="swimmingimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Swimming</div>
                <p className='exercisedesc'>Swimming is a great recreational activity for people of all ages. Recreational swimming can provide <br/>you with a low-impact workout and it's a good way to relax and feel good.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer" id='exwal'>
            <div className="walkingimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Walking</div>
                <p className='exercisedesc'>Regular fitness walking will not only improve health indices and physical fitness, but also nurture<br/> self-discipline and strengthen will power. Moreover, fitness walking is a low impact<br/> aerobic exercise, which inflicts less impact force on the lower limbs than jogging.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer" id='exrun'>
            <div className="runningimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Running</div>
                <p className='exercisedesc'>Running is a great exercise for the heart. Over time, it helps your heart pump more efficiently.<br/> Running keeps the arteries elastic so blood flows smoothly. Cardiovascular exercise also<br/> lowers your blood pressure.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
        <div className="exercisecontainer" id='exyog'>
            <div className="yogaimg"></div>
            <div className="exercisetext">
                <div className="exercisetitle">Yoga</div>
                <p className='exercisedesc'>
                Yoga is a type of exercise in which you move your body into various positions in order to become <br/>more fit or flexible, to improve your breathing, and to relax your mind.</p>
                <button className='addexbut'>Add exercise</button>
            </div>
        </div>
        <div className="exerciseseparator"></div>
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

export default Wpcardio



