import ProjectCard from "../../components/ProjectCard"
import ProjectsCategorySection from "./ProjectsCategorySection"
import ecosystemImg from "/src/assets/projects/ecosystem/ecosystem-main.png"
import antColonyImg from "/src/assets/projects/ant-colony/ant-colony-main.png"


const SimulationsSection = () => {
    return (
        <ProjectsCategorySection
            key={"simulations"} 
            title="Simulations"
            projects={[
                <ProjectCard
                    key={"sim1"} 
                    title="Ant Colony Simulation" 
                    description="A simulation of an ant colony, where the ants spawn at their nest, search the map for food spots and then carry it back to their home." 
                    technologies={["Unity", "C#"]}
                    image={antColonyImg}
                    animation="fade-up"
                    delay={100}
                    link="https://github.com/JuanManuelSakkal/AntColony2D"
                />,
                <ProjectCard 
                    key={"sim2"}
                    title="Ecosystem 3D" 
                    description="An ambitious idea of creating a self-sustaining ecosystem, with different species and many features like hunger, breeding, hunting, fear, etc." 
                    technologies={["Unity", "C#"]}
                    image={ecosystemImg}
                    animation="fade-up"
                    delay={200}
                    link="https://github.com/JuanManuelSakkal/EcosystemSim3D"
                />
            ]}
        />
    )
}

export default SimulationsSection