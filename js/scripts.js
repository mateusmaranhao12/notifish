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
const btnEconomize = document.getElementById('btnEconomize')

// Obter elementos de preço e período
const precoBasico = document.getElementById('preco-básico')
const precoPremium = document.getElementById('preco-premium')
const periodoBasico = document.getElementById('periodo-básico')
const periodoPremium = document.getElementById('periodo-premium')

// Obter os botões e elementos de preço para o CRM
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

    // Remover botão Economize 20% quando no plano anual
    btnEconomize.style.display = 'none'
}

// Função para alterar para o plano mensal com desconto
function alterarParaMensal() {
    // Atualizar preços para plano mensal com 20% de desconto
    const precoBasicoMensal = 111.49
    const precoPremiumMensal = 199.99

    const precoBasicoDesconto = (precoBasicoMensal * 0.8).toFixed(2)
    const precoPremiumDesconto = (precoPremiumMensal * 0.8).toFixed(2)

    precoBasico.innerHTML = `R$ ${precoBasicoDesconto}<span class='fs-6'>/mês</span>`
    precoPremium.innerHTML = `R$ ${precoPremiumDesconto}<span class='fs-6'>/mês</span>`

    // Atualizar o texto do período
    periodoBasico.innerText = 'Mensal'
    periodoPremium.innerText = 'Mensal'

    // Exibir botão Economize 20%
    btnEconomize.style.display = 'block'
}

// Inicializar o plano como anual ao carregar a página
window.addEventListener('load', () => {
    alterarParaAnual()
})

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

// Definir plano inicial para Anual
window.onload = () => {
    alterarParaAnualCRM() // Define o plano como anual ao carregar a página

    // Evento de clique para alterar para o plano Anual
    document.getElementById('btnPlanoAnual').addEventListener('click', alterarParaAnualCRM)

    // Evento de clique para alterar para o plano Mensal
    document.getElementById('btnPlanoMensal').addEventListener('click', alterarParaMensalCRM)
}

// Adicionar eventos aos botões
btnAnual.addEventListener('click', alterarParaAnual)
btnMensal.addEventListener('click', alterarParaMensal)

// Adicionar eventos aos botões de plano
btnPlanoAnual.addEventListener('click', alterarParaAnualCRM)
btnPlanoMensal.addEventListener('click', alterarParaMensalCRM)


//FAQ texto
document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        
         // Seleciona o próximo elemento `.faq-content` após o ícone clicado
        const faqContent = this.nextElementSibling.nextElementSibling

        // Alterna a visibilidade do conteúdo
        if (faqContent.style.display === 'none' || faqContent.style.display === '') {
            faqContent.style.display = 'block'
            this.classList.remove('fa-arrow-right')
            this.classList.add('fa-arrow-down')
        } else {
            faqContent.style.display = 'none'
            this.classList.remove('fa-arrow-down')
            this.classList.add('fa-arrow-right')
        }
    })
}) 