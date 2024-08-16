let bnt = document.getElementById('btn-menu');
let menu = document.getElementById('div-menu-lateral');
let overlay = document.getElementById('overlay-menu-lateral');
bnt.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
})