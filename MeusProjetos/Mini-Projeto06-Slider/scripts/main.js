const slider = document.querySelector("#slider")
const progBar = document.querySelector('#barProg')
let progress = 0
let indice = 1
var interval

//Função do timer de troca
start = function(){
        interval = setInterval(()=>{
            progress++
            progBar.setAttribute('value', progress)
        if(progress == 100){
            if(indice == 3){indice = 0}
            indice++
            progress = 0
            slider.setAttribute("src", `images/img${indice}.jpg`)
        }
    }, 50)
}
//Função do timer de troca

//Listener disparado ao carregar a página
window.addEventListener("load", ()=>{

    start() //Chamando função do timer de troca

    //Volta o slider
    document.querySelector("#voltar").addEventListener("click", ()=>{
        progress = 0
        if(indice>1){
            indice--
        }else{
            indice = 3
        }
        slider.setAttribute("src", `images/img${indice}.jpg`)
        clearInterval(interval) //Para a função do timer de troca
        start() //Chamando função do timer de troca
    })
    //Volta o slider

    //Avança o slider
    document.querySelector("#avancar").addEventListener("click", ()=>{
        progress = 0
        if(indice<3){
            indice++
        }else{
            indice = 1    
        }  
        slider.setAttribute("src", `images/img${indice}.jpg`)
        clearInterval(interval) //Para a função do timer de troca
        start() //Chamando função do timer de troca
    })
    //Avança o slider

})
//Listener disparado ao carregar a página