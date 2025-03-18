import JobInfo from "../../components/JobInfo"

export const TDI_LOGO = '/src/assets/work/tdi-logo.svg'
const TDISection = () => {
    return (
        <JobInfo 
            logo={<img 
                className="w-full" 
                src={TDI_LOGO} alt="" />}
            title="TDI- Fullstack Developer" 
            description="3 years, from 2018 to 2021"
        > 
            <p>
                TDI was my first experiance officially working as a developer. <br />
                Here the tech stack was a bit rusty so I was usually doing a lot of raw <span className="text-yellow-400">JavaScript</span>, 
                <span className="text-orange-400"> HTML</span>, and <span className="text-blue-400"> CSS</span>. <br />
                The backend was built with <span className="text-indigo-400"> PHP</span>, and there was some heavy coding in <span className="text-red-400"> Oracle</span> (Triggers, functions, and Stored Procedures). <br />
                Mainly they had 2 similar projects that were based on tables and a web interface. <br />
                From where clients did, among other stuff, a lot of CRUD operatios and reports generation.
            </p>
        </JobInfo>
    )
}

export default TDISection