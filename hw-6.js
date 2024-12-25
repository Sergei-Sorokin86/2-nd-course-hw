function simpleMath() {
    let a = Math.floor(Math.random() * 100) + 1;
    let b = Math.floor(Math.random() * 100) + 1;
    const operations = ["+", "-", "*", "/"];
    let rundomOperations =Math.floor(Math.random[operations]*operations.indexOf);
    function solution() {
    if (rundomOperations === operations[0]) {
        return a + b;
        alert(`Сложите ${a} и ${b}.`);
    } else if(rundomOperations === operations[1] && a > b) {
        return a - b;
        alert(`Вычтите ${b} из ${a}.`);
    } else if(rundomOperations === operations[1] && b > a) {
        return b - a;
        alert(`Вычтите ${a} из ${b}.`);
    } else if (rundomOperations === operations[2]) {
        return a * b;
        alert(`Перемножьте ${a} и ${b}.`);
    } else if (rundomOperations === operations[3] && b > a) {
        return Math.ceil(b / a);
        alert(`Поделите ${b} и ${a}. Округлите в большую сторону.`);
    } else if (rundomOperations === operations[3] && b < a) {
        return Math.ceil(a / b);
        alert(`Поделите ${a} и ${b}. Округлите в большую сторону.`);}
    }
    let userAnswer = Number(prompt(`Введите ответ`));
    while (userAnswer !== solution) {
        alert(`Ответ неверный, попробуйте еще раз.`);
    } alert(`Ответ правильный`);}