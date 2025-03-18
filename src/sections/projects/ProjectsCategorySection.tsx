import { ReactElement } from "react";

interface ProjectsCategorySectionProps {
    title: string;
    projects: ReactElement[];    
}

const ProjectsCategorySection = (props: ProjectsCategorySectionProps) => {
    return (
        <div key={props.title} className="embla__slide--inner" data-aos="fade-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">{props.title}</h3>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {props.projects}
            </div>
        </div>
    )
}

export default ProjectsCategorySection