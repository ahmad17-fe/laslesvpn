const toggleMenu = document.querySelector('#toggle_menu')
const closeSidebar = document.querySelector('#close_sidebar')
const sidebar = document.querySelector('#sidebar')

const toggleSidebar = (el, action) => {
  el.addEventListener('click', () => {
    sidebar.classList[action]('active')
  })
}

toggleSidebar(toggleMenu, 'add') // Add class active
toggleSidebar(closeSidebar, 'remove') // Remove class active