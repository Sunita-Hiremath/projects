const images =[
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/e8781fa787f6a93a.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/74f0ad81e44e6e6f.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1338bd4fc60390d8.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1558a721300c7f6d.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/076c4f2ee87225d7.jpg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/6b48199df7d390ab.jpeg?q=80",
    "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/5b309e98775e22e4.jpg?q=80",
];
let index = 0;

function showImage(){
    document.getElementById("slider").src = images[index]
}
function nextImage(){
    index = (index+1) %images.length;
    showImage();
}
function previmage(){
    index = (index-1 + images.LENGTH) %images.length;
    showImage
}
setInterval(nextImage,3000);