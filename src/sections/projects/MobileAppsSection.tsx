import ProjectCard from "../../components/ProjectCard"
import ProjectsCategorySection from "./ProjectsCategorySection"


const MobileAppsSection = () => {
    return (
        <ProjectsCategorySection 
            key={"apps"}
            title="Mobile Apps"
            projects={[
                <ProjectCard 
                    key={"app1"}
                    title="GymBro App"
                    description="A gym app to track your workouts and build routines using a wide list of exercises. With the possibility to share routines with your friends." 
                    technologies={["React Native", "JavaScript", "AWS Amplify"]}
                    image="/src/assets/projects/gymbro/gymbro-main.png"
                    animation="fade-up"
                    delay={100}
                    link=""
                />,
                <ProjectCard 
                    key={"app2"}
                    title="Emudi"
                    description="A platform to learn music and any instrument you choose. This is an ambitious project of mine that is currently in progress" 
                    technologies={["Flutter", "Dart", "Rive"]}
                    image="/src/assets/projects/emudi/emudi-main.png"
                    animation="fade-up"
                    delay={200}
                    link=""
                />
            ]}
        />
    )
}

export default MobileAppsSection