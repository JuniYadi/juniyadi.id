"use client";

import React, { useEffect, useRef } from "react";
import resumeData from "@/app/about/resume.json";
import "./print.css";

export default function Page() {
  const {
    profile,
    summary,
    skills,
    certifications,
    experience,
    education,
    projects,
  } = resumeData;

  // Add a ref to track if we've already printed
  const hasPrintedRef = useRef(false);

  useEffect(() => {
    // Set the document title
    document.title = `resume-juniyadi.pdf`;

    // Trigger print only if it hasn't been triggered yet
    if (!hasPrintedRef.current) {
      hasPrintedRef.current = true;
      window.print();
    }
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8 print:max-w-none print:mx-0 print:p-0 print:text-base">
      {/* Print styles to prevent showing URLs */}

      {/* Profile Section */}
      <header className="text-center space-y-4">
        <div className="text-gray-600 print:text-base">
          <p>{profile.name}</p>
          <p>{profile.title}</p>
          <p>{profile.location}</p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <a
              href={`mailto:${profile.contact.email}`}
              className="hover:underline"
            >
              {profile.contact.email}
            </a>
            <span className="hidden sm:inline print:inline">•</span>
            <a
              href={`https://linkedin.com/in/${profile.contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <span className="hidden sm:inline print:inline">•</span>
            <a
              href={`https://github.com/${profile.contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
            <span className="hidden sm:inline print:inline">•</span>
            <a
              href={`https://${profile.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {profile.contact.website}
            </a>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="print:break-inside-avoid">
        <h2 className="text-2xl font-semibold mb-4 print:text-xl">
          Professional Summary
        </h2>
        {summary.map((paragraph, index) => (
          <p key={index} className="mb-2">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 print:text-xl">
          Professional Experience
        </h2>
        {experience.map((job, index) => (
          <div key={index} className="mb-6 print:mb-4 print:break-inside-avoid">
            <h3 className="text-xl font-semibold print:text-lg">{job.title}</h3>
            <p className="text-gray-600">
              {job.company} ({job.period})
            </p>
            <ul className="list-disc list-inside print:text-base">
              {job.responsibilities.map((responsibility, respIndex) => (
                <li key={respIndex} className="mb-1 print:text-base">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section className="print:break-inside-avoid print:break-before-auto">
        <h2 className="text-2xl font-semibold mb-4 print:text-xl">
          Certifications
        </h2>
        {certifications.map((cert, index) => (
          <div key={index} className="mb-2">
            <p>
              <span className="font-semibold">{cert.title}</span> - {cert.date}
            </p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section className="print:break-inside-avoid">
        <h2 className="text-2xl font-semibold mb-4 print:text-xl">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-2 print:gap-4">
          {skills.map((skillCategory, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-2">{skillCategory.category}</h3>
              <ul className="list-disc list-inside">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="print:break-inside-avoid">
        <h2 className="text-2xl font-semibold mb-4 print:text-xl">
          Notable Projects
        </h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-xl font-semibold print:text-lg">
              {project.title}
            </h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-gray-600">
              Technologies: {project.technologies.join(", ")}
            </p>
            <div className="mt-1 print:hidden">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mr-4"
              >
                GitHub Repository
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live Project
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="print:break-inside-avoid">
        <h2 className="text-2xl font-semibold mb-4 print:text-xl">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{edu.degree}</p>
            <p>{edu.university}</p>
            <p className="text-gray-600">{edu.period}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
