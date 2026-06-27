const galleryImages = document.querySelectorAll(".gallery img");

let current = 0;

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
<span id="close">&times;</span>
<button id="prev">&#10094;</button>
<img id="lightbox-img">
<button id="next">&#10095;</button>
`;

document.body.appendChild(lightbox);

const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach((img,index)=>{

img.addEventListener("click",(e)=>{

e.preventDefault();

current=index;

showImage();

lightbox.style.display="flex";

});

});

function showImage(){

lightboxImg.src=galleryImages[current].src;

}

document.getElementById("next").onclick=()=>{

current=(current+1)%galleryImages.length;

showImage();

};

document.getElementById("prev").onclick=()=>{

current=(current-1+galleryImages.length)%galleryImages.length;

showImage();

};

document.getElementById("close").onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

};

function filterSelection(category){

const items=document.querySelectorAll(".item");

items.forEach(item=>{

if(category==="all" || item.classList.contains(category)){

item.style.display="block";

}else{

item.style.display="none";

}

});

}