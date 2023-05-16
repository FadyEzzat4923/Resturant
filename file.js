// ========== Declearation ==================
let logoicon = document.querySelector(".logo-icon");
let header = document.querySelector(".header-main");
let icon = document.querySelectorAll(".icon-btn");
let qualitycard = document.querySelectorAll(".quality-card");
let aboutUstext = document.querySelector(".aboutUs");
let btn = document.querySelectorAll(".task-btn");
let booking = document.querySelector(".booking")
let oneimage = document.querySelectorAll(".oneimage");
let chefimg = document.querySelectorAll(".chef-img")
chefimg.forEach((ele) => {
    ele.style.cssText = "display : none"
})
let cheficon = document.querySelectorAll(".chef-icon")
oneimage.forEach((e) => {
    e.style.cssText = "transform: scale(0);";
})
let numofit = document.querySelectorAll(".numofit");
let up = document.createElement("div");
up.class = "up";
up.textContent = "^"
up.style.cssText = "display: none;  font-family: cursive; font-size:25px; width: 30px; height: 30px; background-color:#FF3300; position : fixed; right : 20px; bottom : 15px; cursor : pointer; color:white; text-align: center; line-height: 45px;";
document.body.append(up);
let scrolling = document.querySelectorAll(".iconfm");
let hrscrollfm = document.querySelector(".hrscrollfm");
let pa = document.querySelector(".pa");
let textfm = document.querySelectorAll(".textfm");
let mostfm = document.querySelectorAll(".mostfm");
let populerfm = document.querySelector(".populerfm");
let listfm = document.querySelectorAll(".listfm");
listfm[1].style.cssText = " display : none ;";
listfm[2].style.cssText = "display : none ;";
// ========== header on Scrolling ===========
// if (document.body.scrollWidth >= 1200) {
window.onscroll = () => {
    if (window.scrollY >= '80') {
        logoicon.style.cssText = "background-color:#000000DE;"
            ;
        bar.style.cssText = "background-color:#000000DE;"
            ;
    }
    else {
        logoicon.style.cssText = "background-color:#00000000;  ";
        bar.style.cssText = "background-color:#00000000;  ";
    }
    // ========== icon on Scrolling ===========
    if (window.scrollY >= '400') {
        up.style.display = "block";
    }
    else {
        up.style.display = "none";
    }
    if (window.scrollY >= '530') {
        qualitycard.forEach((e) =>
            e.style.marginTop = "0"
        );
    }
    else {
        qualitycard.forEach((e) =>
            e.style.marginTop = "200px"
        );
    }
    if (window.scrollY >= '980') {
        aboutUstext.style.marginTop = "0px";
        for (let i = 0; i < 2; i++) {
            oneimage[i].style.cssText = "animation: appear  1.5s ease;";
        }
    }
    else {
        aboutUstext.style.marginTop = "300px";
    }
    if (window.scrollY >= '1050') {
        for (let i = 2; i < 4; i++) {
            oneimage[i].style.cssText = "animation: appear  1.5s ease;";
        }
    }
    if (window.scrollY >= '1420') {
        textfm[0].style.marginTop = "0";
    }
    else {
        textfm[0].style.marginTop = "10px";
    }

    if (window.scrollY >= '1470') {
        mostfm[0].style.marginTop = "0";
    }
    else {
        mostfm[0].style.marginTop = "10px";
    }

    if (window.scrollY >= '1550') {
        populerfm.style.marginTop = "0";
    }
    else {
        populerfm.style.marginTop = "30px";
    }

    if (window.scrollY >= '1700') {
        listfm.forEach((e) => {
            e.style.marginTop = "0";
        });
    }
    else {
        listfm.forEach((e) => {
            e.style.marginTop = "80px";
        })
    }
    if (window.scrollY >= '2354') {
        booking.style.marginTop = "0px";
    }
    else {
        booking.style.marginTop = "100px"
    }
    if (window.scrollY >= '2980') {
        textfm[1].style.marginTop = "0px";
    }
    else {
        textfm[1].style.marginTop = "15px"
    }
    if (window.scrollY >= '2995') {
        mostfm[1].style.marginTop = "0px";
    }
    else {
        mostfm[1].style.marginTop = "15px"
    }
    if (window.scrollY >= '3200') {
        cheficon.forEach((e) =>
            e.style.marginTop = "0"
        );
    }
    else {
        cheficon.forEach((e) =>
            e.style.marginTop = "100px"
        );
    }
    if (window.scrollY >= 3300) {
        chefimg.forEach((ele) => {
            ele.style.cssText = "animation: appear  1.5s ease; display : flex"
        })
    }
}
btn.forEach((e) => {
    e.onclick = () => {
        window.open("booking.html")
    }
})
up.onclick = () => {
    window.scrollTo(0, 0)
}
// =================== icon =================
icon[0].onclick = () => {
    window.scrollTo(0, 0);
}
icon[1].onclick = () => {
    window.open("about.html", "_self");
}
icon[2].onclick = () => {
    window.open("service.html", "_self");
}
icon[3].onclick = () => {
    window.open("menu.html", "_self");
}
icon[5].onclick = () => {
    window.open("contact.html", "_self");
}
pa.onclick = () => {
    window.open("teem.html", "_self");
}
// ========== scrolling in Food List ========
scrolling[0].onclick = () => {
    hrscrollfm.style.cssText = "  left: 0%; transform: translateX(0%); ";
    if (listfm[1].style.display === 'grid' || listfm[2].style.display === 'grid') {
        listfm[0].style.cssText = " display : grid ;  animation: appear  0.6s ease;";
    }
    listfm[1].style.cssText = " display : none ;";
    listfm[2].style.cssText = "display : none ;";
}
scrolling[1].onclick = () => {
    hrscrollfm.style.cssText = "  left: 50%; transform: translateX(-50%); ";
    listfm[0].style.cssText = "display : none ; ";
    listfm[1].style.cssText = "display : grid ; grid ; animation: appear  0.6s ease;";
    listfm[2].style.cssText = "display : none ; ";
}
scrolling[2].onclick = () => {
    hrscrollfm.style.cssText = "  left: 100%; transform: translateX(-100%); ";
    listfm[0].style.cssText = "display : none ;  ";
    listfm[1].style.cssText = "display : none ; ";
    listfm[2].style.cssText = "display : grid ; grid ; animation: appear  0.6s ease;";
}
// =========== function =====================
let date = document.getElementById("date");
let inp = document.querySelectorAll(".inform input");
let placholder = document.querySelectorAll(".placholder");
let sel = document.getElementById("selform");
let input = document.querySelectorAll("input");
let textarea = document.querySelector("textarea");
inp.forEach((e) => {
    e.style.display = "none"
});
textarea.style.display = "none";
sel.style.display = "none";
placholder[3].onclick = () => {
    sel.style.display = "block";
    placholder[3].style.fontSize = "12px";
}
placholder[4].onclick = () => {
    textarea.style.display = "block";
    placholder[4].style.fontSize = "12px";
    textarea.focus();
}
for (let i = 0; i < 3; i++) {
    placholder[i].onclick = () => {
        if (inp[i].style.display === "none") {
            inp[i].style.display = "block";
            placholder[i].style.fontSize = "12px";
            inp[i].focus()
        }
    }
}
for (let i = 0; i < 3; i++) {
    inp[i].onblur = () => {
        if (inp[i].value === "") {
            inp[i].style.display = "none";
            placholder[i].style.fontSize = "20px";
        }
    }
}

textarea.onblur = () => {
    if (textarea.value === "") {
        textarea.style.display = "none";
        placholder[4].style.fontSize = "20px";
    }
}
// ======== validate =========
let submit = document.querySelector(".submit");
let pattern0 = /([a-z]|[A-Z])/gi;
let pattern1 = /(\w+|\d+|.)@(gmail|yahoo).(com|net)/gi;
let o;
let i;
inp.forEach((e) => {
    e.onblur = () => {
        o = pattern0.test(inp[0].value);
        i = pattern1.test(inp[1].value);
        for (let i = 0; i < 3; i++) {
            if (inp[i].value === "") {
                inp[i].style.display = "none";
                placholder[i].style.fontSize = "20px";
            }
        }
    }
})
submit.onclick = () => {
    if (o === true && i === true) {
        window.scrollTo(0, 0);
        inp.forEach((e) => {
            e.value = '';
        });
        textarea.value = ""
        sel.style.display = "none";
    }
}
let dnow = new Date();
date.onblur = () => {
    if (date.value === '') {
        date.value = `${dnow.getDate()}-${(dnow.getMonth()) + 1}-${dnow.getFullYear()}`;
    }
}
// ====================================================
let button = document.querySelectorAll(".button");
button[0].onclick = () => {
    window.scrollTo(0, 0);
}
button[1].onclick = () => {
    window.open("about.html", "_self");
}
button[2].onclick = () => {
    window.open("service.html", "_self");
}
button[3].onclick = () => {
    window.open("menu.html", "_self");
}
button[4].onclick = () => {
    window.open("teem.html", "_self");
}
button[5].onclick = () => {
    window.open("contact.html", "_self");
}
button[6].onclick = () => {
    window.open("booking.html", "_self");
}
// ====================================================
let bar = document.querySelector(".head-btn");
let allbtn = document.querySelector(".all-btn");
allbtn.style.display = "none";
let hrbtn = document.querySelectorAll(".hr-btn");
let open = document.querySelector(".open-btn");
open.onclick = () => {
    if (allbtn.style.display === "none") {
        allbtn.style.display = "block";
        hrbtn[2].style.width = "80%";
        hrbtn[1].style.width = "80%";
        //  open.style.borderRadius = "50%";
        // open.innerHTML = "X";
    }
    else {
        allbtn.style.display = "none";
        hrbtn[2].style.width = "47%";
        hrbtn[1].style.width = "30%";
        // open.innerHTML = `<div class="hr-btn"></div><div class="hr-btn"></div><div class="hr-btn"></div>`;
        // open.style.borderRadius = "5px";
    }
}
// ====================================================
