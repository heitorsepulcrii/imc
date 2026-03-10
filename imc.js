function enviar(event){
    event.preventDefault();
    let peso = Number(document.getElementById('peso').value)
    let altura = Number(document.getElementById('altura').value)/100
    let imc = peso / ( altura * altura)

    let resultado = document.getElementById('resultado')
    resultado.innerText = `O seu Índice de massa corpórea é de ${imc.toFixed(2)}`      
}
