
const menu = document.querySelector('nav details')
const body = document.querySelector('body')

menu.addEventListener("toggle", function () {
    if (menu.open) {
        console.log('open')
    } else {
        console.log('close')
    }

})

// buiten het menu klikken sluit het menu
document.addEventListener("click", (event) => {
    if (!menu.open) return

    if (!menu.contains(event.target)) {
        menu.removeAttribute('open')

    }

})

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        menu.removeAttribute('open')
    }

})


