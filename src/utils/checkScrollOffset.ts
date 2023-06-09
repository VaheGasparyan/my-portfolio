export const checkScrollOffset = (home: HTMLDivElement, about: HTMLDivElement, skills: HTMLDivElement, projects: HTMLDivElement) => {
    const homeHeader = document.querySelector('.headerHome');
    const aboutHeader = document.querySelector('.headerAbout');
    const skillsHeader = document.querySelector('.headerSkills');
    const projectsHeader = document.querySelector('.headerProjects');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        homeHeader!.classList.toggle('active', top >= home.offsetTop - 150 && top < home.offsetHeight + home.offsetTop - 130);
        aboutHeader!.classList.toggle('active', top >= about.offsetTop - 150 && top < about.offsetHeight + about.offsetTop - 125);
        skillsHeader!.classList.toggle('active', top >= skills.offsetTop - 150 && top < skills.offsetHeight + skills.offsetTop - 120);
        projectsHeader!.classList.toggle('active', top >= projects.offsetTop - 150 && top < projects.offsetHeight + projects.offsetTop - 120);
        header!.classList.toggle('sticky', top > 100);
    })
}