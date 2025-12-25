const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '.')));

// Routes
app.get('/api/projects', (req, res) => {
    // Sample projects data - in a real app this would come from a database
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
            technologies: ["React", "Node.js", "MongoDB"],
            imageUrl: "images/project1.jpg",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 2,
            title: "Social Media Dashboard",
            description: "A social media analytics dashboard that displays key metrics and insights. Built with Vue.js and Express.",
            technologies: ["Vue.js", "Express", "PostgreSQL"],
            imageUrl: "images/project2.jpg",
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "A productivity app that helps teams organize and track their tasks. Features include real-time updates and team collaboration.",
            technologies: ["React", "Socket.io", "Firebase"],
            imageUrl: "images/project3.jpg",
            githubUrl: "#",
            liveUrl: "#"
        }
    ];

    res.json(projects);
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    // In a real application, you would send an email to manish7352854063@gmail.com or save to a database
    console.log('Contact form submission:', { name, email, subject, message });

    // Simulate processing delay
    setTimeout(() => {
        res.json({
            success: true,
            message: 'Message received! Manish will get back to you soon.'
        });
    }, 1000);
});

app.get('/api/skills', (req, res) => {
    // Sample skills data
    const skills = {
        frontend: [
            { name: "HTML/CSS", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "React", level: 85 },
            { name: "Vue.js", level: 80 }
        ],
        backend: [
            { name: "Node.js", level: 85 },
            { name: "Express", level: 80 },
            { name: "Python", level: 75 },
            { name: "PHP", level: 70 }
        ],
        database: [
            { name: "MongoDB", level: 80 },
            { name: "PostgreSQL", level: 75 },
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 70 }
        ]
    };

    res.json(skills);
});

// Serve frontend static files
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to view your portfolio`);
});