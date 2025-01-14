import { Metadata } from "next"

import { resume } from "@/types/resume"
import JobSection from "@/components/job-section"
import SectionHeading from "@/components/section-heading"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Know more about my skills and how we can work together to build something amazing.",
}

export default async function Work() {
  return (
    <main className="container mx-auto my-14 text-sm lg:w-10/12 xl:w-3/5 2xl:w-1/2">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="">LANCE AREVALO</span>
          <div className="flex flex-row justify-between ">
            <span>SOFTWARE DEVELOPER</span>
            <div className="flex flex-row items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>PHILIPPINES</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Now
          </h4>
          {resume.now.map((item) => (
            <JobSection key={item.company} info={item} />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Experience
          </h4>
          {resume.experiences
            .sort((a, b) => parseInt(b.duration) - parseInt(a.duration))
            .map((item) => (
              <JobSection key={item.company} info={item} />
            ))}
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Achievements & Awards
          </h4>
          <SectionHeading
            left={"2023"}
            right={"Graduated w/ Magna Cum Laude"}
          />
          <SectionHeading
            left={"2020"}
            right={
              "Runner Up at 14th National Business Idea and Development (BIDA)"
            }
            link={"https://www.philippinechamber.com/"}
          />
          <SectionHeading left={"2019-2023"} right={"Dean's Lister"} />
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Contact
          </h4>
          <SectionHeading
            left={"Email"}
            right={"hi@arevalolance.com"}
            link="mailto:hi@arevalolance.com"
          />
          <SectionHeading
            left={"LinkedIn"}
            right={"arevalolance"}
            link="https://linkedin.com/in/arevalolance"
          />
          <SectionHeading
            left={"Read.cv"}
            right={"arevalolance"}
            link="https://read.cv/arevalolance"
          />
        </div>

        {/*
        <div className="flex flex-col gap-4">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            Background
          </h4>
          <p className="group text-justify text-black/80">
            Hi, I&apos;m Lance, a Software Developer with a passion in building
            innovative and fun things. With my interests in the web, I&apos;ve
            built several{" "}
            <Link className="text-blue-600 underline" href={"/projects"}>
              projects
            </Link>{" "}
            focusing on both frontend and backend on Social Networking, Data
            Visualization, Process Pipelines, and many more.
            <br />
            <br />
            Beyond my professional pursuits, I&apos;m an avid film lover.
            Exploring the art of films fuels my creativity, influencing my
            design choices with a discerning eye for composition and the power
            of visual communication.
            <br />
            <br />
            I&apos;m excited to collaborate on meaningful projects and
            contribute my expertise. If you&apos;d like to discuss potential
            opportunities or learn more about my work, please don&apos;t
            hesitate to contact me through{" "}
            <Link
              className="text-blue-600 underline"
              href={"mailto:hi@arevalolance.com"}
            >
              email
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <DownloadResume />
          <span className="text-center text-gray-500">
            (Click &apos;Download PDF&apos; for a more detailed resume)
          </span>
        </div>*/}
      </div>
    </main>
  )
}
