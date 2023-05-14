let logoicon = document.querySelector(".logo-icon");
let btn = document.querySelector(".task-btn");
let icon = document.querySelectorAll(".icon-btn");
let pa = document.querySelector(".pa");
let bar = document.querySelector(".head-btn")
window.onscroll = ()=>{
	       if (window.scrollY >= '80') {
        logoicon.style.cssText = "background-color:#000000DE;";
        bar.style.cssText = "background-color:#000000DE;";
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
// =======================================================
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
allbtn.style.display = "none";
let open = document.querySelector(".open-btn");
let hrbtn = document.querySelectorAll(".hr-btn");
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
let date = document.getElementById("date");
let inp = document.querySelectorAll(".inform input");
let placholder = document.querySelectorAll(".placholder");
let sel = document.getElementById("selform");
let input = document.querySelectorAll("input");
let textarea = document.querySelector(".inform textarea");
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
let dnow = new Date();
date.onblur = () => {
    if (date.value === '') {
        date.value = `${dnow.getDate()}-${(dnow.getMonth()) + 1}-${dnow.getFullYear()}`;
    }
}

// ===================================================