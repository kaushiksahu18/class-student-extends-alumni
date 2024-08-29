-- AlterTable
ALTER TABLE "User" ADD COLUMN     "is_alumni" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Alumni" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "batch_year" INTEGER NOT NULL,
    "stream" TEXT NOT NULL,

    CONSTRAINT "Alumni_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Occupation" (
    "id" SERIAL NOT NULL,
    "current_occupation" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "career_advice" TEXT,
    "job_search_tips" TEXT,
    "alumni_id" INTEGER NOT NULL,

    CONSTRAINT "Occupation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlumniPersonalInfo" (
    "id" SERIAL NOT NULL,
    "life_lessons" TEXT,
    "networking_tips" TEXT,
    "challenges_faced" TEXT,
    "personal_growth" TEXT,
    "hobbies_interests" TEXT,
    "community_involvement" TEXT,
    "student_suggestions" TEXT,
    "contact_info" TEXT,
    "alumni_id" INTEGER NOT NULL,

    CONSTRAINT "AlumniPersonalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "skills_acquired" TEXT NOT NULL,
    "recommended_tools" TEXT,
    "certifications" TEXT,
    "alumni_id" INTEGER NOT NULL,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcademicInfo" (
    "id" SERIAL NOT NULL,
    "memorable_experience" TEXT,
    "academic_advice" TEXT,
    "alumni_id" INTEGER NOT NULL,

    CONSTRAINT "AcademicInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdditionalInfo" (
    "id" SERIAL NOT NULL,
    "resume_url" TEXT,
    "portfolio_url" TEXT,
    "github_url" TEXT,
    "linkedin_profile" TEXT,
    "alumni_id" INTEGER NOT NULL,

    CONSTRAINT "AdditionalInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampusInvolvement" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "organization_or_club" TEXT NOT NULL,
    "alumni_id" INTEGER NOT NULL,

    CONSTRAINT "CampusInvolvement_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alumni_user_id_key" ON "Alumni"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Occupation_alumni_id_key" ON "Occupation"("alumni_id");

-- CreateIndex
CREATE UNIQUE INDEX "AlumniPersonalInfo_alumni_id_key" ON "AlumniPersonalInfo"("alumni_id");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_alumni_id_key" ON "Skill"("alumni_id");

-- CreateIndex
CREATE UNIQUE INDEX "AcademicInfo_alumni_id_key" ON "AcademicInfo"("alumni_id");

-- CreateIndex
CREATE UNIQUE INDEX "AdditionalInfo_alumni_id_key" ON "AdditionalInfo"("alumni_id");

-- CreateIndex
CREATE UNIQUE INDEX "CampusInvolvement_alumni_id_key" ON "CampusInvolvement"("alumni_id");

-- AddForeignKey
ALTER TABLE "Alumni" ADD CONSTRAINT "Alumni_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Occupation" ADD CONSTRAINT "Occupation_alumni_id_fkey" FOREIGN KEY ("alumni_id") REFERENCES "Alumni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlumniPersonalInfo" ADD CONSTRAINT "AlumniPersonalInfo_alumni_id_fkey" FOREIGN KEY ("alumni_id") REFERENCES "Alumni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_alumni_id_fkey" FOREIGN KEY ("alumni_id") REFERENCES "Alumni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcademicInfo" ADD CONSTRAINT "AcademicInfo_alumni_id_fkey" FOREIGN KEY ("alumni_id") REFERENCES "Alumni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdditionalInfo" ADD CONSTRAINT "AdditionalInfo_alumni_id_fkey" FOREIGN KEY ("alumni_id") REFERENCES "Alumni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CampusInvolvement" ADD CONSTRAINT "CampusInvolvement_alumni_id_fkey" FOREIGN KEY ("alumni_id") REFERENCES "Alumni"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
