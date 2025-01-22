const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});
function videoconAnimation(){
    var  videocon = document.querySelector("#video-container")
    var palybtn = document.querySelector("#play")
   videocon.addEventListener("mouseenter",function(){
      gsap.to(palybtn,{
       scale:1,
       opacity:1
      })
   })
   videocon.addEventListener("mouseleave", function(){
       gsap.to(palybtn,{
       scale:0,
       opacity:0
      })
   })
   videocon.addEventListener("mousemove", function(dets){
       gsap.to(palybtn,{
       left:dets.x-60,
       top:dets.y-40
      })
   })
}
videoconAnimation()

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.1,
        duration:0.9,
        stagger:0.5
    })
    gsap.from("#page1 #video-container",{
        scale:0.8,
        opacity:0,
        delay:1.1,
        duration:0.9,
        
    })
}
loadingAnimation()
