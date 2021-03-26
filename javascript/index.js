let classList = ["one", "two", "three", "four", "five"];

let randomKey = Math.floor(Math.random(classList) * classList.length);
document.body.setAttribute("class", classList[randomKey]);
