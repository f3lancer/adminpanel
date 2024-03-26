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
    console.log(poapopen);
    console.log(contetn);
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
    var myChart = echarts.init(document.getElementById("biggraff"));
    window.addEventListener("resize", (function() {
        myChart.resize();
    }));
    var script_option = {
        title: {},
        tooltip: {},
        legend: {},
        xAxis: {
            data: [ "2023-2", "2023-4", "2023-6", "2023-8", "2023-10", "2023-12", "2024-2", "2024-4", "2024-6" ]
        },
        yAxis: {},
        series: [ {
            type: "bar",
            data: [ 1600, 820, 1536, 1310, 1e3, 720, 500, 510, 800 ]
        }, {
            data: [ 1e3, 400, 300, 1550, 100, 720, 500, 510, 800 ],
            type: "line",
            smooth: true
        } ]
    };
    myChart.setOption(script_option);
    var myChart1 = echarts.init(document.getElementById("main"));
    var option2 = {
        tooltip: {},
        legend: {},
        xAxis: {
            data: [ "2023-2", "2023-4", "2023-6", "2023-8", "2023-10", "2023-12", "2024-2", "2024-4", "2024-6" ],
            show: false
        },
        yAxis: {
            show: false
        },
        series: [ {
            label: {
                formatter: [ "Label Text" ].join("\n"),
                backgroundColor: "#eee",
                borderColor: "#555",
                fontSize: 18
            },
            data: [ 1e3, 400, 300, 1550, 100, 720, 500, 510, 800 ],
            type: "line",
            areaStyle: {
                color: "#26FFE5",
                opacity: .5
            }
        } ]
    };
    myChart1.setOption(option2);
    window["FLS"] = true;
    isWebp();
})();