let valores = [1,7,5,2,9,8]
for(let count=0;count<valores.length;count++){
    console.log('a posição ' + count + ' tem o valor ' + valores[count])
}
console.log('o primeiro valor é: ' + valores[0])

for(let pos in valores){
    console.log(valores[pos])
}
let posicao = valores.indexOf(4)
if(posicao == -1){
    console.log('Valor não encontrado')
}else{
console.log('existe um 4 no índice '+ valores.indexOf(4))
}
