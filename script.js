window.addEventListener("load", function(e) {
    document.querySelector(".book-exchange").style.left = "-1100px";
    console.log(aboutLocalization.offsetTop - document.documentElement.scrollTop);  
});



const showOnPx = 100;
const aboutLocalization = document.querySelector(".book-exchange");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if(scrollContainer().scrollTop > aboutLocalization.offsetTop - document.documentElement.scrollTop) {
        console.log("Você chegou");
        document.querySelector(".book-exchange").style.left = "0px";
    }
})

console.log(aboutLocalization.offsetTop - document.documentElement.scrollTop);