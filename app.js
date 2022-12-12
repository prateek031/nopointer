var main= document.querySelector("#main")
var point=document.querySelector("#point")
var heading= document.querySelector("h1")


main.addEventListener("mousemove",function(dets){
    point.style.left=dets.x-15+"px";
    point.style.top=dets.y-15+"px";
})

heading.addEventListener("mousemove",function(){
    point.style.scale=2.5;
})
heading.addEventListener("mouseleave",function(){
    point.style.scale=.5;
})

document.querySelector( "#retrobg-sun" ).onclick = () => {
    document.querySelector( "#retrobg" ).classList.toggle( "retrobg-shutdown" );
  };
