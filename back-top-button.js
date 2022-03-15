const backToTopButton = document.querySelector(".back-to-top");

document.addEventListener("scroll", () => {
    if(scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden");
    } else {
        backToTopButton.classList.add("hidden");
    }
})

const goToTop = () => {
    document.body.scrollIntoView();
  };

backToTopButton.addEventListener("click", goToTop);