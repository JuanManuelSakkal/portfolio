import JobInfo from "../../components/JobInfo"
import ngLogo from "/src/assets/work/ng-logo.png"

const NGSection = () => {
    return (
        <JobInfo 
            logo={<img 
                className="max-w-[250px] w-full" 
                src={ngLogo} alt="" />}
            title="NG - IT Support" 
            description="1 year, from 2017 to 2018"
        > 
            <p>
                NG was my first job, it was an internship where I worked on an IT Support role. <br />
                It was a real challenge since I didn't have any previous experience, and I was the only IT guy on the whole company! <br />
                This meant everything related to <span className="text-fuchsia-400">computers</span> was my responsibility. <br />
                 From fixing a notebook, or connecting a printer, to handling the servers they had on the office. <br />
                 One day my boss (the head of HR, since there was no IT brand), asked me to build a <span className="text-green-400">system for HR</span> to manage the employees applications
                 like days off, vacations, days of study, etc <br />
                 So thats when I started investigating web developement and managed to build a web, hosted on the company servers, using PHP, JavaScript and MySQL
            </p>
        </JobInfo>
    )
}

export default NGSection