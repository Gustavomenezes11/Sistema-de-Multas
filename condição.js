function clicar(){
const confirmar= document.getElementById('txtresultado')
const opcao1 = document.getElementById('campoconsulta')
const validar = Number(opcao1.value)
if(validar <= 60){
    confirmar.innerHTML = 'Velocidade dentro do permitido, dirija sempre com cautela e cinto de segurança.'
}
else{
    if(validar > 60){
        confirmar.innerHTML = 'Você estava ácima da velodidade permitida, condutor Multado!'
    }
}
}

//Utilizei a função onclick onde o usuário seleciona um valor e ao clicar vai validar se a velocidade esta dentro do permitido ou não.
//No if esta a condição de velocidade permitida e no else esta a opção de condutor multado. Utilizei a velocidade 60 como base.