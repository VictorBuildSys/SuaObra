let scrollbarWidth = getScrollbarWidth();  // Armazena a largura inicial da scrollbar
let debounceTimer;  // Variável para o debounce

// Função que calcula a largura da scrollbar
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

// Função que ajusta a margin-right do header com base na largura da scrollbar
function adjustHeaderMargin() {
  const nav = document.querySelector('#nav_buttons_container'); // Seleciona o elemento header
  
  if (nav) {
    nav.style.paddingRight = `${scrollbarWidth}px`;  // Aplica a margin-right correspondente
  }
}

// Função de debounce para limitar a execução do ajuste durante o resize
function debounce(func, delay) {
  return function() {
    clearTimeout(debounceTimer);  // Limpa o timer anterior
    debounceTimer = setTimeout(func, delay);  // Executa a função após o delay
  };
}

// Função que atualiza a largura da scrollbar e ajusta o header
function updateScrollbarWidth() {
  scrollbarWidth = getScrollbarWidth();  // Recalcula a largura da scrollbar
  adjustHeaderMargin();  // Ajusta a margem do header
}

// Chama a função ao carregar a página
window.addEventListener('load', updateScrollbarWidth);

// Chama a função ao redimensionar a janela, com debounce
window.addEventListener('resize', debounce(updateScrollbarWidth, 150));
