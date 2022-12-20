const toggle = document.querySelector('.toggle')
const menu = document.querySelector('.menu')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('animation')
  menu.classList.toggle('show-menu')
})

window.addEventListener('resize', () => {
  if (menu.classList.contains('show-menu')) {
    menu.classList.remove('show-menu')
    toggle.classList.remove('animation')
  }
})