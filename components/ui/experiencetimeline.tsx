import React from "react";
import Image, {StaticImageData} from "next/image";
import { Card } from "@/components/ui/card"; // Adjust the import path based on your project structure
// import { calculateDurationInMonths } from "@/lib/dateUtils"; // Adjust the import path based on your project structure
import uvuLogo from "../../assets/uvu.png"; // Import the logo image
import rhoneLogo from "../../assets/rhone-nb.png"; // Import the logo image
import i3scLogo from "../../assets/i3sc-nb.png"; // Import the logo image
import elLogo from "../../assets/EL.png"; // Import the logo image

interface ExperienceCardProps {
  company: string;
  role: string;
  dateRange: string;
  logo: StaticImageData;
  description: string;
  // bgColor?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  company,
  role,
  dateRange,
  logo,
  description,
  // bgColor = "bg-gray-100",
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="mb-8">
      <div className="relative pl-8">
        {/* Timeline triangle */}
        <div
          className="absolute top-1/4 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent"
          style={{
            left: "1.55rem",
            transform: "translateY(-50%) rotate(180deg)",
            borderLeftColor: "var(--color-primary)",
          }}
        ></div>

        {/* Card */}
        <Card
          className={`p-4 rounded-lg shadow-md border-l-2 relative transition-all duration-300 ease-in-out`}
          style={{
            backgroundColor: "var(--color-card)",
            borderColor: "var(--color-border)",
            borderLeftColor: "var(--color-primary)",
            color: "var(--color-card-foreground)",
            minHeight: isExpanded ? "auto" : "150px", // Change height to minHeight
          }}
        >
          {/* Colored rectangle on the left edge */}
          <div
            className="absolute left-0 top-0 bottom-0 w-2 rounded-l-lg"
            style={{ backgroundColor: "var(--color-primary)" }}
          ></div>

          {/* New flex container for main content and button */}
          <div className="flex">
            {/* Left side content - takes up 4/5 of space */}
            <div className="w-4/5">
              <div className="flex items-center gap-3 pl-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={`${company} logo`}
                      width={32}
                      height={32}
                      objectFit="contain"
                    />
                  ) : (
                    <span className="text-gray-400">🌟</span>
                  )}
                </div>

                <div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--color-card-foreground)" }}
                  >
                    {role}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {company}
                  </p>
                  <p
                    className="text-xs mt-1"
                    style={{ color: "var(--color-muted-foreground)" }}
                  >
                    {dateRange}
                  </p>
                </div>
              </div>

              {/* Description section */}
              <p
                className={`text-sm mt-4 pl-4 transition-all duration-300 ${
                  isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                }`}
                style={{ color: "var(--color-muted-foreground)" }}
              >
                {description}
              </p>
            </div>

            {/* Right side button - takes up 1/5 of space */}
            <div className="w-1/5 flex items-start justify-end">
              <button
                className="text-sm focus:outline-none hover:opacity-80 transition-opacity"
                style={{
                  color: "var(--color-primary)",
                }}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? "Show less" : "Show more"}
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "England Logistics",
      role: "Data Engineer/ ML Engineer",
      dateRange: "November 2023 - Present",
      logo: elLogo,
      bgColor: "bg-gray-100",
      description:
        "Developing and maintaining data pipelines, implementing machine learning solutions, and optimizing data processes for improved business intelligence.",
    },
    {
      company:
        "Intermountain Intelligence, Industry, and Security Consortium (I3SC)",
      role: "Student Paid Researcher",
      dateRange: "January 2023 - November 2023",
      logo: i3scLogo,
      bgColor: "bg-blue-50",
      description:
        "Conducted research in cybersecurity and artificial intelligence, developed innovative solutions for industry partners, and collaborated on various security projects.",
    },
    {
      company: "Rhone Apparel",
      role: "Full Stack Intern",
      dateRange: "July 2022 - December 2022",
      logo: rhoneLogo,
      bgColor: "bg-red-50",
      description: "",
    },
    {
      company: "Utah Valley University",
      role: "Computer Science Student",
      dateRange: "August 2019 - August 2023",
      logo: uvuLogo, // Use the imported logo
      bgColor: "bg-green-50",
      description: "",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-0.5 border-l-2 border-dotted"
          style={{ borderColor: "var(--color-secondary-foreground)" }}
        ></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              role={exp.role}
              dateRange={exp.dateRange}
              logo={exp.logo}
              // bgColor={exp.bgColor}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;



