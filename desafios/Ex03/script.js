function contagem(){
    var init = document.getElementById('beg')
    var end = document.getElementById('end')
    var passo = document.getElementById('step')
    var res = document.getElementById('result')

    if(init.value.length == 0 || end.value.length == 0){
        res.innerHTML = '<p>Impossível contar!</p>'
    } else if(passo.value.length == 0){
        alert('Passo inválido. Passo será 1...')
        passo = 1
    }
    let i = Number(init.value)
    let f = Number(end.value)
    let p = Number(passo.value)
    while(i <= f){
        res.innerHTML += i + ' -> ' 
        i = i+p
    }
    
}