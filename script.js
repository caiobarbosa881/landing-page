window.addEventListener("load", function(e) {
    document.querySelector(".book-exchange").style.left = "-1100px";
});

const showOnPx = 100;
const aboutLocalization = document.querySelector(".book-exchange");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if(scrollContainer().scrollTop > aboutLocalization.offsetTop - document.documentElement.scrollTop) {
        document.querySelector(".book-exchange").style.left = "0px";
    }
})

window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}