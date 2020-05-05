const slideList = [{
    img: "img1.jpg", 
    text: 'Pierwszy tekst'
},
{
    img: "img2.jpg", 
    text: 'drugi tekst'
}, 
{
    img: "img3.jpg", 
    text: 'trzeci tekst'
}]


const image = document.querySelector('img.slider');

const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];

const time = 3000;

let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');

}

const changeSlide = () => {
    active++;
    if(active === slideList.length){
        active = 0
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot()
}
setInterval(changeSlide, time)