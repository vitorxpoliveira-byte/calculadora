function calcularimc(){
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);

    let calculo = peso / (altura * altura);

    document.getElementById("resultado").textContent = "Resultado Final:" + calculo.toFixed(2);

    let mensagem = document.getElementById("mensagem");

    if(Number.isNaN(calculo) || calculo <= 0){
        mensagem.textContent = "- Escreva Valores Válidos";
    }
    else if(calculo < 18.5){
        mensagem.textContent = "- Seu IMC está abaixo da média consierável saudável";
    }
    else if(calculo >= 18.5 && calculo <= 24.9){
        mensagem.textContent = "- Seu IMC está dentro da média considerável saudável";
    }
    else {
        mensagem.textContent = "- Seu IMC está acima da média considerável saudável";
    }
}