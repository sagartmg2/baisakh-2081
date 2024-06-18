import Project from "./Project"

let heading = "My Projects"

function Projects() {
    return (
        <>
            <h1>{heading}</h1>
            <Project title="react" price={1000} date={2024} />
            <Project title="NODE" price={1000} date={2024} />
            <Project title="git" price={1000} date={2024} />
        </>
    )
}

export default Projects
