import ProjectCard from "../../components/ProjectCard"
import ProjectsCategorySection from "./ProjectsCategorySection"
import gymbroImg from "../../assets/projects/gymbro/gymbro-main.png"
import emudiImg from "../../assets/projects/emudi/emudi-main.png"

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
                    image={gymbroImg}
                    animation="fade-up"
                    delay={100}
                    link=""
                />,
                <ProjectCard 
                    key={"app2"}
                    title="Emudi"
                    description="A platform to learn music and any instrument you choose. This is an ambitious project of mine that is currently in progress" 
                    technologies={["Flutter", "Dart", "Rive"]}
                    image={emudiImg}
                    animation="fade-up"
                    delay={200}
                    link=""
                />
            ]}
        />
    )
}

export default MobileAppsSection