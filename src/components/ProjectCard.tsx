import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
    animation: string
    delay: number
    image: string
    title: string
    description: string
    technologies: string[]
    link: string
}

const ProjectCard = (props: ProjectCardProps) => {
    type TechType = "JavaScript" | "CSS" | "HTML" | "React Native" | "Flutter" | "Dart" | "Unity" | "C#" | "Rive" | "AWS Amplify";

    const techToClassMap = {
        "JavaScript": "bg-yellow-500/20 text-yellow-300",
        "CSS": "bg-blue-500/20 text-blue-300",
        "HTML": "bg-orange-500/20 text-orange-300",
        "React Native": "bg-blue-500/20 text-blue-300",
        "Flutter": "bg-indigo-500/20 text-indigo-300",
        "Dart": "bg-blue-500/20 text-blue-300",
        "Unity": "bg-gray-900/80 text-gray-300",
        "C#": "bg-violet-500/20 text-violet-300",
        "Rive": "bg-purple-500/20 text-purple-300",
        "AWS Amplify": "bg-red-500/20 text-red-300"
    }

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl" data-aos={props.animation} data-aos-delay={props.delay}>
            <img
                src={props.image}
                alt="Project 1"
                className="w-full h-48 object-cover transform hover:scale-125 transition-transform duration-300 relative z-1"
            />
            <div className="p-6 relative bg-gray-800 z-2">
                <h3 className="text-xl font-semibold mb-2">{props.title}</h3>
                <p className="text-gray-300 mb-4">
                    {props.description}
                </p>
                <div className="flex gap-2">
                    {
                        props.technologies.map((tech, index) => (
                            <span key={index} className={"px-3 py-1 " + techToClassMap[tech as TechType] + " rounded-full text-sm"}>{tech}</span>
                        ))
                    }
                </div>
                {
                    props.link === "" ? 
                    <span className="mt-4 inline-flex items-center text-gray-400">
                        Currently not available <ExternalLink size={16} className="ml-1 disabled" />
                    </span> :
                    <a href={props.link} target="_blank" className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300">
                    View Project <ExternalLink size={16} className="ml-1" />
                    </a>
                }
            </div>
        </div>
    )
}

export default ProjectCard