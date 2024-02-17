wow = new WOW(
    {
        animateClass: 'animate__animated' //updated default animate 4.+
    }
)
wow.init();
document.addEventListener("DOMContentLoaded", function() {
    const ratingContainer = document.getElementById("rating");
    const stars = ratingContainer.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", function() {
            const value = this.getAttribute("data-value");
            resetStars();
            highlightStars(value);
        });
    });

    function resetStars() {
        stars.forEach(star => {
            star.classList.remove("active");
        });
    }

    function highlightStars(value) {
        for (let i = 0; i < value; i++) {
            stars[i].classList.add("active");
        }
    }
});
