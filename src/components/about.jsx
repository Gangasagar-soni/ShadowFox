import React from "react";
import profile from "../assets/photo.jpg";

const About = () => {

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "HTML",
    "CSS",
    "REST API",
    "Git"
  ];

  return (
    <div className="bg-teal-50 min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-16">

        <div className="flex flex-col lg:flex-row items-center gap-12">

          <div className="text-center">
            <img
              src={profile}
              alt="profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-teal-500 shadow-md ml-auto mr-auto"
            />

            <h1 className="text-3xl font-semibold text-teal-800 mt-4">
              Gangasagar Soni
            </h1>

            <p className="text-gray-600 text-sm mt-1">
              MERN Stack Developer
            </p>

            <div className="flex justify-center gap-4 mt-5">

              <a
                href="/resume.pdf"
                className="px-5 py-2 bg-teal-600 text-white text-sm rounded-md hover:bg-teal-700 transition"
                target="_blank"
              >
                Resume
              </a>

              <a
                href="#projects"
                className="px-5 py-2 border border-teal-600 text-teal-700 text-sm rounded-md hover:bg-teal-100 transition"
              >
                Live Projects
              </a>

            </div>
          </div>

          <div className="flex-1 space-y-4">

            <h2 className="text-2xl font-semibold text-teal-800">
              About Me
            </h2>

            <p className="text-gray-700 leading-relaxed">
              I’m a Full-Stack Developer specializing in the MERN stack
              (MongoDB, Express.js, React, Node.js). I focus on building
              scalable web applications with clean architecture and
              efficient APIs.
            </p>

            <p className="text-gray-700 leading-relaxed">
              I have built projects such as a React Movie Application and
              an Airbnb-style platform using Node.js, Express, MongoDB,
              and EJS. Through these projects I gained experience working
              with REST APIs, authentication systems, database design,
              and responsive UI development.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Currently, I’m working as a Full Stack Developer Intern,
              gaining practical experience building real-world web
              applications and improving my backend and frontend
              development skills.
            </p>

          </div>

        </div>

        <section>

          <h3 className="text-xl font-semibold text-teal-800 mb-6">
            Skills
          </h3>

          <div className="flex flex-wrap gap-3">

            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm bg-teal-100 text-teal-800 px-4 py-2 rounded-md"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Experience
            </h3>

            <p className="font-medium text-gray-800">
              Full Stack Developer Intern
            </p>

            <p className="text-gray-600 text-sm">
              ShadowFox • 2026 – Present
            </p>

          </div>

          <div>
            <h3 className="text-xl font-semibold text-teal-800 mb-4">
              Education
            </h3>

            <p className="font-medium text-gray-800">
              Bachelor of Computer Applications (BCA)
            </p>

            <p className="text-gray-600 text-sm">
              GH Raisoni Institute of Engineering and Technology
            </p>

            <p className="text-gray-600 text-sm">
              2023 – 2026
            </p>

          </div>

        </section>

        <section id="projects">

          <h3 className="text-xl font-semibold text-teal-800 mb-6">
            Projects
          </h3>

          <div className="space-y-6">

            <div>
              <p className="font-medium text-gray-800">
                React Movie Application
              </p>

              <p className="text-gray-600 text-sm mt-1">
                A React application that fetches movie data from the TMDB
                API allowing users to search and explore trending movies.
              </p>

              <div className="flex gap-4 mt-2 text-sm">
                <a className="text-teal-700 hover:underline" href="http://gs-movie-app.netlify.app">
                  Live Demo
                </a>
                <a className="text-teal-700 hover:underline" href="https://github.com/Gangasagar-soni/MovieApp">
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <p className="font-medium text-gray-800">
                StayHub
              </p>

              <p className="text-gray-600 text-sm mt-1">
                An Airbnb-style web application built with Node.js,
                Express, MongoDB, and EJS featuring authentication,
                CRUD property listings, and dynamic pages.
              </p>

              <div className="flex gap-4 mt-2 text-sm">
                <a className="text-teal-700 hover:underline" href="#">
                  Live Demo
                </a>
                <a className="text-teal-700 hover:underline" href="#">
                  GitHub
                </a>
              </div>
            </div>

          </div>

        </section>

        <section>

          <h3 className="text-xl font-semibold text-teal-800 mb-4">
            Interests
          </h3>

          <p className="text-gray-700">
            Building full-stack applications, exploring modern
            JavaScript technologies, and improving problem solving
            skills through coding challenges.
          </p>

        </section>

      </div>
    </div>
  );
};

export default About;