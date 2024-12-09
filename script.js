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

let password = 'пароль';
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
}    

    
