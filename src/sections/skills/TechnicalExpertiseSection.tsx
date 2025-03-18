import { Code, Database, Globe, Server } from "lucide-react"
import SkillCard from "../../components/SkillCard"

const TechnicalExpertiseSection = () => {
    return (
        <section className="py-20 bg-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/30"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-aos="fade-up">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <SkillCard 
                    title="Frontend Development" 
                    icon={<Code className="w-12 h-12 mb-4 text-blue-400" />} 
                    animation="fade-up"
                    delay="100"
                    color="bg-blue-400"
                    items={["React", "TypeScript & JavaScript", "Responsive Design"]}
                />
                <SkillCard 
                    title="Backend Development" 
                    icon={<Server className="w-12 h-12 mb-4 text-purple-400" />} 
                    animation="fade-up"
                    delay="200"
                    color="bg-purple-400"
                    items={["Java", "PHP", "Kotlin"]}
                />
                <SkillCard 
                    title="Data & Storage" 
                    icon={<Database className="w-12 h-12 mb-4 text-green-400" />} 
                    animation="fade-up"
                    delay="300"
                    color="bg-green-400"
                    items={["MySQL", "Redshift", "Oracle"]}
                />
                <SkillCard 
                    title="Architecture" 
                    icon={<Globe className="w-12 h-12 mb-4 text-yellow-400" />} 
                    animation="fade-up"
                    delay="400"
                    color="bg-yellow-400"
                    items={["Microservices", "API Design", "System Design"]}
                />
            </div>
        </div>
      </section>
    )
}

export default TechnicalExpertiseSection