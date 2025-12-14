let star=document.querySelector(".star");
let shapes=document.querySelectorAll(".shape");


setInterval(()=>{
    let red=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
   shapes.forEach(element => {
    setTimeout(() => {
        element.style.background=`rgb(${red},255,${blue})`;
        
    }, 1000);
}); 
},500)

setInterval(()=>{
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    star.style.color=`rgb(${red},${green},${blue})`;
},300)
//
const arr=["giftbox.png","giftbox2.png","giftbox3.png","giftbox4.png","giftbox5.png",
    "giftbox6.png","giftbox7.png","giftbox8.png","giftbox9.png"
];
let box=setInterval(() => {
   try{
     let num=Math.floor(Math.random()*arr.length);
let topp=Math.floor(Math.random()*70)+"%";
let leftpo=Math.floor(Math.random()*70)+"%";
let newbox=document.createElement("img");
newbox.src=`./${arr[num]}`;
newbox.style.height="100px";
newbox.style.width="100px";
newbox.style.position="absolute";
newbox.style.left=`${leftpo}`;
newbox.style.top=`${topp}`;

document.body.appendChild(newbox);
setTimeout(()=>{
    newbox.remove();
},3000)
   }
   catch(e){
    console.log(e);
   }

}, 500);

setTimeout(()=>{
clearInterval(box);
},30000)
