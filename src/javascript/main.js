// ==================== STATE ==================== //
let currentNavIndex = 0

// ==================== DOM ==================== //
const mainNav = document.querySelector(".navegacao-principal")
const navContainer = document.querySelector(".itens")
const navTrack = navContainer.querySelector(".nav-track")
const navItems = navTrack.querySelectorAll(".item-navegacao")

// ==================== HELPERS ==================== //
// ==================== RENDER ==================== //
function modifyNavigation(){
    const itemWidth = navItems[0].offsetWidth
    const visibleItems = Math.round(navContainer.offsetWidth / itemWidth)
    const maxIndex = navItems.length - visibleItems

    currentNavIndex++

    if(currentNavIndex > maxIndex){
        currentNavIndex = 0
    }

    navTrack.style.transform = `translateX(-${currentNavIndex * itemWidth}px)`
}
// ==================== EVENTS ==================== //
const burgerMenu = document.querySelector("#menu-hamburguer")
burgerMenu.addEventListener("click", () => {
    mainNav.classList.toggle("escondido")
})

const nextButton = document.querySelector(".botao-de-proximo")
nextButton.addEventListener("click", modifyNavigation)
window.addEventListener("resize", modifyNavigation)



