import ScrollReveal from "scrollreveal";

export const scrollReveal = () => {
    ScrollReveal().reveal('.home-content', {duration: 1500, distance: '-100px', easing: 'ease',});
    ScrollReveal().reveal('.home-img', {distance: '100px', duration: 1500, easing: 'ease'});
    ScrollReveal().reveal('.about-img', {duration: 1500, distance: '-100px', easing: 'ease'});
    ScrollReveal().reveal('.about-content', {duration: 1500, distance: '100px', easing: 'ease'});
    ScrollReveal().reveal('.skills_heading', {duration: 1500, distance: '-100px', easing: 'ease'});
    ScrollReveal().reveal('.skills-content', {duration: 1500, distance: '100px', easing: 'ease'});
    ScrollReveal().reveal('.projects_heading', {duration: 1500, distance: '-100px', easing: 'ease'});
    ScrollReveal().reveal('.projects-container', {duration: 1500, distance: '100px', easing: 'ease'});
}