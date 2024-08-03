import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/others/Workoutplans.css'

const Workoutplans = () => {
  return (
    <div>
      <div className="maincls">
        <div className="gobackwork">
          <Link to='/workouts' id="Link" className='navbarbutcal'>Back</Link>
        </div>
        <div className="bdy">
            <div className="cardarea">
                <div className="wrapperr">
                    <div className="boxxarea">
                        <div className="boxxx">
                            <img src="https://picsum.photos/id/237/371/400" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Cardio</h3>
                                <a href="wp/cardio" className='overlayyaa'>View</a>
                            </div>
                        </div>
                        <div className="boxxx">
                            <img src="https://picsum.photos/380/400?grayscale" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Chest</h3>
                                <a href="wp/chest" className='overlayyaa'>View</a>
                            </div>
                        </div>
                        <div className="boxxx">
                            <img src="https://picsum.photos/375/400" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Biceps</h3>
                                <a href="wp/biceps" className='overlayyaa'>View</a>
                            </div>
                        </div>
                        <div className="boxxx">
                            <img src="https://picsum.photos/seed/picsum/372/400" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Triceps</h3>
                                <a href="wp/triceps" className='overlayyaa'>View</a>
                            </div>
                        </div>
                        <div className="boxxx">
                            <img src="https://picsum.photos/378/400" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Legs</h3>
                                <a href="wp/legs" className='overlayyaa'>View</a>
                            </div>
                        </div>
                        <div className="boxxx">
                            <img src="https://picsum.photos/seed/picsum/372/400" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Shoulder</h3>
                                <a href="wp/shoulder" className='overlayyaa'>View</a>
                            </div>
                        </div>
                        <div className="boxxx">
                            <img src="https://picsum.photos/seed/picsum/372/400" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Abdominal</h3>
                                <a href="wp/abdominal" className='overlayyaa'>View</a>
                            </div>
                        </div>
                        <div className="boxxx">
                            <img src="https://picsum.photos/seed/picsum/372/400" alt="" className='boxxximg'/>
                            <div className="overlayyy">
                                <h3 className='overlayyhh'>Back</h3>
                                <a href="wp/back" className='overlayyaa'>View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
  )
}

export default Workoutplans

