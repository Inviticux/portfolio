import React, { useState , useRef } from 'react';
import { useNavigate } from 'react-router';
import '../styles/main.css';
import emailjs from "emailjs-com";

// Importing images
import profilepicture from '../assets/profilepic.jpg'
import llamalyze from '../assets/llamalyze.jpg';
import loadbalancerimg from '../assets/loadbalancerdiag.png';
import hotelbookingimg from '../assets/compassp.png';
import streamingexp from '../assets/streamingexp.png';
import pcbuild from '../assets/pcfansfull.png';
import campingshot from '../assets/camping.png';
import anakin from '../assets/anakin.jpg';
import obiwan from '../assets/obiwan.jpg';
import clayshoot from '../assets/clayshoot.jpg';
import sup from '../assets/paddleboard.png';

//import devicons
//databases
import mongodbimg from '../assets/devicons/mongodb.svg';
import mysqlimg from '../assets/devicons/mysql.svg';
import neo4jimg from '../assets/devicons/neo4j.svg';

//programming languages
import pythonimg from '../assets/devicons/python.svg';
import javaimg from '../assets/devicons/java.svg';
import javascriptimg from '../assets/devicons/javascript.svg';
import rstudioimg from '../assets/devicons/rstudio.svg';

//frameworks and libraries
import reactimg from '../assets/devicons/react.svg';
import nodeimg from '../assets/devicons/nodejs.svg';

//infrastructure and devops
import dockerimg from '../assets/devicons/docker.svg';
import ubuntuimg from '../assets/devicons/ubuntu.svg';
import nginximg from '../assets/devicons/nginx.svg';
import azureimg from '../assets/devicons/azure.svg';


//collaboration and productivity tools
import githubimg from '../assets/devicons/github.svg';
import jiraimg from '../assets/devicons/jira.svg';
import postmanimg from '../assets/devicons/postman.svg';
import trelloimg from '../assets/devicons/trello.svg';
import vscodeimg from '../assets/devicons/vscode.svg';

//to sort
import linkedinimg from '../assets/devicons/linkedin.svg';


//maincomponents
const MainPage = () => {
        const navigate = useNavigate();
        const contactform = useRef(null);
        const previousproj = useRef(null);

        // Skilltech items with classification
        const skilltechItems = [
            { name: 'React', img: reactimg, type: 'Frameworks and Libraries' },
            { name: 'Node.js', img: nodeimg, type: 'Frameworks and Libraries' },
            { name: 'Python', img: pythonimg, type: 'Programming Languages' },
            { name: 'Java', img: javaimg, type: 'Programming Languages' },
            { name: 'MongoDB', img: mongodbimg, type: 'Databases' },
            { name: 'MySQL', img: mysqlimg, type: 'Databases' },
            { name: 'Docker', img: dockerimg, type: 'Infrastructure and DevOps' },
            { name: 'Azure', img: azureimg, type: 'Infrastructure and DevOps' },
            { name: 'Github', img: githubimg, type: 'Collaboration and Productivity Tools' },
            { name: 'Jira', img: jiraimg, type: 'Collaboration and Productivity Tools' },
            { name: 'Nginx', img: nginximg, type: 'Infrastructure and DevOps' },
            { name: 'Postman', img: postmanimg, type: 'Collaboration and Productivity Tools' },
            { name: 'RStudio', img: rstudioimg, type: 'Programming Languages' },
            { name: 'Trello', img: trelloimg, type: 'Collaboration and Productivity Tools' },
            { name: 'VSCode', img: vscodeimg, type: 'Collaboration and Productivity Tools' },
            { name: 'Neo4j', img: neo4jimg, type: 'Databases' },
            { name: 'Javascript', img: javascriptimg, type: 'Programming Languages' },
            { name: 'Ubuntu', img: ubuntuimg, type: 'Infrastructure and DevOps' },
        ];

        const types = ['unselected', 'Databases', 'Programming Languages', 'Frameworks and Libraries', 'Infrastructure and DevOps', "Collaboration and Productivity Tools"];
        const [selectedType, setSelectedType] = useState('unselected');

        const form = useRef();

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                },
                (error) => {
                console.log(error.text);
                alert("Something went wrong. Please try again.");
                }
            );
        };

    return (
        <div className="main-root">

            <div className="header-root ">
                <h1 className="header-title">Felix Pendered.</h1>
                <div className="header-button-container">
                    <button className="headerbutton" onClick={() => navigate('/devices')}>My Gear</button>
                    <button className="headerbutton" onClick={() => previousproj.current?.scrollIntoView({ behavior: "smooth"})}>Previous Projects</button>
                    <button className="headerbutton" onClick={() => contactform.current?.scrollIntoView({ behavior: "smooth"})}>Get in Contact</button>
                </div>
            </div>

            <div className='intro-container'>
                <div className='intro-text-container'>
                    <h2 className='name-title'>Hi, i'm Felix!</h2>
                    <h3 className='name-title-role'>An aspiring Developer and Network Engineer</h3>
                    <p className='name-title-desc'>Hi, I’m Felix, I recently graduated from Plymouth University and I’ve got a real interest in full stack development as well as network engineering, I enjoy getting stuck into both sides of things because it gives me a good balance between building something that works and also knowing how it runs behind the scenes. I’d say I’m reliable and dependable, if I commit to something I’ll see it through, and I’m also keen to keep learning and improving the skills I’ve already got because I know there’s always more to pick up. Tech moves quick and I like the challenge of keeping up with it and just pushing myself to grow as I go.</p>
                </div>
                <div className='intro-image-container'>
                    <img className='intro-image' src={profilepicture}></img>
                </div>
            </div>

            <div className='root-divider'></div>

            <div className='expedu-container'>
                <h3 className='section-title'>My Education and Experience</h3>
                <div className='expedu-item-container'>

                    <div className='expedu-item' onClick={() => window.location.replace('https://www.henleycol.ac.uk/courses/view-all-courses/item/68/ict-computing-extended-diploma#')}>
                        <h4 className='expedu-item-title'>The Henley College - Extended Diploma in IT and Computing</h4>
                        <p className='expedu-item-desc'>My sixth form years were spent at The Henley College, the majority of this course was centred around delivering it soultions in various forms: Games, Hardware Surveys and Simple Applications</p>
                        <ul className="expedu-item-skills-list">
                            <li>It Service Delivery</li>
                            <li>Games Development</li>
                            <li>3D Graphics</li>
                        </ul>
                        <p className='expedu-item-grade'> Grade Achieved: DDD - Triple Distinction</p>
                    </div>

                    <div className='expedu-item' onClick={() => window.location.replace('https://www.plymouth.ac.uk/courses/undergraduate/bsc-computer-science')}>
                        <h4 className='expedu-item-title'>University of Plymouth - BSc Computer Science</h4>
                        <p className='expedu-item-desc'>My university years were spent studying at the university of plymouth. My areas of study were in development of applications from mobile apps to backend applications. Another key part of my studies was networking in which I learned how to setup and use various server architectures and how to increase their perfomance and efficiency</p>
                        <ul className="expedu-item-skills-list">
                            <li>Network Administration</li>
                            <li>Full Stack Development</li>
                            <li>Big Data Analytics</li>
                            <li>Team Cohesion</li>
                            <li>Project Management</li>
                        </ul>
                        <p className='expedu-item-grade'> Grade Achieved: 2:1 - Second Class Honors (Upper Division)</p>
                    </div>

                </div>
            </div>

            <div className='root-divider'></div>

            <div className='skilltech-container'>
                <h3 className='section-title'>Technologies and Skills</h3>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '18px', justifyContent: 'center' }}>
                    {types.map(type => (
                        <button
                            key={type}
                            className={`skilltech-button${selectedType === type ? ' selected' : ''}`}
                            onClick={() => setSelectedType(type)}
                        >
                            {type === 'unselected' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                        </button>
                    ))}
                </div>
                <div className='skilltech-item-container'>
                    {skilltechItems
                        .filter(item => selectedType === 'unselected' || item.type === selectedType)
                        .map(item => (
                            <div className='skilltech-item' key={item.name}>
                                <img className='skilltech-item-img' src={item.img} alt={item.name} />
                                <p className='skilltech-item-name'>{item.name}</p>
                            </div>
                        ))}
                </div>
            </div>

            <div className='root-divider'></div>

            <div className='projects-container'>
                <h3 className='section-title' ref={previousproj}>My Previous Projects</h3>
                <h4 className='projects-title-desc'>Click to see more about each one</h4>
                <div className='project-item-container'>

                    <div className='project-item' onClick={() => window.location.replace('https://github.com/Inviticux/COMP3000')}>
                        <h4 className='project-item-title'>Llamalyze</h4>
                        <img className='project-item-img' src={llamalyze}></img>
                        <p className='project-item-desc'>An AI Powered Quizzing Platform that allows lecturers to gauge engagement with their lectures</p>
                    </div>

                    <div className='project-item' onClick={() => window.location.replace('https://github.com/Inviticux/networksassesment')}>
                        <h4 className='project-item-title'>Nginx Load Balancer</h4>
                        <img className='project-item-img' src={loadbalancerimg}></img>
                        <p className='project-item-desc'>A load balancing solution for simple php web instances using Nginx</p>
                    </div>

                    <div className='project-item' onClick={() => window.location.replace('https://github.com/Plymouth-University/coursework-Inviticux')}>
                        <h4 className='project-item-title'>Compass Point Hotel</h4>
                        <img className='project-item-img' src={hotelbookingimg}></img>
                        <p className='project-item-desc'>A simple booking system for a Hotel</p>
                    </div>

                    <div className='project-item' onClick={() => window.location.replace('')}>
                        <h4 className='project-item-title'>Video streaming Experiment</h4>
                        <img className='project-item-img' src={streamingexp}></img>
                        <p className='project-item-desc'>I used mininet connected to an external Opendaylight Network Controller to experiment with the effects bandwidth has on video streaming</p>
                    </div>

                </div>
            </div>

            <div className='root-divider'></div>

            <div className='aboutme-root'>
                <h3 className='section-title'>A bit more about me</h3>
                <div className='aboutme-container'>
                    <div className='aboutme-img-container-left'>
                        <img className='aboutme-img' src={pcbuild}></img>
                        <img className='aboutme-img' src={obiwan}></img>
                        <img className='aboutme-img' src={anakin}></img>
                    </div>
                    <div className='aboutme-text-container'>
                        <p className='aboutme-text1'>I’m really into building and tinkering, so a lot of my time goes into my homelab and 3D printing. My homelab’s still a work in progress, but the plan is to have two servers and a NAS so I can play around with networks, storage, and all the infrastructure side of things. I also love 3D printing and making furniture – desks, tables – it’s great seeing something start as an idea and then actually build it with my own hands.</p>
                        <p className='aboutme-text2'>When I’m not doing tech stuff, I like more active hobbies. I do airsoft, which is basically a game with realistic-looking guns that shoot little plastic pellets, it’s fast and strategic and a lot of fun. I also enjoy clay shooting with shotguns, which is all about focus and precision, and it’s nice to switch up the pace from everything else I do.</p>
                        <p className='aboutme-text3'>Outside of that, I’ve got two cats, Obi-Wan and Anakin, who annoy me every day but I wouldn’t have it any other way. I also love camping and being outdoors – I’ve got a paddleboard and I’m part of a local scout troop where I help out with both cubs and scouts. Basically I like keeping busy, learning new stuff, and doing things that challenge me whether it’s tech, hands-on projects, or being outside.</p>
                    </div>
                    <div className='aboutme-img-container-right'>
                        <img className='aboutme-img' src={clayshoot}></img>
                        <img className='aboutme-img' src={sup}></img>
                        <img className='aboutme-img' src={campingshot}></img>
                    </div>
                </div>
            </div>

            <div className='root-divider'></div>

            <div className='contact-container'>
                <h3 className='contact-title' ref={contactform}>Contact Me!</h3>
                    <p className='contact-item-text'>Shoot me and email on felix.pendered@outlook.com</p>
                    <p className='contact-item-text'>Or message me on LinkedIn</p>
                    <img className='contact-linkedin-img' src={linkedinimg} onClick={() => window.location.replace('https://linkedin.com/in/felix-pendered-294-linkin/')}></img>
            </div>

            <div className='footer-root'>
                <p className='footer-text'>Thanks for reading!</p>
            </div>
        </div>
    );
};

export default MainPage;