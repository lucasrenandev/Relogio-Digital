
const horas = document.querySelector("#horas")
const minutos = document.querySelector("#minutos")
const segundos = document.querySelector("#segundos")

const relogio = setInterval(function time() {

    let data = new Date()
    let hours = data.getHours()
    let minutes = data.getMinutes()
    let seconds = data.getSeconds()

    if (hours < 10) {
        hours = '0' + hours
    }

    if (minutes < 10) {
        minutes = '0' + minutes
    }

    if (seconds < 10) {
        seconds = '0' + seconds
    }
    
    horas.textContent = hours
    minutos.textContent = minutes
    segundos.textContent = seconds
})