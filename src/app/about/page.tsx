import React from "react";
import Image from "next/image";

export const metadata = {
  title: "About Me - Juni Yadi",
  description: "Learn more about Juni Yadi, skills, experience and background",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 dark:text-white">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Section */}
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <div className="mb-6 relative">
              <Image
                src="/profile-white.jpg"
                alt="Juni Yadi"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-2xl font-bold mb-2 dark:text-white">
              Juni Yadi
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Lead DevOps Engineer
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Contact
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:juniyadi94@gmail.com">juniyadi94@gmail.com</a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="https://github.com/JuniYadi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zM7.84 14.13a.77.77 0 01-1.11.67l-3.06-1.46a.76.76 0 01-.42-.67V8a.76.76 0 011.15-.65l3.06 1.48a.77.77 0 01.38.66zm6.77-3.27a.42.42 0 01-.42.42h-1.24l-1.72 3.46a.42.42 0 01-.75 0L8.76 11.3H7.52a.42.42 0 01-.42-.42v-.84a.42.42 0 01.42-.42h1.24l1.72-3.46a.42.42 0 01.75 0l1.72 3.46h1.24a.42.42 0 01.42.42z" />
                  </svg>
                  <a
                    href="https://linkedin.com/in/juniyadi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1010 10A10.009 10.009 0 0010 0zM4.9 7.5h1.9v5H4.9v-5zm1-3a1 1 0 11-1 1 1 1 0 011-1zM15 12.5h-2v-2.6c0-1.1-.4-1.4-1.2-1.4S10 9.2 10 10.2v2.3H8v-5h1.9v1c.3-.6 1-.9 1.8-.9 1.6 0 2.3 1 2.3 2.9v2z" />
                  </svg>
                  <a
                    href="https://juniyadi.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Surabaya, Indonesia</span>
                </li>
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
            <p className="mb-4 dark:text-gray-200">
              Results-driven Cloud DevOps Engineer with 4+ years of experience
              specializing in cloud infrastructure automation, Kubernetes
              orchestration, and CI/CD pipeline development. Expertise in AWS,
              Kubernetes, Terraform, Ansible, and security best practices to
              optimize system performance and reliability.
            </p>
            <p className="dark:text-gray-200">
              Proven track record of implementing cost-efficient cloud
              solutions, reducing infrastructure costs by over 60%, cut
              deployment times by 40%, and enhancing security through automated
              compliance checks. Passionate about designing scalable, resilient
              architectures and streamlining workflows to improve operational
              efficiency.
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Cloud & Infrastructure
                </h3>
                <ul className="list-disc pl-5 space-y-1 dark:text-gray-200">
                  <li>AWS (EC2, EKS, Lambda, S3, RDS, VPC)</li>
                  <li>Terraform, CloudFormation, Pulumi</li>
                  <li>Docker, Kubernetes, Helm</li>
                  <li>CI/CD (Jenkins, GitHub Actions)</li>
                  <li>GitOps, ArgoCD</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Security & Monitoring
                </h3>
                <ul className="list-disc pl-5 space-y-1 dark:text-gray-200">
                  <li>AWS IAM, Secrets Manager</li>
                  <li>Vault, Teleport, Pritunl</li>
                  <li>ELK Stack, Fluentbit</li>
                  <li>Prometheus, Grafana, CloudWatch</li>
                  <li>SonarQube, Trivy</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Networking & Services
                </h3>
                <ul className="list-disc pl-5 space-y-1 dark:text-gray-200">
                  <li>Istio, AWS ALB/NLB</li>
                  <li>Nginx, HAProxy</li>
                  <li>VPN, AWS Route 53</li>
                  <li>AWS API Gateway, CloudFront</li>
                  <li>Redis, RabbitMQ</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Programming & Automation
                </h3>
                <ul className="list-disc pl-5 space-y-1 dark:text-gray-200">
                  <li>Python, Bash Script</li>
                  <li>TypeScript, JavaScript</li>
                  <li>Ansible</li>
                  <li>Serverless Framework, SST Framework</li>
                  <li>AWS EventBridge, SNS, SQS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certificates Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Certifications
            </h2>

            <div className="space-y-4">
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-gray-600 dark:text-gray-300">April 2024</p>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  AWS Certified SysOps Administrator – Associate
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  November 2022
                </p>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  AWS Academy Graduate - AWS Academy Cloud Operations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">October 2022</p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Professional Experience
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  Lead DevOps Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  PT. Pintar Pemenang Asia | August 2024 - Present
                </p>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-200">
                  <li>
                    Spearheaded the DevOps team to enhance automation, security,
                    and infrastructure reliability across multiple environments
                  </li>
                  <li>
                    Designed and optimized AWS EKS clusters using auto-scaling,
                    Spot Instances, and Terraform, improving cost efficiency and
                    reliability by 30%
                  </li>
                  <li>
                    Built and managed GitOps-based CI/CD pipelines using ArgoCD,
                    Jenkins, Terraform, and Ansible, enabling automated
                    zero-downtime deployments
                  </li>
                  <li>
                    Optimized build and deployment times for Java & Node.js
                    applications by fine-tuning Jenkins pipelines, caching
                    dependencies, and parallelizing builds, reducing deployment
                    time by 80%
                  </li>
                  <li>
                    Integrated SonarQube for automated security scanning & code
                    quality checks, ensuring vulnerabilities are fixed before
                    deployment
                  </li>
                  <li>
                    Implemented Istio service mesh with mTLS for secure
                    service-to-service communication, traffic control, and
                    observability in microservices
                  </li>
                  <li>
                    Developed real-time monitoring & observability by
                    integrating AWS CloudWatch, Prometheus, and Discord log
                    alerts, reducing incident response time by 50%
                  </li>
                  <li>
                    Optimized and scaled Jitsi infrastructure for Prakerja
                    (Government Program), ensuring seamless video conferencing
                    for thousands of users
                  </li>
                  <li>
                    Led network observability and traffic control improvements
                    using Istio and Kiali, enhancing performance and debugging
                    capabilities
                  </li>
                  <li>
                    Configured AWS ALB Ingress Controller for secure SSL
                    termination & path-based routing to expose microservices
                    efficiently
                  </li>
                  <li>
                    Integrated Elastic Cloud for log monitoring and APM for
                    anomaly detection, improving troubleshooting and performance
                    analysis
                  </li>
                  <li>
                    Enabled centralized logging with Fluent Bit, ELK Stack
                    (Elasticsearch, Logstash, Kibana), enhancing log insights
                    and system debugging
                  </li>
                  <li>
                    Reduced infrastructure costs by migrating Java microservices
                    from x86_64 to ARM architecture using AWS Graviton
                  </li>
                  <li>
                    Assisted in integrating AWS infrastructure with client
                    environments on Azure, ensuring seamless interoperability
                  </li>
                  <li>
                    Collaborated with Product Teams to develop real-time
                    dashboards in AWS QuickSight, providing critical insights
                    into application performance and user behavior
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  DevOps Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  PT. Pintar Pemenang Asia | August 2022 - August 2024
                </p>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-200">
                  <li>
                    Reduced AWS costs by 40% within the first three months
                    through resource optimization and instance right-sizing
                  </li>
                  <li>
                    Designed and built scalable AWS infrastructure, implementing
                    autoscaling, cost optimization strategies, and microservices
                    architecture
                  </li>
                  <li>
                    Lowered bandwidth costs by 90% for internal applications by
                    leveraging AWS VPC Endpoints, optimizing traffic routing,
                    and implementing caching mechanisms
                  </li>
                  <li>
                    Reduced storage costs by 60% by implementing the correct S3
                    storage classes based on usage patterns
                  </li>
                  <li>
                    Automated manual infrastructure tasks using Terraform,
                    Ansible, Bash scripts, and Python, improving operational
                    efficiency and reducing manual work
                  </li>
                  <li>
                    Developed internal DevOps tools using AWS Lambda, API
                    Gateway, and AWS SNS to monitor AWS SES bounce and complaint
                    rates for proactive email deliverability management
                  </li>
                  <li>
                    Integrated microservices with AWS Lambda using Python and
                    TypeScript to build efficient internal automation tools
                  </li>
                  <li>
                    Created and managed Java Spring Boot microservices
                    deployments on AWS EKS, ensuring high availability and
                    auto-scaling
                  </li>
                  <li>
                    Designed and deployed an uptime monitoring system with
                    real-time alerting, capable of detecting downtime and
                    sending alerts within one second
                  </li>
                  <li>
                    Set up and configured Teleport for secure SSH access,
                    internal application authentication, access control, and
                    monitoring, ensuring compliance and security
                  </li>
                  <li>
                    Created Ansible scripts to integrate multiple DevOps tools
                    and tested them in a controlled development environment
                  </li>
                  <li>
                    Migrated legacy tools (manual deployments) to Helm charts,
                    streamlining updates and maintenance for better Kubernetes
                    (EKS) application management
                  </li>
                  <li>
                    Managed and monitored Kubernetes infrastructure using
                    Rancher, ensuring EKS cluster stability, workload
                    performance, and security
                  </li>
                  <li>
                    Designed and deployed a scalable Jitsi video conferencing
                    infrastructure for the Prakerja Program, optimizing storage
                    costs for recordings by 50%
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  DevOps Engineer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  PT. Aku Cinta Memiles | July 2021 - August 2022
                </p>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-200">
                  <li>
                    Built and managed scalable AWS infrastructure for production
                    environments, improving system reliability
                  </li>
                  <li>
                    Migrated a traditional database to AWS, ensuring high
                    availability and scalability to handle thousands of users
                    during promotional events
                  </li>
                  <li>
                    Configured and optimized Nginx servers for Laravel and
                    Next.js applications, improving response times and resource
                    efficiency
                  </li>
                  <li>
                    Implemented Redis as a caching layer, significantly reducing
                    database load and improving system performance
                  </li>
                  <li>
                    Migrated system from a single-instance to a multi-instance
                    architecture, resolving I/O bottlenecks and increasing
                    resilience
                  </li>
                  <li>
                    Designed and deployed a CI/CD pipeline using GitHub Actions,
                    automating deployments across all existing repositories
                  </li>
                  <li>
                    Automated infrastructure provisioning using Ansible,
                    reducing manual setup time and improving consistency
                  </li>
                  <li>
                    Managed RDS databases with automated backups, monitoring,
                    and performance optimization
                  </li>
                  <li>
                    Performed safe database migrations, ensuring schema updates
                    were executed securely through version-controlled
                    repositories
                  </li>
                  <li>
                    Upgraded system notifications using AWS SES, enhancing email
                    reliability and reducing delivery failures
                  </li>
                  <li>
                    Conducted frequent system updates and vulnerability scans,
                    strengthening security and reducing risks
                  </li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                <h3 className="text-xl font-semibold dark:text-white">
                  Backend Development and Cloud/Serverless Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Pojokan Projects | May 2019 - July 2021
                </p>
                <ul className="list-disc pl-5 mt-2 dark:text-gray-200">
                  <li>
                    Developed and maintained serverless backend systems using
                    PHP, Node.js, and TypeScript, leveraging AWS Lambda, API
                    Gateway, and DynamoDB for cost-efficient scalability
                  </li>
                  <li>
                    Optimized serverless architectures to reduce costs during
                    idle periods while maintaining high availability for
                    applications in hospital surveys, education platforms, and
                    restaurant management systems
                  </li>
                  <li>
                    Designed and implemented CI/CD pipelines using GitHub
                    Actions, automating deployments for seamless application
                    updates
                  </li>
                  <li>
                    Built and integrated AWS Chime to enable reliable and
                    scalable online communication features
                  </li>
                  <li>
                    Managed and optimized Amazon S3 object storage for faster
                    access and cost reduction
                  </li>
                  <li>
                    Utilized Serverless Framework to manage and maintain AWS
                    Lambda functions and associated resources, ensuring
                    efficient IAM policy attachments
                  </li>
                  <li>
                    Designed and implemented DNS management solutions using
                    Amazon Route 53 and Cloudflare, ensuring high availability
                    and low latency
                  </li>
                  <li>
                    Implemented secure authentication and authorization
                    mechanisms using OAuth2, JWT, and AWS IAM, ensuring robust
                    access control
                  </li>
                  <li>
                    Collaborated with cross-functional teams to deliver
                    high-quality software solutions, including front-end
                    engineers, product managers, and designers
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 dark:text-white">
              Education
            </h2>

            <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
              <h3 className="text-xl font-semibold dark:text-white">
                Bachelor&apos;s in Informatics Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                University Widya Kartika, Surabaya, Indonesia | 2022 - Present
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
