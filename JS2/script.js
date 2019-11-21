

let a = 0;

let images = document.body.querySelectorAll('.image-to-show');

const ramdomImages = () => {

    images.forEach((img, index) => {
        if ((a % images.length) !== index){
            img.style= 'opacity: 0; order: 1';
        } else {
            img.style= 'opacity: 1; order: 0';
        }
    });
    a++;
};

let interval = setInterval(ramdomImages, 1000);

document.getElementById('btn').addEventListener('click', () => {
    clearInterval(interval);
});

document.getElementById('btn1').addEventListener('click',()=>{
    clearInterval(interval);
   interval = setInterval(ramdomImages, 1000);
});





