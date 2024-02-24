TweenMax.staggerFrom(".block",0.8,{
  width: "0%",
  ease:Power1. easeIn,
  delay:3,

},0.04);
TweenMax.from(".header",1,{
  x:2,
  opacity:0,
  ease:Power1.easeInOut,
});

class D{
  constructor(){
    this.day = ["日","月","火","水","木","金","土"];
    this.D = new Date();
    
  }
year(){
  return this.D.getFullYear();
}
month(){
  return this.D.getMonth()+1;
}
date(){
  return this.D.getDate();
}
_h(){
  return ("0" + s).slice(-2);
}
_D(){
  return "-";
}
}
const date = new D();
const y = date.year();
const m = date.month();
const d = date.date();
const h = date._D();
document.querySelector('h3').innerHTML = y + h + m +h + d;

//btn
const btn = document.querySelectorAll(".btn");
const myP=document.querySelector(".my-pic");
const tC=document.querySelector(".text-c");
const a=document.querySelector("#about");

btn[0].addEventListener("click",()=>{
  a.classList.toggle("on");
/*   myP.classList.toggle("on"); */
  tC.classList.toggle("on");
  contact.classList.remove("on");
  ss.classList.remove("on");
  so.classList.remove("on");
})

//flower
const f = document.querySelectorAll(".flower");

//#sample-site
const ss = document.querySelector("#sample-site");
btn[1].addEventListener("click",()=> {
  ss.classList.toggle("on");
  contact.classList.remove("on");
  a.classList.remove("on");
  so.classList.remove("on");
})


//#sample-other
const so = document.querySelector("#sample-other");
btn[2].addEventListener("click",()=> {
  so.classList.toggle("on");
  contact.classList.remove("on");
  ss.classList.remove("on");
  a.classList.remove("on");
})

//contact
const contact = document.querySelector("#contact");
btn[3].addEventListener("click",()=> {
  contact.classList.toggle("on");
  a.classList.remove("on");
  ss.classList.remove("on");
  so.classList.remove("on");
})
//
gsap.to("h1 span", {
  delay: 3.5, 
  duration: 1.5, 
  opacity: 1, 
  stagger: {
    each: 0.2, 
    from: "start", 
  },
});