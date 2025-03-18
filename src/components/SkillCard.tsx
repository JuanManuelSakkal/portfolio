import { ReactElement } from "react"


interface SkillCardProps {
    title: string,
    icon: ReactElement
    animation: string
    delay: string
    color: string
    items: string[]

}

const SkillCard = (props: SkillCardProps) => {
    return (
        <div className="" data-aos={props.animation} data-aos-delay={props.delay}>
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            {props.icon}
            <h3 className="text-xl font-semibold mb-3">{props.title}</h3>
            <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                <span className={"w-2 h-2 " + props.color + " rounded-full"}></span>
                {props.items[0]}
                </li>
                <li className="flex items-center gap-2">
                <span className={"w-2 h-2 " + props.color + " rounded-full"}></span>
                {props.items[1]}
                </li>
                <li className="flex items-center gap-2">
                <span className={"w-2 h-2 " + props.color + " rounded-full"}></span>
                {props.items[2]}
                </li>
            </ul>
            </div>
        </div>
    )
}

export default SkillCard