// SCROLL TO RIGHT
// collect elements
let content = document.querySelector(".content")
let btnscrollright = document.querySelector(".btnscrollright")

btnscrollright.addEventListener("click", function(){
    window.scrollBy(1000,0)
})

// SCROLLABLE IMAGE GALLERY
// collect left and right buttons
let btnright = document.querySelector(".btnright")
let btnleft = document.querySelector(".btnleft")
let gallerycontainer = document.querySelector(".gallerycontainer")

// define one functions for scroll left left and scroll right
function scrollgallery(scrollpixels){
    gallerycontainer.scrollBy({
        left:scrollpixels,
        behavior: "smooth"
    })
}
// add event to each button when is clicked
btnright.addEventListener("click", function(){
    scrollgallery(1000)
})
btnleft.addEventListener("click", function(){
    scrollgallery(-500)
})

// TO TOP SCROLL
// collect to icon
let toTop = document.querySelector(".toTop")

// add scroll event to the window (internet browser)
window.addEventListener("scroll", function(){
    let pexelsfromtop = this.window.scrollY //
    // test window.scrollY
    console.log(pexelsfromtop)

    if (pexelsfromtop>300){
        toTop.style.display = "block"
    }
    else{
        toTop.style.display= "none"
    }
})