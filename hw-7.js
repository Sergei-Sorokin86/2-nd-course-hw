function turnoverText() {
    let request = prompt('Введите текст')
    let result = request.split('').reverse().join('')
    alert(`${result}`)
}

function quiz() {
    const quiz = [
        {
            question: "Какой цвет небо?",
            options: ["1. Красный", "2. Синий", "3. Зеленый"],
            correctAnswer: 2 // номер правильного ответа
        },
        {
            question: "Сколько дней в неделе?",
            options: ["1. Шесть", "2. Семь", "3. Восемь"],
            correctAnswer: 2
        },
        {
            question: "Сколько у человека пальцев на одной руке?",
            options: ["1. Четыре", "2. Пять", "3. Шесть"],
            correctAnswer: 2
        }
    ];
    let counter = 0;
    for (let i = 0; i < quiz.length; i++) {
        alert(`${quiz[i].question}`)
        let userAnswer = Number(prompt(`Введите номер правильного ответа ${quiz[i].options}`))
        let rightAnswer = quiz[i].correctAnswer
        if(userAnswer === rightAnswer)
        {alert('Ответ верный')
            counter++;
        } 
        else{alert('Неверно')}
        alert(`Количество правильных ответов ${counter}`)
    }
}




let str1 = 'верхний регистр строки'
str1 = str1.toUpperCase()
console.log(str1)

let arr2 = ['пирожное наполеон', 'торт шоколадный', 'Пирожное брауни', 'пиРожное меренга']
console.log(arr2)
let str2 = 'пирожное';
arr2.forEach((prodact) => {if(prodact.toLowerCase().startsWith(str2.toLowerCase())){
    console.log(prodact);
}});

let numerous3 = 32.58884;
let variableround = {
    toceil : Math.ceil(numerous3),
    tofloor : Math.floor(numerous3),
    toround : Math.round(numerous3)
}
console.log(variableround)

let arr4 = [52, 53, 49, 77, 21, 32]
let maximum = arr4[0];
for (const item of arr4) {
    if(item > maximum){
        maximum = item
    }}
console.log(maximum)
const minimum = Math.min(...arr4)
console.log(minimum)

var5 = () => {return Math.floor(Math.random()*10)+1}
console.log(var5())

let arr6 =[]
function task6(n) {
    for(i=0; i < n/2; i++){
        let num6 = Math.floor(Math.random()*`${n}`)+1;
        arr6.push(num6);
    }
    console.log(arr6)
}
task6(8)


function kjkh(c, d){
    return Math.floor(Math.random()*(d-c+1)+c);
}
console.log(kjkh(10, 20))

let date8 = new(Date)
console.log(date8)

let currentDate = new(Date)
let setDate = 73*24*60*60*1000
const weirdDate = +currentDate.getDate() + +setDate
const weirdDate1 = new Date(weirdDate)
console.log(`Через 73 дня будет ${weirdDate1}`)

const options1 = {day: 'numeric', month: 'long',  year: 'numeric' };
const options2 = {hour: '2-digit', minute:'2-digit', second:'2-digit'};
function correctDate(){
    let a = currentDate.toLocaleDateString('ru-RU', options1);
    let b = currentDate.toLocaleTimeString('ru-RU', options2);
    let c = a + b;
    return c;
}
console.log(correctDate())
