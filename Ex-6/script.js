var frmVeiculo
var frmṔreco
var divMostrar
var valorParcela
document.getElementById('mostrarInfo').style.display = "none";

btnCalc.addEventListener('click', function() {
    frmVeiculo = modelo.value
    frmPreco = valor.value / 2
    valorParcela = (frmValor / 60) * 1.7
    divMostrar = document.getElementById('mostrarInfo')
    document.getElementById('mostrarInfo').style.display = "block";
    divMostrar.innerHTML = `
        <h2>
            <p><div>Modelo: <span class="campo">${frmVeiculo}</span></div></p>
            <p><div>Entrada de <span class="campo">R$ ${frmPreco.toFixed(2)}</span></div></p>
            <p><div>+60 de <span class="campo">R$ ${valorParcela.toFixed(2)}</span></div></p>
        </h2>
    `
})x