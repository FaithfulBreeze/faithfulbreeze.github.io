const discord = document.querySelector('#discord')
const redes = document.querySelector('#redesS')
discord.addEventListener('click', discordClick)
redes.addEventListener('click', redesIrTopo)
function discordClick(){
    navigator.clipboard.writeText("FaithfulBreeze#7782")
    setTimeout(() => {alert('Copiado para a area de transferência!')}, 100);
}
function redesIrTopo(){
    window.scrollTo(0, 0)
}