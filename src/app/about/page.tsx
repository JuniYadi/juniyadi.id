import React from 'react';
import Image from 'next/image';
import resumeData from './resume.json';

export const metadata = {
  title: "About Me - Juni Yadi",
  description: "Learn more about Juni Yadi, skills, experience and background",
};

export default function AboutPage() {
  const { profile, summary, skills, certifications, experience, education, projects } = resumeData;

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="mb-6 relative">
              <Image
                src={profile.image}
                alt={profile.name}
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2 dark:text-white">
              {profile.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {profile.title}
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Contact
              </h3>
              <ul className="space-y-2">
                {profile.contact.email && (
                  <li key="email" className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
                  </li>
                )}
                {profile.contact.github && (
                  <li key="github" className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </li>
                )}
                {profile.contact.linkedin && (
                  <li key="linkedin" className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zM7.84 14.13a.77.77 0 01-1.11.67l-3.06-1.46a.76.76 0 01-.42-.67V8a.76.76 0 011.15-.65l3.06 1.48a.77.77 0 01.38.66zm6.77-3.27a.42.42 0 01-.42.42h-1.24l-1.72 3.46a.42.42 0 01-.75 0L8.76 11.3H7.52a.42.42 0 01-.42-.42v-.84a.42.42 0 01.42-.42h1.24l1.72-3.46a.42.42 0 01.75 0l1.72 3.46h1.24a.42.42 0 01.42.42z" />
                    </svg>
                    <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </li>
                )}
                {profile.contact.website && (
                  <li key="website" className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zM4.9 7.5h1.9v5H4.9v-5zm1-3a1 1 0 11-1 1 1 1 0 011-1zM15 12.5h-2v-2.6c0-1.1-.4-1.4-1.2-1.4S10 9.2 10 10.2v2.3H8v-5h1.9v1c.3-.6 1-.9 1.8-.9 1.6 0 2.3 1 2.3 2.9v2z" />
                    </svg>
                    <a href={profile.contact.website} target="_blank" rel="noopener noreferrer">Website</a>
                  </li>
                )}
                {profile.location && (
                  <li key="location" className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{profile.location}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:col-span-2">
          {/* Bio Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Professional Summary
            </h2>
            {summary.map((paragraph, index) => (
              <p key={index} className={`dark:text-gray-200 ${index < summary.length - 1 ? 'mb-4' : ''}`}>
                {paragraph}
              </p>
            ))}
          </section>

          {/* Skills Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillCategory, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {skillCategory.category}
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 dark:text-gray-200">
                    {skillCategory.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Certifications
            </h2>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Professional Experience
            </h2>

            <div className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {job.company} | {job.period}
                  </p>
                  <ul className="list-disc pl-5 mt-2 dark:text-gray-200 space-y-1">
                    {job.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Education
            </h2>

            {education.map((edu, index) => (
              <div key={index} className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.university} | {edu.period}
                </p>
              </div>
            ))}
          </section>
          {/* Projects Section */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Projects
            </h2>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                  <h3 className="text-xl font-semibold dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 dark:text-gray-200">{project.description}</p>
                  <div className="mt-2">
                    <span className="font-semibold dark:text-white">Technologies:</span>
                    <ul className="list-disc pl-5 mt-1 dark:text-gray-200 space-y-1">
                      {project.technologies.map((tech, techIndex) => (
                        <li key={techIndex}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-2 space-x-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        GitHub
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
