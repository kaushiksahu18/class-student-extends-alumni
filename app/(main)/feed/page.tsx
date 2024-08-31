"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Pagination } from "@/components/ui/pagination"

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    batchYear: [],
    stream: [],
    occupation: [],
  })
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const alumni = useMemo(() => {
    return [
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
        lifeLesson: "Work-life balance is important. Make time for yourself and your hobbies outside of work.",
        networkingTips: "Join professional organizations and attend local meetups to expand your network.",
        skills: ["Marketing", "Social Media", "Data Analysis", "Project Management"],
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
        jobSearchTips: "Highlight your transferable skills when applying for jobs outside your field of study.",
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
    ]
  }, [])
  const filteredAlumni = useMemo(() => {
    return alumni
      .filter((alumnus) => {
        const { batchYear, stream, occupation } = filters
        return (
          (batchYear.length === 0 || batchYear.includes(alumnus.batchYear)) &&
          (stream.length === 0 || stream.includes(alumnus.stream)) &&
          (occupation.length === 0 || occupation.includes(alumnus.occupation.title))
        )
      })
      .filter((alumnus) => alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [alumni, filters, searchTerm])
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredAlumni.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage)
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Alumni Profiles</h1>
        <p className="text-muted-foreground">Explore the stories and experiences of our esteemed alumni.</p>
      </div>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex-1">
          <Input
            placeholder="Search alumni..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Batch Year
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuCheckboxItem
                checked={filters.batchYear.includes(2015)}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    batchYear: checked ? [...prev.batchYear, 2015] : prev.batchYear.filter((year) => year !== 2015),
                  }))
                }
              >
                2015
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.batchYear.includes(2018)}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    batchYear: checked ? [...prev.batchYear, 2018] : prev.batchYear.filter((year) => year !== 2018),
                  }))
                }
              >
                2018
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.batchYear.includes(2020)}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    batchYear: checked ? [...prev.batchYear, 2020] : prev.batchYear.filter((year) => year !== 2020),
                  }))
                }
              >
                2020
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Stream
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuCheckboxItem
                checked={filters.stream.includes("Computer Science")}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    stream: checked
                      ? [...prev.stream, "Computer Science"]
                      : prev.stream.filter((s) => s !== "Computer Science"),
                  }))
                }
              >
                Computer Science
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.stream.includes("Business Administration")}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    stream: checked
                      ? [...prev.stream, "Business Administration"]
                      : prev.stream.filter((s) => s !== "Business Administration"),
                  }))
                }
              >
                Business Administration
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.stream.includes("Mechanical Engineering")}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    stream: checked
                      ? [...prev.stream, "Mechanical Engineering"]
                      : prev.stream.filter((s) => s !== "Mechanical Engineering"),
                  }))
                }
              >
                Mechanical Engineering
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <FilterIcon className="mr-2 h-4 w-4" />
                Occupation
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuCheckboxItem
                checked={filters.occupation.includes("Software Engineer")}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    occupation: checked
                      ? [...prev.occupation, "Software Engineer"]
                      : prev.occupation.filter((o) => o !== "Software Engineer"),
                  }))
                }
              >
                Software Engineer
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.occupation.includes("Marketing Manager")}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    occupation: checked
                      ? [...prev.occupation, "Marketing Manager"]
                      : prev.occupation.filter((o) => o !== "Marketing Manager"),
                  }))
                }
              >
                Marketing Manager
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={filters.occupation.includes("Product Designer")}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    occupation: checked
                      ? [...prev.occupation, "Product Designer"]
                      : prev.occupation.filter((o) => o !== "Product Designer"),
                  }))
                }
              >
                Product Designer
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8">
        {currentItems.map((alumnus) => (
          <Card key={alumnus.id} className="bg-background">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" alt={alumnus.name} />
                  <AvatarFallback>{alumnus.name.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{alumnus.name}</h3>
                  <p className="text-muted-foreground">
                    Batch {alumnus.batchYear} | {alumnus.stream}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <h4 className="text-sm font-semibold">Current Occupation</h4>
                  <p>
                    {alumnus.occupation.title} | {alumnus.occupation.industry}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Career Advice</h4>
                  <p>{alumnus.careerAdvice}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Job Search Tips</h4>
                  <p>{alumnus.jobSearchTips}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Life Lessons</h4>
                  <p>{alumnus.lifeLesson}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Networking Tips</h4>
                  <p>{alumnus.networkingTips}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {alumnus.skills.map((skill, index) => (
                      <Badge key={index}>{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Academic Info</h4>
                  <p>
                    {alumnus.academicInfo.degree} | GPA: {alumnus.academicInfo.gpa}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Additional Info</h4>
                  <div className="grid gap-2">
                    <div>
                      <h5 className="font-medium">Awards</h5>
                      <ul className="list-disc pl-4">
                        {alumnus.additionalInfo.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium">Certifications</h5>
                      <ul className="list-disc pl-4">
                        {alumnus.additionalInfo.certifications.map((cert, index) => (
                          <li key={index}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Campus Involvements</h4>
                  <ul className="list-disc pl-4">
                    {alumnus.campusInvolvements.map((involvement, index) => (
                      <li key={index}>{involvement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  )
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}