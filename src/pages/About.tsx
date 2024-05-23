

export default function About() {
    return (
        <div className="overflow-auto" style={{ paddingTop: '150px', paddingLeft: 10, paddingRight: 10, paddingBottom: 10, height: '100vh', backgroundColor: '#999491' }}>
            <h2>About Me</h2>
            <div className="contact-info">
                <p><strong>Name:</strong> Ji Woong Park (Eric Park)</p>
                <p><strong>Email:</strong> jiwoongpark97@gmail.com</p>
                <p><strong>Phone:</strong> 765-767-3217</p>
                <p>
                    <strong>Links:</strong>
                    &nbsp;<a href="https://www.github.com/qkrwldnd97" target="_blank">GitHub</a> |
                    &nbsp;<a href="https://www.linkedin.com/in/ji-woong-park/" target="_blank">LinkedIn</a>
                </p>
            </div>
            <br></br>
            <h3>Skills</h3>
            <ul>
                <li>Languages: Java (11+), Python 3, JavaScript (ES6), TypeScript, C#, Kotlin, C, C++, HTML5/CSS</li>
                <li>Key Skills: Django, .NET framework, Git, React JS, Spring framework/boot, OOP, Problem-solving, Node JS, GitHub</li>
                <li>Leadership: Republic of Korea Army, Sergeant, FDC Squad Leader</li>
            </ul>
            <br></br>
            <h3>Professional Experience</h3>
            <div className="experience">
                <h5>Coway USA, Inc. Los Angeles, CA</h5>
                <p><strong>Software Developer | 07/2023 - Present</strong></p>
                <ul>
                    <li>Spearheaded full-stack development of web applications, ensuring seamless functionality and user experiences across frontend and backend components</li>
                    <li>Utilized Domain-Driven Design (DDD) and Object-Oriented Programming (OOP) principles for structured, modular organization of complex business logic</li>
                    <li>Engineered a .NET Microservice to enhance system scalability and modularity, focusing on financial transactions</li>
                    <li>Orchestrated maintenance of Android applications, optimizing code readability and development speed through refactoring and migration</li>
                    <li>Established server monitoring and logging system using Elasticsearch to improve visibility in server downtimes</li>
                </ul>
                <h4>Fasoo Inc. Seoul, Korea</h4>
                <p><strong>Software Developer Intern | 06/2022 - 08/2022</strong></p>
                <ul>
                    <li>Collaborated with a team to develop a comprehensive testing software solution for Static Application Security Testing (SAST)</li>
                    <li>Implemented agile development and scrum meetings to ensure product quality</li>
                    <li>Designed and built automated web scraping software to streamline data acquisition for Python project repositories</li>
                    <li>Developed an execution time prediction model using machine learning algorithms to enhance efficiency in SAST processes</li>
                </ul>
            </div>
            <br></br>
            <h3>Education</h3>
            <div className="education">
                <h4>Purdue University West Lafayette, IN</h4>
                <p><strong>Bachelor in Computer Science (Software Engineering) | Graduated May 2023</strong></p>
            </div>
            <br></br>
            {/* <h3>Project Experience</h3> */}
            {/* <div className="projects">
                <h4>Environmental Issue Monitoring Application (Argus) | 08/2022 - 12/2022</h4>
                <ul>
                    <li>Developed Argus, an intuitive environmental monitoring application using React JS for the frontend and Django for the backend, hosted securely on AWS servers</li>
                    <li>Integrated MySQL database for storing and managing environmental data</li>
                    <li>Implemented machine learning predictions for environmental events</li>
                    <li>Provided features such as real-time and historical data visualization, earthquake activity monitoring, and email notifications for user-selected regions</li>
                </ul>
            </div> */}
        </div>
    )
}