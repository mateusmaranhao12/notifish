//OWL Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1, // Exibe 1 item por vez
        loop: true, // Ativa o looping
        nav: false, // Desativa setas
        dots: true, // Exibe as bolinhas de navegação
        autoplay: true, // Ativa autoplay
        autoplayTimeout: 5000, // Tempo entre os slides
        autoplayHoverPause: true // Pausa ao passar o mouse
    })
})

// Obter os botões e elementos de preço
const btnAnual = document.getElementById('btn-anual')
const btnMensal = document.getElementById('btn-mensal')

// Obter elementos de preço e período
const precoBasico = document.getElementById('preco-básico')
const precoPremium = document.getElementById('preco-premium')
const periodoBasico = document.getElementById('periodo-básico')
const periodoPremium = document.getElementById('periodo-premium')

// Obter os botões e elementos de preço para o CRM
const btnEconomize = document.getElementById('btnEconomize')
const btnPlanoAnual = document.getElementById('btnPlanoAnual')
const btnPlanoMensal = document.getElementById('btnPlanoMensal')

// Obter os elementos de preço CRM
const precoBasicoCRM = document.getElementById('precoBasicoCRM')
const precoIntermediario = document.getElementById('precoIntermediario')
const precoEmpresarial = document.getElementById('precoEmpresarial')

// Função para alterar para o plano anual
function alterarParaAnual() {
    // Atualizar preços para plano anual
    precoBasico.innerHTML = "R$ 89,99<span class='fs-6'>/ano</span>"
    precoPremium.innerHTML = "R$ 149,99<span class='fs-6'>/ano</span>"

    // Atualizar o texto do período
    periodoBasico.innerText = 'Anual'
    periodoPremium.innerText = 'Anual'
}

// Função para alterar para o plano mensal
function alterarParaMensal() {
    // Atualizar preços para plano mensal
    precoBasico.innerHTML = "R$ 111,49<span class='fs-6'>/mês</span>"
    precoPremium.innerHTML = "R$ 199,99<span class='fs-6'>/mês</span>"

    // Atualizar o texto do período
    periodoBasico.innerText = 'Mensal'
    periodoPremium.innerText = 'Mensal'
}

// Função para atualizar para o plano anual
function alterarParaAnualCRM() {
    precoBasicoCRM.innerHTML = "R$ 250,00<span class='fs-6'>/ano</span>"
    precoIntermediario.innerHTML = "R$ 450,00<span class='fs-6'>/ano</span>"
    precoEmpresarial.innerHTML = "R$ 710,00<span class='fs-6'>/ano</span>"
}

// Função para atualizar para o plano mensal
function alterarParaMensalCRM() {
    precoBasicoCRM.innerHTML = "R$ 312,50<span class='fs-6'>/mês</span>"
    precoIntermediario.innerHTML = "R$ 562,50<span class='fs-6'>/mês</span>"
    precoEmpresarial.innerHTML = "R$ 887,50<span class='fs-6'>/mês</span>"
}

// Adicionar eventos aos botões
btnAnual.addEventListener('click', alterarParaAnual)
btnMensal.addEventListener('click', alterarParaMensal)

// Adicionar eventos aos botões de plano
btnPlanoAnual.addEventListener('click', alterarParaAnualCRM)
btnPlanoMensal.addEventListener('click', alterarParaMensalCRM)