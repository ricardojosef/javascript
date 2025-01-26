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
    res.innerHTML = '<br>Contando...<br>'
    if(i<=f)/*Contagem progressiva*/{
    while(i <= f){
        res.innerHTML += i + '\u{1F449} ' 
        i = i+p
    }
}else/*Contagem regressiva*/{
    while(f <= i){
        res.innerHTML += i + '\u{1F449} ' 
        i = i-p
    }
}
    res.innerHTML+= '\u{1F3C1} ' 

}