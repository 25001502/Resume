import React from 'react';
import './App.css';

const Resume = () => {
    return (
        <div className="container">
            <header>
                <div className="bolt">⚡</div>
                <h1>Thandululo Nengovhela</h1>
                <p>
                    <strong>
                        {/* Globe Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{ verticalAlign: 'middle', marginRight: '6px' }} viewBox="0 0 24 24" fill="#64b5f6">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.93 6h-3.95c-.2-1.82-.7-3.36-1.34-4.36C16.3 4.05 18.13 5.79 18.93 8zM12 4.07c.66.97 1.22 2.41 1.44 3.93h-2.87c.22-1.52.78-2.96 1.43-3.93zM4.26 16c-.17-.63-.26-1.3-.26-2 0-.7.09-1.37.26-2h3.48c-.07.66-.11 1.32-.11 2s.04 1.34.11 2H4.26zm.81 2h3.95c.2 1.82.7 3.36 1.34 4.36C7.7 19.95 5.87 18.21 5.07 16zm3.95-12H5.07c.8-2.21 2.63-3.95 4.43-4.36C8.7 4.64 8.2 6.18 7.98 8zm7.81 12c-.8 2.21-2.63 3.95-4.43 4.36.64-1 1.14-2.54 1.34-4.36h3.09zm-3.09-2c-.22 1.52-.78 2.96-1.43 3.93-.65-.97-1.22-2.41-1.44-3.93h2.87zm-2.87-2c.22-1.52.78-2.96 1.43-3.93.65.97 1.22 2.41 1.44 3.93h-2.87zm6.95 0c-.07-.66-.11-1.32-.11-2s.04-1.34.11-2h3.48c.17.63.26 1.3.26 2 0 .7-.09 1.37-.26 2h-3.48zm.98-4h-3.09c-.2-1.82-.7-3.36-1.34-4.36 1.8.41 3.63 2.15 4.43 4.36z"/>
                        </svg>
                        Front-End Web Developer
                    </strong>
                </p>
                <div className="contact">
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#1976d2" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 7 8-7V20H4z"/>
                    </svg>
                    <a href="mailto:thandululo99@gmail.com">Email</a> |
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ verticalAlign: 'middle', margin: '0 4px 0 8px' }} fill="#333" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z"/>
                    </svg>
                    <a href="https://github.com/25001502" target="_blank" rel="noopener noreferrer">GitHub</a> |
                    {/* LinkedIn Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" style={{ verticalAlign: 'middle', margin: '0 4px 0 8px' }} fill="#0a66c2" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/>
                    </svg>
                    <a href="https://www.linkedin.com/in/nengovhela-thandululo-880080367/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </header>

            <section>
                <h2>
                    {/* Info Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{ verticalAlign: 'middle', marginRight: '6px' }} fill="#1976d2" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z"/>
                    </svg>
                    About Me
                </h2>
                <p>I’m a passionate front-end developer and student at the University of Venda. I enjoy building responsive and user-friendly websites with clean code and strong design principles.</p>
            </section>

            <section>
                <h2>
                    {/* Skills Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{ verticalAlign: 'middle', marginRight: '6px' }} fill="#43a047" viewBox="0 0 24 24">
                        <path d="M12 7.77L18.39 21H5.61L12 7.77M12 2L1 21h22L12 2z"/>
                    </svg>
                    Skills
                </h2>
                <ul>
                    <li>
                        {/* HTML5 Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#e44d26" viewBox="0 0 24 24">
                            <path d="M1.5 0l1.7 19.1 8.8 2.4 8.8-2.4 1.7-19.1zm17.1 5.7h-13.2l.2 2.2h12.8zm-.5 5.5l-.3 3.2-5.8 1.6-5.8-1.6-.3-3.2zm-6.3 7.2l-4.2-1.1-.3-3.2h4.5zm1.2 0v-4.3h4.5l-.3 3.2zm5.7-8.2h-13.2l-.2-2.2h13.6z"/>
                        </svg>
                        HTML5
                    </li>
                    <li>
                        {/* CSS3 Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#2965f1" viewBox="0 0 24 24">
                            <path d="M1.5 0l1.7 19.1 8.8 2.4 8.8-2.4 1.7-19.1zm15.6 5.7h-10.2l.2 2.2h9.8zm-.5 5.5l-.3 3.2-5.8 1.6-5.8-1.6-.3-3.2zm-6.3 7.2l-4.2-1.1-.3-3.2h4.5zm1.2 0v-4.3h4.5l-.3 3.2zm5.7-8.2h-10.2l-.2-2.2h10.6z"/>
                        </svg>
                        CSS3 (Flexbox, Grid)
                    </li>
                    <li>
                        {/* JavaScript Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#f7df1e" viewBox="0 0 24 24">
                            <path d="M2 2v20h20V2H2zm11.7 17.3c0 1.2-.7 2.1-2.1 2.1-1.1 0-1.7-.6-2-1.3l1.1-.7c.2.4.4.7.9.7.5 0 .8-.2.8-.9v-4.7h1.3v4.8zm4.2 2.1c-1.3 0-2.1-.6-2.5-1.4l1.1-.7c.3.5.7.9 1.4.9.6 0 1-.3 1-.7 0-.5-.4-.7-1.1-1l-.4-.2c-1.2-.5-2-1.1-2-2.4 0-1.2.9-2.1 2.3-2.1.9 0 1.6.3 2.1 1.2l-1.1.7c-.2-.4-.5-.6-.9-.6-.4 0-.7.2-.7.6 0 .4.2.6.9.9l.4.2c1.4.6 2.1 1.2 2.1 2.5 0 1.4-1.1 2.2-2.6 2.2z"/>
                        </svg>
                        JavaScript (ES6+)
                    </li>
                    <li>
                        {/* React Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#61dafb" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="2"/>
                            <g>
                                <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61dafb" strokeWidth="1.5"/>
                                <ellipse cx="12" cy="12" rx="4.2" ry="11" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)"/>
                                <ellipse cx="12" cy="12" rx="4.2" ry="11" fill="none" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)"/>
                            </g>
                        </svg>
                        React.js
                    </li>
                    <li>
                        {/* Firebase Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#ffca28" viewBox="0 0 24 24">
                            <path d="M3.89 15.672l2.7-13.672 3.41 7.09-6.11 6.582zm7.11-6.582l-3.41-7.09 13.41 19.09-10-12zm-7.11 6.582l6.11-6.582 10 12-16.11-5.418z"/>
                        </svg>
                        Firebase
                    </li>
                </ul>
            </section>

            <section>
                <h2>
                    {/* Projects Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{ verticalAlign: 'middle', marginRight: '6px' }} fill="#ff7043" viewBox="0 0 24 24">
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V5h2v2h10V5h2v16z"/>
                    </svg>
                    Projects
                </h2>
                <ul>
                    <li>
                        {/* Lock Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#1976d2" viewBox="0 0 24 24">
                            <path d="M12 17a2 2 0 0 0 2-2v-2a2 2 0 0 0-4 0v2a2 2 0 0 0 2 2zm6-8V7a6 6 0 0 0-12 0v2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-8-2a4 4 0 0 1 8 0v2H8V7zm8 13H8v-9h8v9z"/>
                        </svg>
                        <strong>Login Page</strong> – A secure login form using Firebase and React.<br/>
                        <a href="https://github.com/25001502/login-firebase" target="_blank" rel="noopener noreferrer">
                            {/* GitHub Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" style={{ verticalAlign: 'middle', marginRight: '3px' }} fill="#333" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z"/>
                            </svg>
                            View on GitHub
                        </a>
                    </li>
                    <li>
                        {/* Cloud Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#1976d2" viewBox="0 0 24 24">
                            <path d="M19.36 10.46A7 7 0 0 0 5 9a5 5 0 0 0 0 10h13a5 5 0 0 0 1.36-8.54z"/>
                        </svg>
                        <strong>Weather App</strong> – Weather info using OpenWeather API and vanilla JS.<br/>
                        <a href="https://github.com/25001502/weather-app" target="_blank" rel="noopener noreferrer">
                            {/* GitHub Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" style={{ verticalAlign: 'middle', marginRight: '3px' }} fill="#333" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z"/>
                            </svg>
                            View on GitHub
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <h2>
                    {/* Education Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{ verticalAlign: 'middle', marginRight: '6px' }} fill="#fbc02d" viewBox="0 0 24 24">
                        <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 13.09L3.74 10.5 12 6.09l8.26 4.41L12 16.09z"/>
                    </svg>
                    Education
                </h2>
                <p>University of Venda — First Year Student (2025)</p>
            </section>

            <section>
                <h2>
                    {/* Contact Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" style={{ verticalAlign: 'middle', marginRight: '6px' }} fill="#1976d2" viewBox="0 0 24 24">
                        <path d="M21 8V7l-3 2.29V8c0-3.31-2.69-6-6-6S3 4.69 3 8v1.29L0 7v1l12 9 12-9z"/>
                    </svg>
                    Contact
                </h2>
                <p>
                    {/* Email Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#1976d2" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l8 7 8-7V20H4z"/>
                    </svg>
                    Email: thandululo99@gmail.com
                </p>
                <p>
                    {/* GitHub Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" style={{ verticalAlign: 'middle', marginRight: '4px' }} fill="#333" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48C19.13 20.58 22 16.76 22 12.26 22 6.58 17.52 2 12 2z"/>
                    </svg>
                    GitHub: <a href="https://github.com/25001502" target="_blank" rel="noopener noreferrer">25001502</a>
                </p>
            </section>
        </div>
    );
};

export default Resume;