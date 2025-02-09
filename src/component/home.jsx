import React from 'react';
import PP from "../assets/pp.png";
import '../styles/home.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className='landing-info'>
                <h1>Welcome to My Portfolio</h1>
                <p>"Hi, I'm Firafis Berhanu, a passionate Software Engineer.
                    I specialize in building user-friendly, efficient applications.
                    Explore my projects, learn about my skills, and let's create something amazing together!
                    I'm excited to connect and collaborate</p>
            </div>

            <div className='landing-img'><img src={PP} alt="Personal photo" /></div>
        </div>
    );
};

export default LandingPage;
