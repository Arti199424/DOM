const button = document.getElementById("color")
const body = document.body;

button.addEventListener("click", backgroundColor)


function colorfipper(){
    return Math.floor(Math.random()*255);
}

function backgroundColor(){
    const color1 = colorfipper();
    const color2 = colorfipper();
    const color3 = colorfipper();

    const rgb = `rgb(${color1}, ${color2}, ${color3})`
    body.style.background = rgb;
    button.innerText = rgb;
}