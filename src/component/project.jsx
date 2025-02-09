import React from 'react';
import '../styles/project.css';

const ProjectPage = () => {
    return (
        <div className="projects-page">
            <h1>My Projects</h1>
            <div className="project-list">
                <div className="project-card">
                    <h2>Smart Expense Tracker</h2>
                    <p>Web application to track expenses.</p>
                </div>
                <div className="project-card">
                    <h2>Intelligent Resume Builder</h2>
                    <p>Python-based resume builder with AI integration.</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
