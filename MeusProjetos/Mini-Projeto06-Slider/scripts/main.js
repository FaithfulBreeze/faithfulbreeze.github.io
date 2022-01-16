let slider = document.querySelector("#slider")
let indice = 1
var interval

//Função do timer de troca
start = function(){
        interval = setInterval(()=>{
        if(indice == 3){indice = 0}
        indice++
        slider.setAttribute("src", `images/img${indice}.jpg`)
    }, 3000)
}
//Função do timer de troca

//Listener disparado ao carregar a página
window.addEventListener("load", ()=>{

    start() //Chamando função do timer de troca

    //Volta o slider
    document.querySelector("#voltar").addEventListener("click", ()=>{
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