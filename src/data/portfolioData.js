export const portfolioData = {
  name: "Gangasagar Soni",
  title: "Full Stack Developer",
  subtitle: "MERN Stack Developer | Creative Coder | Tech Enthusiast",
  email: "sagarsoni39166@gmail.com",
  phone: "+91 9156223659",
  location: "Nagpur, Maharashtra, India",
  bio: `I'm a Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js). 
  I focus on building scalable web applications with clean architecture and efficient APIs.`,
  
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/Gangasagar-soni",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/gangasagar-soni-290052303",
      icon: "linkedin"
    }
  ],

  about: `I have built projects such as a React Movie Application and an Airbnb-style platform using 
  Node.js, Express, MongoDB, and EJS. Through these projects I gained experience working with REST APIs, 
  authentication systems, database design, and responsive UI development.
  
  Currently, I'm working as a Full Stack Developer Intern, gaining practical experience building real-world 
  web applications and improving my backend and frontend development skills.`,

  skillsByCategory: {
    Frontend: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    Backend: ["Node.js", "Express.js", "REST API", "Authentication", "JWT"],
    Database: ["MongoDB", "MySQL", "Database Design"],
    Tools: ["Git", "GitHub", "VS Code", "Postman"]
  },

  projects: [
    {
      id: 1,
      name: "StayHub",
      description: "An Airbnb-style platform built with MERN stack featuring complete booking functionality, user authentication, and responsive design.",
      longDescription: `StayHub is a full-featured accommodation booking platform that allows users to browse, 
      search, and book properties. It includes advanced filtering, user reviews, secure authentication, 
      and a complete admin dashboard for property management.`,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://stayhub-frontend-k8lv.onrender.com",
      githubUrl: "https://github.com/Gangasagar-soni",
      image: "stayhub.jpg",
      featured: true
    },
    {
      id: 2,
      name: "React Movie App",
      description: "A dynamic movie discovery application built with React, featuring search functionality, detailed movie information, ratings, and a modern responsive UI.",
      longDescription: `React Movie App is a feature-rich application that allows users to explore and discover 
      movies. It integrates with a movie database API to fetch real-time data, includes advanced search, 
      filtering by genres, and displays detailed information including ratings, cast, and reviews.`,
      technologies: ["React", "JavaScript", "CSS3", "Movie API", "Netlify"],
      liveUrl: "https://gs-movie-app.netlify.app",
      githubUrl: "https://github.com/Gangasagar-soni",
      image: "movieapp.jpg",
      featured: false
    }
  ],

  experience: [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      company: "ShadowFox Technologies",
      duration: "1 month (march 2026 - march 2026)",
      description: "Building real-world web applications, improving backend and frontend development skills.",
      technologies: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      id: 2,
      title: "MERN Stack Developer",
      company: "Self-Employed Projects",
      duration: "2023 - Present",
      description: "Developed multiple projects including StayHub booking platform and React Movie Application.",
      technologies: ["MERN Stack", "REST APIs", "Database Design"]
    }
  ],

  education: [
    {
      id: 1,
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "GH Raisoni College of Engineering and Management, Nagpur",
      year: "2022 - 2026"
    }
  ],

  certifications: [
    {
      id: 1,
      name: "React Certification",
      provider: "Scaler",
      year: "2024",
      icon: "⚛️"
    },
    {
      id: 2,
      name: "MySQL Certification (Database Design & Queries)",
      provider: "HackerRank",
      year: "2024",
      icon: "🗄️"
    },
    {
      id: 3,
      name: "MySQL - Advanced Queries & Optimization",
      provider: "HackerRank",
      year: "2024",
      icon: "🗄️"
    },
    {
      id: 4,
      name: "JavaScript Fundamentals",
      provider: "HackerRank",
      year: "2023",
      icon: "📜"
    },
    {
      id: 5,
      name: "JavaScript - Advanced Concepts",
      provider: "HackerRank",
      year: "2023",
      icon: "📜"
    },
    {
      id: 6,
      name: "JavaScript - DOM & Web APIs",
      provider: "HackerRank",
      year: "2024",
      icon: "📜"
    },
    {
      id: 7,
      name: "C & C++ Programming Fundamentals",
      provider: "MCTE",
      year: "2023",
      icon: "⚙️"
    },
    {
      id: 8,
      name: "C++ - Object-Oriented Programming",
      provider: "MCTE",
      year: "2023",
      icon: "⚙️"
    },
    {
      id: 9,
      name: "C++ - Advanced Concepts",
      provider: "MCTE",
      year: "2024",
      icon: "⚙️"
    },
    {
      id: 10,
      name: "C - Advanced Problem Solving",
      provider: "MCTE",
      year: "2024",
      icon: "⚙️"
    },
    {
      id: 11,
      name: "MSCIT",
      provider: "Government of Maharashtra",
      year: "2023",
      icon: "🏆"
    }
  ]
};
