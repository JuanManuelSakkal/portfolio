import { ReactElement } from "react"

interface JobInfoProps {
    logo: ReactElement
    title: string
    description: string
    children: ReactElement[] | ReactElement
}

const JobInfo = (props: JobInfoProps) => {
    return (
        <div className="flex flex-col md:flex-row w-4/5" data-aos="fade-right" data-aos-delay="100">
            <div className="flex pl-10 flex-col w-full md:w-1/3">
                {props.logo}
                <h2 className="text-2xl md:text-4xl font-bold my-4" >{props.title}</h2>
                <p>{props.description}</p>
            </div>
            <div className="flex pl-20 flex-col w-full md:w-2/3 text-lg" data-aos="fade-left" data-aos-delay="200">
                {props.children}
            </div>
        </div>
    )
}

export default JobInfo