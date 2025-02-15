function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value; 
    let quantidade = parseInt(document.getElementById('qtd').value);
   
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor insira uma quantidade de ingresso válida');
        limpar();
        return;
    }
    
    if(tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if(tipoIngresso == 'superior') {
        comprarCSuperior(quantidade);
    } else {
        comprarCInferior(quantidade);
    }

}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if(quantidade > quantidadePista) {
        alert('Quantidade de ingressos indisponível para tipo Pista');
        limpar();
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Compra realizada com sucesso!');
        limpar();
    }

}

function comprarCSuperior(quantidade) {
    let quantidadeCSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(quantidade > quantidadeCSuperior) {
        alert('Quantidade de ingressos indisponível para tipo Cadeira superior');
        limpar();
    } else{
        quantidadeCSuperior = quantidadeCSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeCSuperior;
        alert('Compra realizada com sucesso!');
        limpar();
    }
    
}

function comprarCInferior(quantidade) {
    let quantidadeCInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > quantidadeCInferior) {
        alert('Quantidade de ingressos indisponível para tipo Cadeira inferior');
        limpar();
    } else {
        quantidadeCInferior = quantidadeCInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeCInferior;
        alert('Compra realizada com sucesso!');
        limpar();
    }

}

function limpar() {
    document.getElementById('qtd').value = '';
}