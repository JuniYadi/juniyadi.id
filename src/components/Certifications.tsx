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
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      level: "Foundational",
      date: "Apr 2024 - Apr 2027",
      image: "/certification/aws-certified-cloud-practitioner.png",
      pdf: "/certification/aws-certified-cloud-practitioner.pdf",
    },
    {
      name: "AWS Academy Cloud Operations",
      issuer: "Amazon Web Services Training and Certification",
      level: "Associate",
      date: "Oct 2021 - Present",
      image: "/certification/aws-academy.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
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
              <h3 className="font-medium text-lg mb-2 text-gray-800">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600">Issuer by {cert.issuer}</p>
              <p className="text-sm text-blue-500 font-medium mt-1">
                Level: {cert.level}
              </p>
              <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
              
              {cert.pdf && (
                <div className="mt-4">
                  <Link 
                    href={cert.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Certificate
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
