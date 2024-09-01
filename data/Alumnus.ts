export interface Alumnus {
  id: number;
  name: string;
  batchYear: number;
  stream: string;
  occupation: {
    title: string;
    industry: string;
  };
  careerAdvice: string;
  jobSearchTips: string;
  lifeLesson: string;
  networkingTips: string;
  skills: string[];
  academicInfo: {
    degree: string;
    gpa: number;
  };
  additionalInfo: {
    awards: string[];
    certifications: string[];
  };
  campusInvolvements: string[];
}

export const alumniData: Alumnus[] = [
  {
    id: 1,
    name: "John Doe",
    batchYear: 2015,
    stream: "Computer Science",
    occupation: {
      title: "Software Engineer",
      industry: "Technology",
    },
    careerAdvice:
      "Networking is key in the tech industry. Don't be afraid to reach out to people and build connections.",
    jobSearchTips:
      "Tailor your resume and cover letter to each job application. Highlight your relevant skills and experience.",
    lifeLesson:
      "Embrace failure as an opportunity to learn and grow. Don't be afraid to take risks and try new things.",
    networkingTips:
      "Attend industry events and conferences to meet new people. Follow up with connections on LinkedIn.",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    academicInfo: {
      degree: "Bachelor of Science",
      gpa: 3.8,
    },
    additionalInfo: {
      awards: ["Dean's List", "Hackathon Winner"],
      certifications: ["AWS Certified Developer"],
    },
    campusInvolvements: ["Student Council", "Coding Club"],
  },
  {
    id: 2,
    name: "Jane Smith",
    batchYear: 2018,
    stream: "Business Administration",
    occupation: {
      title: "Marketing Manager",
      industry: "Retail",
    },
    careerAdvice:
      "Don't be afraid to take on new challenges and step out of your comfort zone. That's where the real growth happens.",
    jobSearchTips:
      "Leverage your network and reach out to people in your desired industry. Informational interviews can be very valuable.",
    lifeLesson:
      "Work-life balance is important. Make time for yourself and your hobbies outside of work.",
    networkingTips:
      "Join professional organizations and attend local meetups to expand your network.",
    skills: [
      "Marketing",
      "Social Media",
      "Data Analysis",
      "Project Management",
    ],
    academicInfo: {
      degree: "Bachelor of Business Administration",
      gpa: 3.6,
    },
    additionalInfo: {
      awards: ["Intern of the Year"],
      certifications: ["Google Analytics Individual Qualification"],
    },
    campusInvolvements: ["Marketing Club", "Entrepreneurship Club"],
  },
  {
    id: 3,
    name: "Michael Johnson",
    batchYear: 2020,
    stream: "Mechanical Engineering",
    occupation: {
      title: "Product Designer",
      industry: "Manufacturing",
    },
    careerAdvice:
      "Don't be afraid to explore different career paths. Your degree doesn't have to define your future.",
    jobSearchTips:
      "Highlight your transferable skills when applying for jobs outside your field of study.",
    lifeLesson:
      "Continuous learning is essential. Invest time in developing new skills and staying up-to-date with industry trends.",
    networkingTips:
      "Reach out to alumni from your university who are working in your desired field. They can provide valuable insights and connections.",
    skills: ["CAD", "Product Design", "Prototyping", "Project Management"],
    academicInfo: {
      degree: "Bachelor of Science in Mechanical Engineering",
      gpa: 3.9,
    },
    additionalInfo: {
      awards: ["Capstone Project Award"],
      certifications: ["SOLIDWORKS Certified Associate"],
    },
    campusInvolvements: ["Design Club", "Robotics Club"],
  },
  {
    id: 4,
    name: "Peter Smith",
    batchYear: 2015,
    stream: "Computer Science",
    occupation: {
      title: "Software Engineer",
      industry: "Technology",
    },
    careerAdvice:
      "Networking is key in the tech industry. Don't be afraid to reach out to people and build connections.",
    jobSearchTips:
      "Tailor your resume and cover letter to each job application. Highlight your relevant skills and experience.",
    lifeLesson:
      "Embrace failure as an opportunity to learn and grow. Don't be afraid to take risks and try new things.",
    networkingTips:
      "Attend industry events and conferences to meet new people. Follow up with connections on LinkedIn.",
    skills: ["JavaScript", "React", "Node.js", "SQL"],
    academicInfo: {
      degree: "Bachelor of Science",
      gpa: 3.8,
    },
    additionalInfo: {
      awards: ["Dean's List", "Hackathon Winner"],
      certifications: ["AWS Certified Developer"],
    },
    campusInvolvements: ["Student Council", "Coding Club"],
  },
  {
    id: 5,
    name: "Anna Johnson",
    batchYear: 2018,
    stream: "Business Administration",
    occupation: {
      title: "Marketing Manager",
      industry: "Retail",
    },
    careerAdvice:
      "Don't be afraid to take on new challenges and step out of your comfort zone. That's where the real growth happens.",
    jobSearchTips:
      "Leverage your network and reach out to people in your desired industry. Informational interviews can be very valuable.",
    lifeLesson:
      "Work-life balance is important. Make time for yourself and your hobbies outside of work.",
    networkingTips:
      "Join professional organizations and attend local meetups to expand your network.",
    skills: [
      "Marketing",
      "Social Media",
      "Data Analysis",
      "Project Management",
    ],
    academicInfo: {
      degree: "Bachelor of Business Administration",
      gpa: 3.6,
    },
    additionalInfo: {
      awards: ["Intern of the Year"],
      certifications: ["Google Analytics Individual Qualification"],
    },
    campusInvolvements: ["Marketing Club", "Entrepreneurship Club"],
  },
];
