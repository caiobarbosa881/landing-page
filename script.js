window.addEventListener("load", function(event) {
    document.querySelector(".book-exchange").style.left = "-1100px";
    document.querySelector(".about-title").style.right = "1100px";
    document.querySelector(".about-text").style.right = "1100px";
});


const showOnPx = 100;
const aboutLocalization = document.querySelector(".about");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if(scrollContainer().scrollTop > 1800) {
        console.log("Você chegou");
        document.querySelector(".book-exchange").style.left = "0px";
        document.querySelector(".about-title").style.right = "0px";
        document.querySelector(".about-text").style.right = "0px";
        
    }
})

