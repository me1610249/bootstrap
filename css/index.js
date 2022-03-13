
let Scroll=document.querySelector(".up");
window.onscroll=function () {
    if(this.scrollY>=600){
        Scroll.style.opacity=0.7
    }else
         Scroll.style.opacity=1
}
Scroll.onclick=function () {
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
}