
const menu = document.querySelector('nav details')
const body = document.querySelector('body')


menu.addEventListener("toggle", function () {
    if (menu.open) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = ''

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


