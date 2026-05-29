// ==================== STATE ==================== //
let currentNavIndex = 0

// ==================== DOM ==================== //
const headerNav = document.querySelector(".header__nav")
const exploreNav = document.querySelector(".explore__nav")
const navTrack = exploreNav.querySelector(".card-list")
const navCards = navTrack.querySelectorAll(".card")

// ==================== HELPERS ==================== //
// ==================== RENDER ==================== //
function modifyNavigation(){
    const itemWidth = navCards[0].offsetWidth
    const visibleItems = Math.round(exploreNav.offsetWidth / itemWidth)
    const maxIndex = navCards.length - visibleItems

    currentNavIndex++

    if(currentNavIndex > maxIndex){
        currentNavIndex = 0
    }

    navTrack.style.transform = `translateX(-${currentNavIndex * itemWidth}px)`
}
// ==================== EVENTS ==================== //
const burgerMenu = document.querySelector(".header__menu-toggle")
burgerMenu.addEventListener("click", () => {
    headerNav.classList.toggle("header__nav--open")
})

window.addEventListener("resize", modifyNavigation)

const nextButton = document.querySelector(".explore__button")
nextButton.addEventListener("click", modifyNavigation)