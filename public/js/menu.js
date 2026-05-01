
const menu = document.querySelector('nav details')
const body = document.querySelector('body')
const content = document.querySelector('body > *:not(header)')
const navBar = document.querySelectorAll('header ul:not(#hamburger-list)')

// scrolllock & tablock
menu.addEventListener("toggle", function () {
    if (menu.open) {
        body.style.overflow = 'hidden'
        content.inert = true
        navBar.inert = true
        navBar.forEach(link => {
            link.inert = true
        });
        menu.inert - false
    } else {
        body.style.overflow = ''
        content.inert = false
        navBar.forEach(link => {
            link.inert = false
        });
        menu.inert - true
    }
})

// buiten het menu klikken sluit het menu
document.addEventListener("click", (event) => {
    if (!menu.open) return

    if (!menu.contains(event.target)) {
        menu.removeAttribute('open')

    }

})

// escape klikken sluit het menu
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        menu.removeAttribute('open')
    }

})


