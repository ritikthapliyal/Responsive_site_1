import React from 'react'
import './Home.css'
import logo1 from '../../Assets/1.png'
import logo2 from '../../Assets/2.png'
import logo3 from '../../Assets/3.png'
import logo4 from '../../Assets/4.png'
import logo5 from '../../Assets/5.png'
import logo6 from '../../Assets/6.png'



import img1 from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'





function Home() {
    return (
        <div className='Home'>
            
            <div className='build'>
                <div className='build-heading'>
                    <h1>We Build Experience.</h1>
                    <p>A minimalist approach is the only way to design a website.</p>
                </div>
                <hr></hr>
                <div className='build-info'>
                    <div className='info'>
                        <h4>DESIGN</h4>
                        <p>With an emphasis on typography, white space and mobile-optimize design, your website will look absolute breathtaking.</p>
                        <button>Learn More</button>
                    </div>
                    <div className='info'>
                        <h4>CONTENT</h4>
                        <p>Our team will teach you the art of writing audience-focused cotent that will help you achieve the success you truly deserve.</p>
                        <button>Learn More</button>
                    </div>
                    <div className='info'>
                        <h4>STRATEGY</h4>
                        <p>We help creative enterpreneurs build their digital business by focusing on three key elementts of a successful online platform.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>

            <div className='design'>
                <div className='design-heading'>
                    <h1>We design brands.</h1>
                    <p>A simple look is all you need to crush your competition.</p>
                </div>
                <hr></hr>
                <div className='logos'>
                    <img src={logo6}></img>
                    <img src={logo3}></img>
                    <img src={logo4}></img>
                    <img src={logo5}></img>
                    <img src={logo2}></img>
                    <img src={logo1}></img>
                </div>
            </div>

            <div className='create'>
                <div className='create-heading'>
                    <h1>We create stories.</h1>
                    <p>A killer narrative will turn your readers into raving fans.</p>
                </div>
                <hr></hr>
                <div className='create-cinfo'>
                    <div className='cinfo'>
                        <img src={img1}></img>
                        <h4>OVERCOMING CREATIVE BLOCK</h4>
                        <p>Brian Gardner . May 1, 2017</p>
                    </div>
                    <div className='cinfo'>
                        <img src={img2}></img>
                        <h4>WHY COMMUNICATION IS KEY</h4>
                        <p>Brian Gardner . May 1, 2017</p>
                    </div>
                    <div className='cinfo'>
                        <img src={img3}></img>
                        <h4>THE PATH OF LEAST RESISTANCE</h4>
                        <p>Brian Gardner . May 1, 2017</p>
                    </div>
                    <div className='cinfo'>
                        <img src={img4}></img>
                        <h4>HOW TO REACH NEW HEIGHTS</h4>
                        <p>Brian Gardner . May 1, 2017</p>
                    </div>
                </div>
            </div>

            <div className='blue-box'>
                <p>Hit the ground running with a minimalist look.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Home