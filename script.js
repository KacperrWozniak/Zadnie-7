let kontener = document.getElementById("kontener");
let paragraf = document.querySelector(".wyroznione");
let artykul = document.getElementById("artykul");
let liczba = document.getElementById("liczba");

kontener.onclick = function() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    kontener.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

kontener.onmouseover = function() {
    kontener.style.fontSize = "24px";
};

kontener.onmouseout = function() {
    kontener.style.fontSize = "12px";
};

paragraf.ondblclick = function() {
    paragraf.innerHTML = "powiat radomski";
};

paragraf.onmouseover = function() {
    console.log(paragraf.innerHTML);
};

artykul.onkeydown = function(e) {
    artykul.style.width = (artykul.offsetWidth + 1) + "px";

    if (e.key >= "0" && e.key <= "9") {
        liczba.innerHTML = liczba.innerHTML + e.key;
    }
};
