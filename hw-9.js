const h1 = document.querySelector('.header1');
const b1 = document.querySelector('.button1');
console.log(h1, b1);
b1.addEventListener('click', () => {
    /*h1.classList.toggle('.header1');*/
    if (h1.style.display === 'none') {
        b1.textContent = "Скрыть";
        h1.style.display = 'block';
    } else {
        b1.textContent = "Показать";
        h1.style.display = 'none';
    }
});


const h2 = document.querySelector('.textEltask2');
const b2 = document.querySelector('.buttonEltask2');
console.log(h2, b2);

b2.addEventListener('click', () => {
    h2.style.color = 'blue';});


const h3 = document.querySelector('.textEltask3');
const b3 = document.querySelector('.buttonEltask3');
console.log(h3, b3);
b3.addEventListener('click', () => {
    h3.textContent = 'Привет, мир!';});


const h4 = document.querySelectorAll('.description');
console.log(h4);
h4.forEach(description => {
    description.textContent = 'Измененный текст';
});


const h5 = document.querySelectorAll('.description1');
console.log(h5);
h5.forEach(description1 => {
    description1.textContent = 'Новый текст';
});


const bt6 = document.querySelector('.buttonEltask6');
console.log(bt6);
const newP = document.createElement('p');
newP.textContent = 'Новый абзац';
console.log(newP);
bt6.addEventListener('click', () => {
    document.body.appendChild(newP);});

const p7 = document.querySelector('.description7');
const b7 = document.querySelector('.buttonEltask7');
console.log(p7, b7);
b7.addEventListener('click', () => {
    p7.remove()});