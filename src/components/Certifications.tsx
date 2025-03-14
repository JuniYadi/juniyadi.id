import React from "react";
import Image from "next/image";
import Link from "next/link";

const Certifications: React.FC = () => {
  // Certifications data
  const certifications = [
    {
      name: "AWS Certified SysOps Administrator",
      issuer: "Amazon Web Services Training and Certification",
      level: "Associate",
      date: "Nov 2021 - Nov 2025",
      image: "/certification/aws-sysops.png",
      pdf: "/certification/aws-certified-sysops-administrator-associate-certificate.pdf",
      credly:
        "https://www.credly.com/badges/d062ab2b-e41e-45d9-8a88-86413ea19a14/public_url",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      level: "Foundational",
      date: "Apr 2024 - Apr 2027",
      image: "/certification/aws-certified-cloud-practitioner.png",
      pdf: "/certification/aws-certified-cloud-practitioner.pdf",
      credly:
        "https://www.credly.com/badges/7bb2e44c-ce2e-4c7e-b5c1-d3399b29c18d/public_url",
    },
    {
      name: "AWS Academy Cloud Operations",
      issuer: "Amazon Web Services Training and Certification",
      level: "Associate",
      date: "Oct 2021 - Present",
      image: "/certification/aws-academy.png",
      credly:
        "https://www.credly.com/badges/8d64b694-75e8-4165-8cb4-f38f0a825e78/public_url",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-600"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={150}
                  height={150}
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="font-medium text-lg mb-2 text-gray-800 dark:text-gray-100">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Issuer by {cert.issuer}
              </p>
              <p className="text-sm text-blue-500 dark:text-blue-300 font-medium mt-1">
                Level: {cert.level}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {cert.date}
              </p>

              <div className="mt-4 flex justify-center gap-3">
                {cert.pdf && (
                  <Link
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 9h4M10 13h4M10 17h2"
                      />
                    </svg>
                    PDF
                  </Link>
                )}
                {cert.credly && (
                  <Link
                    href={cert.credly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 rounded-full transition-colors"
                  >
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                    Credly
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
