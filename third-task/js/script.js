const displayOn = (img) => {
    
    document.getElementById('overlay').style.display='block'
    var overlayImage = document.getElementById("overlayImage");
    var overlayText = document.getElementById("overlayText");
    switch(img.id){
        case 'circle':
            overlayImage.src = './images/new-zealand-mountain.jpg';
            overlayText.innerHTML = 'Lake Wakatipu'; 
            break;
        case 'rectangle':
            overlayImage.src = './images/new-zealand-river.jpg';
            overlayText.innerHTML = 'Lake Dock, New Zeland'; 
            break;
        case 'square':
            overlayImage.src = './images/new-zealand-doudful-sound.jpg';
            overlayText.innerHTML = 'Doudful Sound, New Zeland'; 
            break;
        case 'trangle':
            overlayImage.src = './images/sun-rise.jpg';
            overlayText.innerHTML = 'Sun Rise, New Zeland'; 
            break;
        default:
            overlayImage.src = './images/new-zealand-mountain.jpg';
            overlayText.innerHTML = 'Lake Wakatipu'; 
            break;
    }
    
}

const displayOff = () => {
    document.getElementById('overlay').style.display='none'
}