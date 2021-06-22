document.querySelector('main').addEventListener('click', function(){
    console.log('Main Clicked');
}, {
    capture: false
})

function setGalleryimage(event){
    if(event.target.className == 'thumbnail'){
    let targetSrc = event.target.attributes.src.nodeValue;
    let largeImage = document.querySelector('#large-image');
    largeImage.setAttribute('src', targetSrc);
    }
}

let wrapper = document.querySelector('.grid-container');
wrapper.addEventListener('click', setGalleryimage, {
    capture: false
});
