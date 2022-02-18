module.exports = {
    open() {
        document.getElementById('solution-with-overlay').classList.toggle('open')
        document.getElementById('openOverlayButton').disabled = true
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'inline'
    },

    close() {
        document.getElementById('solution-with-overlay').classList.toggle('open')
        document.getElementById('openOverlayButton').disabled = false
        const overlay = document.getElementById('overlay')
        overlay.style.display = 'none'
    }
}