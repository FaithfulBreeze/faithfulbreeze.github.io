document.querySelector('#calcular').addEventListener('click', (a = 0, b = 0, c = 0)=>{

    const coef1 = document.querySelector('#coef1')
    const coef2 = document.querySelector('#coef2')
    const coef3 = document.querySelector('#coef3') 
    const res = []

    a = coef1.valueAsNumber
    b = coef2.valueAsNumber
    c = coef3.valueAsNumber

    const DELTA = b**2-4*a*c
    
    if(DELTA < 0){

        alert('Calculo sem continuação, Delta é menor que 0')

    }else{
        const x1 = (-b+Math.sqrt(DELTA))/2*a
        const x2 = (-b-Math.sqrt(DELTA))/2*a
        res.push(x1, x2)
        alert(res)
    }
})