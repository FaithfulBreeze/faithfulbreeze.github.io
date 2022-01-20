window.onload = function() {

document.querySelector('#start').addEventListener('click', startContagem)
document.querySelector('#stop').addEventListener('click', stopContagem)
document.querySelector('#reset').addEventListener('click', resetContagem)

const outmin = document.querySelector('#minutos')
const outsec = document.querySelector('#segundos')
const outmsec = document.querySelector('#milisegundos')
let running = false

var min = 00
var sec = 00
var msec = 00
var tempo = undefined

function startContagem(){
    if(running == false){
        running = true
        tempo = setInterval(function(){
            if(outmsec.innerHTML < 9){
                outmsec.innerHTML = `0${msec}`
            }else{
                outmsec.innerHTML = `${msec}`
            }
    
            if(outsec.innerHTML <= 9){
                outsec.innerHTML = `0${sec}`
            }else{
                outsec.innerHTML = `${sec}`
            }
    
            if(outmin.innerHTML <= 9){
                outmin.innerHTML = `0${min}`
            }else{
                outmin.innerHTML = `${min}`
            }
    
            if(msec > 99){
                outmsec.innerHTML = "00"
                msec = 00
                sec++
            }else if(sec > 59){
                outsec.innerHTML = "00"
                sec = 00
                min++
            }
            msec++
        }, 10)
    }
}

function stopContagem(){
    running = false
    clearInterval(tempo)
}

function resetContagem(){
    outmin.innerHTML = "00"
    outsec.innerHTML = "00"
    outmsec.innerHTML = "00"
    min = 00
    sec = 00
    msec = 00
}

}