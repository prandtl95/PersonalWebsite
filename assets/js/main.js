/*!
=========================================================
* Javascript page

Burger menu from: codeSTACKr; https://www.youtube.com/watch?v=dIyVTjJAkLw
and: Coding- kurz und knapp; https://www.youtube.com/watch?v=19RwQbD0fSg
=========================================================

*/

// burger menu
const menuBtn = document.querySelector('.menu-btn');
const listcontainer = document.getElementsByClassName("list-container")[0]
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        listcontainer.classList.toggle("active");
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        listcontainer.classList.remove("active");
        menuOpen = false;
    }
});