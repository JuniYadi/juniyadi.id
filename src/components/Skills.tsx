"use client";

import React, { useState } from "react";

// Define types for our skills data
type SkillDetails = string[] | { [key: string]: string[] };

interface SkillCategory {
  name: string;
  main: string[];
  details: SkillDetails;
}

// Define a type for our active tooltip
interface ActiveTooltip {
  categoryIndex: number;
  skill: string;
}

const Skills: React.FC = () => {
  const [activeTooltip, setActiveTooltip] = useState<ActiveTooltip | null>(
    null
  );

  // Skills data with main skills and detailed skills
  const _skills: SkillCategory[] = [
    {
      name: "Cloud Providers",
      main: ["AWS", "GCP", "Cloudflare"],
      details: {
        AWS: [
          "IAM",
          "EC2",
          "S3",
          "RDS",
          "DynamoDB",
          "VPC",
          "Route 53",
          "Lambda",
          "API Gateway",
          "CloudFront",
          "ALB",
          "NLB",
          "EKS",
          "CloudFormation",
          "CloudWatch",
          "Secrets Manager",
          "Systems Manager",
          "Auto Scaling",
          "EventBridge",
          "SNS",
          "SQS",
          "QuickSight",
        ],
        GCP: ["Workspace", "Compute Engine", "Cloud Storage"],
        Cloudflare: [
          "DNS",
          "CDN",
          "Worker",
          "D1 Database",
          "KV Namespace",
          "R2 Bucket",
          "Browser",
        ],
      },
    },
    {
      name: "Infrastructure & IaC",
      main: [
        "Ansible",
        "Terraform",
        "Containerization",
        "Kubernetes",
        "Ansible",
        "GitOps",
        "Serverless",
        "Cloudformation",
      ],
      details: {
        Serverless: ["Serverless Framework", "SST"],
        Containerization: ["Docker", "Podman"],
        GitOps: ["ArgoCD"],
        Kubernetes: ["EKS", "K3s"],
      },
    },
    {
      name: "CI/CD Pipeline",
      main: ["GitHub Actions", "Jenkins", "ArgoCD"],
      details: [],
    },
    {
      name: "Monitoring",
      main: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
      details: {
        Prometheus: ["Alertmanager", "Node Exporter"],
        Grafana: ["Dashboards", "Alerts"],
        "ELK Stack": [
          "Elasticsearch",
          "Observability",
          "APM",
          "Kibana",
          "Fluentd",
          "Fluentbit",
        ],
        CloudWatch: ["Logs", "Metrics", "Events", "Alarms"],
      },
    },
    {
      name: "Database",
      main: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "RabbitMQ",
        "DynamoDB",
        "D1 Database",
      ],
      details: [],
    },
    {
      name: "Security",
      main: [
        "Vault",
        "OpenVPN",
        "Wireguard",
        "Pritunl",
        "Trivy",
        "Sonarqube",
        "Teleport",
      ],
      details: [],
    },
    {
      name: "Networking",
      main: [
        "Nginx",
        "HAProxy",
        "Apache",
        "Cloudflare",
        "AWS Networking",
        "Jitsi",
      ],
      details: {
        Nginx: [
          "Reverse Proxy",
          "Load Balancer",
          "SSL Termination",
          "HTTP/2",
          "Rate Limiting",
          "Caching",
        ],
        HAProxy: [
          "TCP Load Balancer",
          "HTTP Load Balancer",
          "SSL Termination",
          "Health Checks",
        ],
        Apache: ["Virtual Hosts", "mod_proxy", "mod_ssl", "HTTP/2"],
        Cloudflare: [
          "DNS",
          "CDN",
          "DDoS Protection",
          "WAF",
          "Zero Trust",
          "Tunnels",
        ],
        "AWS Networking": [
          "VPC",
          "Subnets",
          "Route Tables",
          "NACLs",
          "Security Groups",
          "NAT Gateway",
        ],
        Jitsi: ["WebRTC", "Video Conferencing", "Self-hosted"],
      },
    },
    {
      name: "Programming",
      main: ["Python", "TypeScript", "JavaScript", "Bash Script"],
      details: [],
    },
  ];

  // Handle mouse enter and leave for tooltips
  const handleMouseEnter = (skill: string, categoryIndex: number) => {
    setActiveTooltip({ skill, categoryIndex });
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  // Helper function to check if a skill has details and return the count
  const getSkillDetailsCount = (
    details: SkillDetails,
    skill: string
  ): number => {
    if (Array.isArray(details)) {
      return details.length;
    }
    return details[skill] ? details[skill].length : 0;
  };

  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Technical Skills
          </h2>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
            Technologies and tools I have worked with
            <span className="block mt-1 text-sm italic">
              (Hover over skills to see more details)
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {_skills.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md dark:shadow-gray-700/20 relative"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-1">
                {category.main.map((skill, skillIndex) => {
                  const detailsCount = getSkillDetailsCount(
                    category.details,
                    skill
                  );
                  const hasDetails =
                    (Array.isArray(category.details) &&
                      category.details.length > 0) ||
                    (!Array.isArray(category.details) &&
                      category.details[skill] &&
                      category.details[skill].length > 0);

                  return (
                    <span
                      key={skillIndex}
                      className={`px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full ${
                        hasDetails
                          ? "cursor-pointer hover:bg-blue-200 dark:hover:bg-blue-900/50"
                          : ""
                      }`}
                      onMouseEnter={() => handleMouseEnter(skill, index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {skill}{" "}
                      {hasDetails && (
                        <span className="ml-1 px-1.5 py-0.5 bg-blue-200 dark:bg-blue-800 rounded-full">
                          {detailsCount}
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>

              {/* Tooltip that appears on hover over a specific skill */}
              {activeTooltip &&
                activeTooltip.categoryIndex === index &&
                !Array.isArray(category.details) &&
                category.details[activeTooltip.skill] && (
                  <div className="absolute z-10 w-72 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-lg border dark:border-gray-600 top-full left-0 mt-1">
                    <div className="flex flex-wrap gap-1 text-xs">
                      {category.details[activeTooltip.skill].map(
                        (detail, detailIndex) => (
                          <span
                            key={detailIndex}
                            className="px-2 py-0.5 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded"
                          >
                            {detail}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Tooltip for categories with array details */}
              {activeTooltip &&
                activeTooltip.categoryIndex === index &&
                Array.isArray(category.details) &&
                category.details.length > 0 && (
                  <div className="absolute z-10 w-72 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-lg border dark:border-gray-600 top-full left-0 mt-1">
                    <div className="flex flex-wrap gap-1 text-xs">
                      {category.details.map((detail, detailIndex) => (
                        <span
                          key={detailIndex}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
