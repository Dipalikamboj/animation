const rect = document.querySelector('#box');
window.addEventListener('mousemove', function(details){
    let xval = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width/2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width/2),
        details.clientX
        );
    // console.log(details.clientX);
    gsap.to('#box', {
        left: xval + "px",
        ease: "power3"
    });
});