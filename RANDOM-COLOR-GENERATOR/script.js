const getColor = () => {
    //Hex Code
const randomNumber=Math.floor(Math.random()*16777215);
const randomCode='#'+randomNumber.toString(16);
document.body.style.backgroundColor=randomCode;
document.getElementById("color-code").innerText=randomCode;
// console.log(randomNumber,randomCode);
navigator.clipboard.writeText(randomCode);// with the help of this we can copy the hexa color any where in your clipboard like notepad,notes etc.
}

// for event call
document.getElementById("btn").addEventListener(
    "click",
    getColor

)

//for initial call
getColor();