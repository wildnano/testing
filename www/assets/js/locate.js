function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function createMessageUnder(elem, html) {
    let message = document.createElement("div");
    message.style.cssText = "position:absolute; color: red";

    let coords = getCoords(elem);

    message.style.left = coords.left + "px";
    message.style.top = coords.bottom + "px";

    message.innerHTML = html;

    return message;
}

const rectangle = document.querySelector(".rectangle");
let rectCoord = getCoords(rectangle);
console.log("coord rect", getCoords(rectangle));

const ball = document.querySelector(".ball");
let ballCoord = getCoords(ball);
console.log("coord ball", getCoords(ball));

function isInside(target, wrapper) {
    if (target.bottom <= wrapper.top || target.left >= wrapper.right || target.top >= wrapper.bottom || target.right <= wrapper.left) {
        rectangle.style.backgroundColor = "red";
        return false;
    } else {
        return true;
    }
}

isInside(ballCoord, rectCoord);
console.log("isInside(ballCoord, rectCoord);", isInside(ballCoord, rectCoord));
