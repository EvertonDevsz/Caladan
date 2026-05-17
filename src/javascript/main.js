// ==================== STATE ==================== //














// ==================== DOM ==================== //
const mainNav = document.querySelector(".navegacao-principal")
// ==================== HELPERS ==================== //
// ==================== RENDER ==================== //
// ==================== EVENTS ==================== //
const burgerMenu = document.querySelector("#menu-hamburguer")
burgerMenu.addEventListener("click", () => {
    mainNav.classList.toggle("escondido")
})

