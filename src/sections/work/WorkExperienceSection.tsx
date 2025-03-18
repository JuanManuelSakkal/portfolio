import { useEffect, useState } from "react"
import InnovidSection from "./InnovidSection"
import TDISection from "./TDISection"
import NGSection from "./NGSection"
import { INNOVID_LOGO } from "./InnovidSection"
import { TDI_LOGO } from "./TDISection"
import { NG_LOGO } from "./NGSection"

enum Job {
    INNOVID = "Innovid",
    TDI = "TDI",
    NG = "NG"
}

const WorkExperienceSection = () => {
    const [selectedJob, setSelectedJob] = useState(Job.INNOVID)
    const [jobSection, setJobSection] = useState(<InnovidSection />)

    const jobs = [Job.INNOVID, Job.TDI, Job.NG]
    const logos = [INNOVID_LOGO, TDI_LOGO, NG_LOGO]

    useEffect(() => {
        switch (selectedJob) {
            case Job.INNOVID:
                setJobSection(<InnovidSection />)
                break;
            case Job.TDI:
                setJobSection(<TDISection />)
                break;
            case Job.NG:
                setJobSection(<NGSection />)
                break;
        }
    }, [selectedJob])
    
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 via-black to-purple-950 relative">
            <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center" data-aos="fade-up">Work Experience</h1>
            <div className="flex flex-row min-h-[300px]">
                {jobSection}
                <div className="flex md:w-1/5 justify-end pr-20 select-none">
                    <ul className="flex flex-col justify-between" data-aos="fade-right" data-aos-delay={300}>
                        {jobs.map((job, index) => (
                            <li key={index} 
                                className={(selectedJob === job ? "" : "grayscale ") + "hover:grayscale-0 transition duration-300 cursor-pointer"} 
                                onClick={() => setSelectedJob(job)}>
                                <img src={logos[index]} className="max-h-[25px] " alt={job.toString()} 
                                 />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default WorkExperienceSection