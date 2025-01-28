function geratabuada(){
    let n1 = document.getElementById('num')
    let n = Number(n1.value)
    let tab = document.getElementById('sel')
    if(n1.value.length == 0){
        alert('Digite um número!')
    }else{
        tab.innerHTML = ''
        for(let c = 1; c<=10;c++){
            let item = document.createElement('option')
            item.text = n +' x '+ c + ' = ' + n*c
           /* item.value =`tab${c}`  ---- essa linha serve apenas para outras linguagens, permitindo que você saiba qual item da tabela foi selecionado. Ex: PHP*/
            tab.appendChild(item)
    }
}
}