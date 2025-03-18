import { Cloud, Cpu, Shield } from "lucide-react"
import SkillCard from "../../components/SkillCard"

const InfrastructureSection = () => {
    return (
        <section className="py-20 bg-gray-800 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-900/30"></div>
            <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">Infrastructure & DevOps</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <SkillCard
                icon={<Cloud className="w-12 h-12 mb-4 text-blue-400" />}
                title="Cloud Infrastructure"
                items={[
                    "AWS Services & Architecture",
                    "Serverless Computing",
                    "Cloud Security Best Practices",
                ]}
                color="bg-blue-400"
                animation="zoom-in"
                delay="100"
                />
                <SkillCard
                icon={<Cpu className="w-12 h-12 mb-4 text-purple-400" />}
                title="Containerization"
                items={[
                    "Docker",
                    "Kubernetes",
                    "ECS",
                ]}
                color="bg-purple-400"
                animation="zoom-in"
                delay="200"
                />
                <SkillCard
                icon={<Shield className="w-12 h-12 mb-4 text-green-400" />}
                title="DevOps"
                items={[
                    "CI/CD Pipeline",
                    "Agile Methodologies",
                    "Version Control (Git)",
                ]}
                color="bg-green-400"
                animation="zoom-in"
                delay="300"
                />
            </div>
            </div>
        </section>
    )
}

export default InfrastructureSection