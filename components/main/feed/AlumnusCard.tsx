import { Alumnus } from "@/data/Alumnus";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function AlumnusCard({ alumnus }: { alumnus: Alumnus }) {
    return (
      <Card className="bg-background">
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt={alumnus.name} />
              <AvatarFallback>
                {alumnus.name.charAt(0).toUpperCase()}
              </AvatarFallback>
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
    );
  }

  export default AlumnusCard;