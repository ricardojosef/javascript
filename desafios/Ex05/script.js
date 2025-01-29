    let num = document.getElementById('num')
    var tab = document.getElementById('sel')
    let valores = []
    var res = document.querySelector('div#res')
    
    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <=100){
            return true
        } else {
            return false
        }
    }
    function inLista(b,l) {
        if (l.indexOf(Number(b)) != -1){
            return true
        } else {
            return false
        }
 }

    function inserir(){
        if(isNumero(num.value) && !inLista(num.value,valores)) {
        } else {
            window.alert('Valor inválido ou ja encontrado na lista')
        }
                let item = document.createElement('option')
                tab.appendChild(item)
               item.text ="O número " + Number(num.value) + ' foi adicionado'
                valores.push(Number(num.value))
        
    }
            
function analisador(){
    valores.sort()
    let maiorvalor = valores.length - 1
    let soma = 0
        for(let c = 0;c < valores.length; c++){
        soma += valores[c]
    }
    media = soma/valores.length

    res.innerHTML = "Ao todo, temos "+ valores.length + " números cadastrados <br><br> O maior valor informado foi " + valores[maiorvalor] + "<br><br> O menor valor informado foi " + valores[0] + "<br><br> A soma dos valores é " + soma + "<br><br> A média dos valores digitados é " + media
}