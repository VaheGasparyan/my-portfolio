import ScrollReveal from "scrollreveal";

export const scrollReveal = () => {
    ScrollReveal({
        reset: true,
        distance: '12px',
        duration: 1000,
        delay: 200
    })
    ScrollReveal().reveal('.home-content', {origin: 'top'});
    ScrollReveal().reveal('.home-content h1', {origin: 'right'});
    ScrollReveal().reveal('.home-content p', {origin: 'left'});
    ScrollReveal().reveal('.home-img', {origin: 'top'});
    ScrollReveal().reveal('.about-img', {origin: 'left'});
    ScrollReveal().reveal('.about-content', {origin: 'right'});
    ScrollReveal().reveal('.skills_heading', {origin: 'top'});
    ScrollReveal().reveal('.skills-content .skills-img', {origin: 'left'});
    ScrollReveal().reveal('.skills-content .my-skills', {origin: 'right'});
    ScrollReveal().reveal('.projects_heading', {origin: 'top'});
    ScrollReveal().reveal('.projects-container', {origin: 'top'});
}