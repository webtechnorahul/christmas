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
// console.log(star);
// let i=0
// star.style.color = "red";
// let triangle1=document.querySelector('.triangle1');
// let triangle2=document.querySelector('.triangle2');
// let triangle3=document.querySelector('.triangle3');
// let triangle4=document.querySelector('.triangle4');
// let triangle5=document.querySelector('.triangle5');

setInterval(()=>{
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);
    star.style.color=`rgb(${red},${green},${blue})`;
},300)
//