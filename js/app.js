(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const minmenu = document.querySelector(".minmenu");
    const bacgroundmenu = document.querySelector(".menu-header");
    const body = document.querySelector("body");
    if (minmenu) minmenu.addEventListener("click", (function() {
        body.classList.toggle("openmobilemenu");
    }));
    if (bacgroundmenu) bacgroundmenu.addEventListener("click", (function() {
        body.classList.toggle("openmobilemenu");
    }));
    const poapopen = document.querySelectorAll(".idc__popapon");
    const contetn = document.querySelectorAll(".idc__popapcontent");
    for (let i = 0; i < poapopen.length; i++) poapopen[i].onclick = function() {
        for (let v = 0; v < contetn.length; v++) {
            contetn[v].classList.remove("active");
            poapopen[v].classList.remove("active");
        }
        contetn[i].classList.add("active");
        poapopen[i].classList.add("active");
    };
    const buttononselectcoin = document.querySelector(".buttononselectcoin");
    const tradeMaskSelect = document.querySelector(".trade-mask-select");
    if (buttononselectcoin) buttononselectcoin.onclick = function() {
        tradeMaskSelect.classList.toggle("display-none");
    };
    let popaplisttrade = document.querySelectorAll(".popaplisttrade");
    let buysellForml = document.querySelectorAll(".buysell-form.left");
    let buysellFormr = document.querySelectorAll(".buysell-form.right");
    for (let i = 0; i < popaplisttrade.length; i++) popaplisttrade[i].onclick = function() {
        for (let v = 0; v < popaplisttrade.length; v++) {
            popaplisttrade[v].classList.remove("active");
            buysellForml[v].classList.remove("active");
            buysellFormr[v].classList.remove("active");
        }
        popaplisttrade[i].classList.add("active");
        buysellForml[i].classList.add("active");
        buysellFormr[i].classList.add("active");
    };
    const percentSlider = document.querySelectorAll(".slider-range__input");
    document.querySelectorAll(".trade-section__titletext");
    console.log(percentSlider);
    for (let i = 0; i < percentSlider.length; i++) percentSlider[i].addEventListener("input", (event => {
        let childsquare = percentSlider[i].parentNode.firstElementChild.children;
        let widthline = document.querySelectorAll(".slider-range__line")[i];
        let pricent = event.target.value;
        if (pricent >= 1) childsquare[0].classList.add("active"); else childsquare[0].classList.remove("active");
        if (pricent >= 26) childsquare[1].classList.add("active"); else childsquare[1].classList.remove("active");
        if (pricent >= 51) childsquare[2].classList.add("active"); else childsquare[2].classList.remove("active");
        if (pricent >= 76) childsquare[3].classList.add("active"); else childsquare[3].classList.remove("active");
        widthline.style.width = `${pricent}%`;
        console.log(event.target.value);
    }));
    window["FLS"] = true;
    isWebp();
})();