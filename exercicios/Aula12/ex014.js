var agora = new Date()
var diaSem = agora.getDay()
/* O switch te ajuda em situações pontuais, para valores específicos */
switch(diaSem){
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    default:
        console.log('[ERRO] Dia inválida')
        break
}

