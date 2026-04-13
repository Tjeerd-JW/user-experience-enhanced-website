const url = window.location
console.log(window.location)
const form = document.querySelector('.comments-section form')
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('success') === 'true') {
        form.classList.add('hidden')
        document.querySelector('#pop-up h3').textContent = "Reactie succesvol geplaatst!"
        document.querySelector('#pop-up p').textContent = "Bedankt voor je deelname! je kan deze melding sluiten."
        document.querySelector('#pop-up').classList.remove('hidden')
    } else if (params.get('success') === 'false') {
        document.querySelector('#pop-up h3').textContent = "Er ging iets mis"
        document.querySelector('#pop-up p').textContent = "probeer het opnieuw"
        document.querySelector('#pop-up').classList.remove('hidden')
    }
    setTimeout(() => {
        // closePopup()
        console.log("nu zou hij sluiten normaal")
    }, 5000);
})


function closePopup() {
    // sluit de popup en haal de success uit de url
    const url = new URL(window.location)
    url.searchParams.delete("success")
    window.history.replaceState({}, '', url)
    document.querySelector('#pop-up').classList.add('hidden')
}