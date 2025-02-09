import React from 'react';
import '../styles/home.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to My Portfolio</h1>
            <p>Explore my education, projects, and contact information.</p>
            <div className="buttons">
                <button><a href="/education">Education</a></button>
                <button><a href="/projects">Projects</a></button>
                <button><a href="/about">About</a></button>
                <button><a href="/contact">Contact Me</a></button>
            </div>
        </div>
    );
};

export default LandingPage;
