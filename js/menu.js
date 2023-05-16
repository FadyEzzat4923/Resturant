let logoicon = document.querySelector(".logo-icon");
let btn = document.querySelector(".task-btn");
let pa = document.querySelector(".pa");
let icon = document.querySelectorAll(".icon-btn");
let scrolling = document.querySelectorAll(".iconfm");
let hrscrollfm = document.querySelector(".hrscrollfm");
let listfm = document.querySelectorAll(".listfm");
listfm[1].style.cssText = " display : none ;";
listfm[2].style.cssText = "display : none ;";
let bar = document.querySelector(".head-btn")
window.onscroll = ()=>{
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

}
// =======================================================
icon[0].onclick = () => {
    window.open("index.html","_self");
}
icon[1].onclick = () => {
    window.open("about.html","_self");
}
icon[2].onclick = () => {
    window.open("service.html","_self");
}
icon[3].onclick = () => {
window.open("menu.html","_self");
}
icon[5].onclick = () => {
    window.open("contact.html","_self");
}
pa.onclick = () =>{
    window.open("teem.html","_self");	
}
btn.onclick = () =>{
	window.open("booking.html","_self");
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
// ====================================================
let button = document.querySelectorAll(".button");
button[0].onclick = () => {
    window.open("index.html", "_self");
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
let allbtn = document.querySelector(".all-btn");
let hrbtn = document.querySelectorAll(".hr-btn");
allbtn.style.display = "none";
let open = document.querySelector(".open-btn");
open.onclick = () => {
    if (allbtn.style.display === "none") {
        allbtn.style.display = "block";
        hrbtn[2].style.width = "80%";
        hrbtn[1].style.width = "80%";
        // open.style.borderRadius = "50%";
        // open.innerHTML = "X";
    }
    else {
        allbtn.style.display = "none";
         hrbtn[2].style.width = "50%";
        hrbtn[1].style.width = "30%";
        // open.innerHTML = `<div class="hr-btn"></div><div class="hr-btn"></div><div class="hr-btn"></div>`;
        // open.style.borderRadius = "5px";
    }
}
// ====================================================