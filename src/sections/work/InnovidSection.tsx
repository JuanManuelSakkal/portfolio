import JobInfo from "../../components/JobInfo"

export const INNOVID_LOGO = '/src/assets/work/innovid-logo.png'
const InnovidSection = () => {
    return (
        <JobInfo 
            logo={<img 
                className="w-full" 
                src={INNOVID_LOGO} alt="" />}
            title="Innovid - Software Engineer" 
            description="4 years, from 2021 to 2024"
        > 
            <p>
                Innovid was my last job, there I learnt to be a better Software Engineer and participated in a lot of projects owning the whole life cycle of the features I developed
                using a wide variety of technologies (like <span className="text-sky-400">React</span>, <span className="text-blue-400">TypeScript</span>, 
                <span className="text-red-400"> Java</span>, <span className="text-fuchsia-400"> Kotlin</span>, <span className="text-indigo-400"> PHP</span>, 
                <span className="text-green-400"> MySQL</span>). All deployed on <span className="text-amber-400"> AWS</span> using a CI pipeline.<br /> 
                It involved working closely with the Product team, and having a holistic vision of the product and its users.
            </p>
            <p>Some key stages when developing a feature were: </p>
            <ul className="my-4 ml-6">
                <li>
                    <span className={"w-2 h-2 bg-fuchsia-600 rounded-full inline-block mr-2"}></span>
                    BDD Review
                </li>
                <li>
                    <span className={"w-2 h-2 bg-fuchsia-600 rounded-full inline-block mr-2"}></span>
                    Design Review 
                </li>
                <li>
                    <span className={"w-2 h-2 bg-fuchsia-600 rounded-full inline-block mr-2"}></span>
                    Code Review 
                </li>
                <li>
                    <span className={"w-2 h-2 bg-fuchsia-600 rounded-full inline-block mr-2"}></span>
                    Release & Monitoring
                </li>
            </ul>
        </JobInfo>
    )
}

export default InnovidSection