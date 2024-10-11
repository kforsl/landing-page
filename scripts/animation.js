function runInAnimation(element) {
    if (element.classList.contains("top")) {
        slideInTop(element);
        return;
    }
    if (element.classList.contains("left")) {
        slideInLeft(element);
        return;
    }
    if (element.classList.contains("bottom")) {
        slideInBottom(element);
        return;
    }
    if (element.classList.contains("right")) {
        slideInRight(element);
        return;
    }
    if (element.classList.contains("scale")) {
        scaleUp(element);
        return;
    }
}
function runOutAnimation(element) {
    if (element.classList.contains("top")) {
        slideOutTop(element);
        return;
    }
    if (element.classList.contains("left")) {
        slideOutLeft(element);
        return;
    }
    if (element.classList.contains("bottom")) {
        slideOutBottom(element);
        return;
    }
    if (element.classList.contains("right")) {
        slideOutRight(element);
        return;
    }
    if (element.classList.contains("scale")) {
        scaleDown(element);
        return;
    }
}

function slideInTop(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: ["-100%", 0],
        duration: 2000,
        blur: ["100px", 0],
        easing: "cubicBezier(.40,.55,.80,1.10)",
    });
}
function slideOutTop(element) {
    anime({
        targets: element,
        opacity: [1, 0],
        translateY: [0, "-100%"],
        duration: 1000,
        blur: [0, "100px"],
        easing: "linear",
    });
}

function slideInLeft(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateX: ["-100%", 0],
        duration: 2000,
        blur: ["100px", 0],
        easing: "cubicBezier(.40,.55,.80,1.10)",
    });
}
function slideOutLeft(element) {
    anime({
        targets: element,
        opacity: 0,
        translateX: [0, "-100%"],
        duration: 1000,
        blur: [0, "100px"],
        easing: "linear",
    });
}

function slideInBottom(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: ["100%", 0],
        blur: ["100px", 0],
        duration: 2000,
        easing: "cubicBezier(.40,.55,.80,1.10)",
    });
}
function slideOutBottom(element) {
    anime({
        targets: element,
        opacity: [1, 0],
        translateY: [0, "100%"],
        blur: [0, "100px"],
        duration: 1000,
        easing: "linear",
    });
}

function slideInRight(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateX: ["100%", 0],
        blur: ["100px", 0],
        duration: 2000,
        easing: "cubicBezier(.40,.55,.80,1.10)",
    });
}
function slideOutRight(element) {
    anime({
        targets: element,
        opacity: 0,
        translateX: [0, "100%"],
        blur: [0, "100px"],
        duration: 1000,
        easing: "linear",
    });
}

function scaleUp(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        scale: [0, 1],
        blur: ["100px", 0],
        duration: 2000,
        easing: "cubicBezier(.40,.55,.80,1.10)",
    });
}
function scaleDown(element) {
    anime({
        targets: element,
        opacity: 0,
        scale: [1, 0],
        blur: [0, "100px"],
        duration: 1000,
        easing: "easeInBack",
    });
}
