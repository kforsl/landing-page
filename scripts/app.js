function addTiles() {
    const parentElement = document.querySelector(".hero__tile-container");

    for (let i = 0; i < 900; i++) {
        const newTile = document.createElement("figure");
        newTile.classList.add("tile");
        parentElement.appendChild(newTile);
    }
}

window.addEventListener("load", (event) => {
    addTiles();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                runInAnimation(entry.target);
            } else {
                runOutAnimation(entry.target);
            }
        });
    });

    const glitchObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("glitch");
            } else {
                entry.target.classList.remove("glitch");
            }
        });
    });

    let animeElements = document.querySelectorAll(".anime");

    animeElements.forEach((element) => {
        observer.observe(element);
    });

    let glitchElements = document.querySelectorAll(".glitch-anime");

    glitchElements.forEach((element) => {
        glitchObserver.observe(element);
    });
});
