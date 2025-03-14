import Image from "next/image";
import Blog from "@/components/Blog";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative h-64 w-64 md:h-80 md:w-80 mx-auto">
              {/* Replace with your actual profile image */}
              <Image
                src="/profile-white.jpg"
                alt="JuniYadi Profile"
                fill
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Juni Yadi
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
              Lead DevOps Engineer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Experienced DevOps Engineer specializing in infrastructure
              automation, CI/CD pipelines, cloud architecture, and system
              reliability. I build and maintain scalable, resilient
              infrastructure that empowers development teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/juniyadi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/juniyadi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Certifications />
      <Skills />
      <Blog />
    </>
  );
}
