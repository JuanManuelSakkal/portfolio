import ProjectCard from "../../components/ProjectCard"
import ProjectsCategorySection from "./ProjectsCategorySection"


const GamesSection = () => {
    return (
        <ProjectsCategorySection
            key="games"
            title="Games"
            projects={[
                <ProjectCard 
                    key={"game1"}
                    title="Arkanoid" 
                    description="Built an arkanoid game using flat JavaScript, CSS, and HTML. With levels and power ups." 
                    technologies={["JavaScript", "CSS", "HTML"]}
                    image="/src/assets/projects/arkanoid/arkanoid-main.png"
                    animation="fade-up"
                    delay={100}
                    link="https://github.com/JuanManuelSakkal/arkanoid-rush"
                />,
                <ProjectCard
                    key={"game2"}
                    title="Dbz Cell Invasion"
                    description="A Dragon Ball game where you fight agains hordes of Cells. As you beat them you gain experience to cast powers and transform up to ssj4"
                    technologies={["JavaScript", "CSS", "HTML"]}
                    image="/src/assets/projects/dbz/dbz-main.png"
                    animation="fade-up"
                    delay={200}
                    link="https://github.com/JuanManuelSakkal/dbz-invasion"
                />/*
                <ProjectCard
                    key={"game3"}
                    title="Tetris"
                    description="Designed and implemented a microservices ecosystem using Java Spring Boot and Docker."
                    technologies={["Java", "Docker", "Spring"]}
                    image="/src/assets/projects/tetris/tetris-main.png"
                    animation="fade-up"
                    delay={100}
                />,
                <ProjectCard
                    key={"game4"}
                    title="Snake"
                    description="Designed and implemented a microservices ecosystem using Java Spring Boot and Docker."
                    technologies={["Java", "Docker", "Spring"]}
                    image="/src/assets/projects/snake/snake-main.png"
                    animation="fade-up"
                    delay={200}
                /> */
            ]}
        />
    )
}

export default GamesSection