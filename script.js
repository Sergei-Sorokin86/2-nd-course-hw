/*let a = 10;
alert(a);
a = 20;
alert(a);

let iPhonebirthdayyear = 2007;
alert(`Первый iPhone выпущен в ${iPhonebirthdayyear} году`);

let namecreatorJavaScript = 'Брендан Эйх';
alert(`Создатель Java Script ${namecreatorJavaScript}.`);

let b = 10;
let c = 2;
let sum = b + c;
let subtraction = b - c;
let multiple = b * c;
let divide = b / c;
alert(`Сумма b и с: ${sum}`);
alert(`Разность b и c: ${subtraction}`);
alert(`Произведение b и с: ${multiple}`);
alert(`Частное b и с: ${divide}`);

let d = 2;
let result = 2**5;
alert(result);

a = 9;
b = 2;
let reminder = a % b;
alert(reminder);

let num = 1;
num += 5;
alert(num);
num -= 3;
alert(num);
num *= 7;
alert(num);
num /= 3;
alert(num);
num++;
alert(num);
num--;
alert(num);

let age = prompt(`Сколько Вам лет?`);
alert(age);

const user = {
    name: 'Имя',
    age:Number (3),
    isAdmin: Boolean(true)
};
console.log(user.isAdmin);
console.log(user.name);

let question = prompt('Как тебя зовут?');
alert(`Привет, ${question}!`);*/

/*let password = 'пароль';
let requestPassword = prompt('Введите пароль');
alert(password === requestPassword?'Пароль введен верно':'Пароль введен неверно');

let c = prompt('Введите число');
if (+c>0 && +c<10) {
    alert('верно');}
 else {
    alert('неверно');}

let d = prompt('Введите d')
let e = prompt('Введите e') 
if (+d>100 || +e>100) {
    alert('Верно')
} else {
   alert('Не верно') 
}

let a = '2';
let b = '3';
alert(+a + +b)


let numberMonth =Number(prompt('Введите месяц'));
switch (numberMonth) {
    case 1:
        alert('зима');
        break;
    case 2:
        alert('зима');
        break;
    case 3:
        alert('зима');
        break;
    case 4:
        alert('весна');
        break;
    case 5:
        alert('весна');
        break;
    case 6:
        alert('весна');
        break;
    case 7:
        alert('лето');
        break; 
    case 8:
        alert('лето');
        break;
    case 9:
        alert('лето');
        break;  
    case 10:
        alert('осень');
        break;
    case 11:
        alert('осень');
        break;
    case 12:
        alert('осень');
        break;      
    default:
        alert('Такого месяца не существует');
        break;
}

let numerous = Number(prompt('Пожалуйста, введите любое число'));
if (Number.isNaN(numerous)) {
   alert('Не является числом') 
} else if (numerous % 2 > 0) {
    alert('Число нечетное')
} else {
   alert('Число четное') 
} 

let clientOS = confirm('Вы используете iOS');
let clientDeviceYear = Number(prompt("Введите год выпуска телефона"))
if (clientOS === true && clientDeviceYear <= 2015) {
    alert('Установите облегченную версию приложения для iOS по ссылке')
} else if (clientOS === true && clientDeviceYear > 2015){
    alert('Установите версию приложения для iOS по ссылке')
} else if (clientOS === false && clientDeviceYear <= 2015){
    alert('Установите облегченную версию приложения для Android по ссылке')}
else if (clientOS === false && clientDeviceYear > 2015){
    alert('Установите версию приложения для Android по ссылке')
}*/

//домашняя работа hw4
/*let i = 0;
while (i<2) {
    i++;
    console.log('Привет.');}
for (let i=0; i<2; i++) {
    console.log('Привет.');}    

let j =1;
do {console.log(j);
j++;    
} while (j<6);
for (let j=0; j<6; j++) {
    if(j>=1){console.log(j)}}


let r =0;
while (r<23) {
    r++;
    if (r<=6) {
    continue;}
    if (r === 23) {
    break;}
    console.log(+r);}
for (let r=0; r<=22; r++) {
    if(r<7){continue};
    if(r<=22){console.log(r)}}

const obj = {
    Коля : '200',
    Вася : '300',
    Петя : '400'}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`)
    }
    
let num = 0;    
for (let n = 1000; n > 50;  n /=2) {
    console.log(n)
    num++;
    console.log(num)}
let n =1000;    
do {n /=2;
    if (n<50) {
        break;}
    console.log(n);
    num++;
    console.log(num);}
 while (n>50)


for(let firstfri = 2; firstfri<=31; firstfri +=7){
    console.log(`Сегодня пятница ${firstfri}-е, пора готовить отчет.`)
}
let firstfri = 2;
while (firstfri<=31) {
    console.log(`Сегодня пятница ${firstfri}-е, пора готовить отчет.`);
    firstfri +=7;
    if (firstfri>31) {
       break;}}
do {console.log(`Сегодня пятница ${firstfri}-е, пора готовить отчет.`);
    firstfri +=7;
    if (firstfri>31) {
       break;}}
 while (firstfri<=31);       

// Дополнительные задания

/*let iterations = 0;    
for (let k = 100; k > 0;  k -=7) {
    console.log(k)
    iterations++;
    console.log(iterations)}

let months = ["January", "February", "March",
"April", "May", "June", "July", "August", 
"September", "October", "November", "December"];
for(let months[i]=1; months[i]<=12; months[i]++){
    console.log(months[i])
} */

//hw5    

function guessNumerous() {
    const generatedNunber = Math.floor(Math.random() * 100) + 1;
    let hiddenNumber;  
    do  {hiddenNumber=Number(prompt("Угалайте число от 1 до 100")) ;      
    if (hiddenNumber<generatedNunber) {
       alert("Загаданное число больше"); 
    } else if (hiddenNumber>generatedNunber) {  
        alert("Загаданное число меньше");} 
    if(isNaN(hiddenNumber)) {
        alert(`Введите число`);
        continue;}      
    } while (hiddenNumber!==generatedNunber);
        alert(`Поздравляю, Вы угадали. ваше число ${generatedNunber}`);}    

function min(a,b){
    if (a<b){
        return a;
    }
    else {
        return b;
    }
}
console.log(min(8,4));
console.log(min(6,6));

let even = (c) => (c%2==0 ? 'Число четное':'Число нечетное');
console.log(even(4));
console.log(even(3));

function squared(e) {
    console.log(e**2);}
squared(5);    
let squared1 = (d) => d**2;
console.log(squared1(3));


function age(){
    let howold = Number(prompt('Сколько вам лет'));
    if(howold<0){
        alert ('Вы ввели неправильное значение');
    }
    else if(howold===0 || howold<=12){
        alert ('Привет, друг!');
    }
    else if(howold>=13){
        alert ('Добро пожаловать!');
    }
}
age();


function evennum (){
    let g = Number(prompt(`Введите число g`));
    let f = Number(prompt(`Введите число f`))    
    if(isNaN(g) || isNaN(f)){
        alert (`Одно или оба значения не являются числом`);
    } else {return g*f;}
}
console.log(evennum());

function cubednum() {
    let n = Number(prompt(`Введите число n`));
    if(isNaN(n)){
        alert (`Переданный параметр не является числом`)
    } else{
        return `n в кубе равняется ${n**3}`;
    }
} console.log(cubednum());



const circle1 = {
    radius: 4,
    getArea() {
        console.log(`${(this.radius**2)*Math.PI}`)
    },
    getPerimeter() {
        console.log(`${this.radius*(2*Math.PI)}`)
    }
}
const circle2 = {
    radius: 5,
    getArea() {
        console.log(`${(this.radius**2)*Math.PI}`)
    },
    getPerimeter() {
        console.log(`${this.radius*(2*Math.PI)}`)
    }
}
circle1.getArea();
circle1.getPerimeter();
circle2.getArea();
circle2.getPerimeter();