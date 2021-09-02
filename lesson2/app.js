/// play video

const openVideo = document.querySelector(".video");

let theModal = document.querySelector("#video a").getAttribute("data-target");
let videoSRC = document.querySelector("#video a").getAttribute("data-video");
let videoSRCAuto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";

const closeVideo = document.querySelector(theModal + " button.close");

openVideo.addEventListener('click', ()=>{
    document.querySelector(theModal + " iframe").setAttribute("src", videoSRCAuto);
});

closeVideo.addEventListener('click', function (){
    document.querySelector(theModal + " iframe").setAttribute("src", "");
});



/// Lightbox Init
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox({
        //showArrows : false
    });
});