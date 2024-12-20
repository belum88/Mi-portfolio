import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
    <div class="header">
        <h2>${project.title}</h2>
        <div>
            <a href=${project.github} target="_blank">
                <img src="/github.png" alt="GitHub Icon" />
            </a>
            <a href=${project.link} target="_blank">
                <img src="/link.png" alt="Link icon" />
            </a>
        </div>
    </div>
    <img src=${project.image} alt=${project.title}/>
    <div class="detail">
        <p class="description">${project.description}</p>
        <p class="tech">${project.tech.join(" - ")}</p>
    </div>
</div>
`;