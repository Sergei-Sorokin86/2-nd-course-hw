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

function simpleMath() {
    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;
    console.log(a,b)
    const operations = ["+", "-", "*", "/"];
    let rundomOperations =Math.floor(Math.random()*operations.length);
    console.log(rundomOperations)
    let typeofact = operations[rundomOperations];
    let message = a>b ? `${a} ${typeofact} ${b}`:`${b} ${typeofact} ${a}`   
    function solution(num1, num2, operator) {
        switch (operator) {
            case '+':
                return a+b;
            case '-':
                return a>b ? a-b : b-a;
            case '*':
                return a*b; 
            case '/':
                return Math.ceil(a/b);            
                
            default:
                return null;
        }}
    const result = solution(a, b, typeofact)
    while (true) {
        let userAnswer = (prompt(`Решите задачу: ${message}`))
        if (userAnswer === null) {
            alert(`Игра остановлена`)
            break;    
        } if(+userAnswer === result) {
            alert(`Угадал`)
            break;
        } else {alert(`Неверно, попробуйте еще раз`)}
    }
    } 
    
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
    }
    alert(`Количество правильных ответов ${counter}`)
}

function ssp() {
    let arrvarchoice = ["камень", "ножницы", "бумага"]
    let userAnswer = prompt(`Выберите ${arrvarchoice[0]}, либо 
    ${arrvarchoice[1]}, либо ${arrvarchoice[2]}`)
    userAnswer = userAnswer.toLowerCase(userAnswer)
    let randomchoice = Math.floor(Math.random()*arrvarchoice.length)
    let compchoice = arrvarchoice[randomchoice]
    alert(`Ответ компьютера ${compchoice}`)
    const conditions = {
        камень: "ножницы",
        ножницы: "бумага",
        бумага: "камень"
    }
    if (userAnswer === compchoice) {
        alert(`Ничья`) 
    } else if (conditions[userAnswer] === compchoice) {
        alert(`Вы победили`)
    } else if (conditions[userAnswer] !== compchoice && arrvarchoice.includes(userAnswer)) {
        alert(`Вы проиграли`)
    } else {
        alert (`Введите ответ из выбранного списка`) 
    }
}
    