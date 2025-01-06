

let sequence = [1, 5, 4, 10, 0, 3]
for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
    if (sequence[i] === 10)
        break;}

let j=0;
let sequence1 = [1, 5, 4, 10, 0, 3]
do { j < sequence1.length; 
    j++;  
} while (sequence1[j] !== 4);
console.log(`Индекс значения ${sequence1[j]} равен ${j}`);

let arr1 = [1, 3, 5, 10, 20]
console.log(arr1.join(' '));

let arr2 = []
for (let i = 0; i < 3; i++) {
    arr2[i]=[];
    for (let j = 0; j < 3; j++) {
        arr2[i][j] = 1;
    }}
    console.log(arr2)

let arr5 = [1, 1, 1]
arr5.push(2, 2, 2);
console.log(arr5)

let arr6 = [9, 8, 7, 'a', 6, 5]
arr6.sort();
arr6.pop();
console.log(arr6);

let arr7 = [9, 8, 7, 6 ,5]
let answer = Number(prompt("Назовите число"))
if (arr7.includes(answer)) {
    alert("Угадал");}
else if(isNaN(answer)){
    alert("Это не число");}
else {alert("Число не входит в массив")}

let str8 = 'abcdef'
str8 = str8.split('');
str8= str8.reverse();
str8=str8.join('');
console.log(str8)

let arr9 = [[1, 2, 3], [4, 5, 6]]
let newarr = []
for (let i = 0; i < arr9.length; i++) {
    newarr.push(...arr9[i]);}
console.log(newarr)   

let arr10 = [1, 5, 6, 3, 8, 9, 2, 10, 4, 7]
for (let item = 0; item < arr10.length; item++) {
    if (arr10[item+1]) {
        console.log(arr10[item]+arr10[item+1])}
} 

let arr11 = [5, 6, 3, 4]
const updatedarr11 = arr11.map(arr11 => arr11**2)
console.log(updatedarr11)

let arr12 = ['hgh', 'cjcj', 'jffji']
const updatedarr12 = arr12.map(arr12 => arr12.length)
console.log(updatedarr12)

let arr13 = [4, 5, 77, -8]
const filtarr13 = arr13.filter(arr13 => arr13<0)
console.log(filtarr13)

let arr14 = []
for (let i = 0; i < 10; i++) {
    let rundn = Math.floor(Math.random()*10)+1;
    arr14.push(rundn);}
console.log(arr14)    
const updatearr14 = arr14.filter(arr14 => arr14 % 2 == 0) 
console.log(updatearr14)

let arr15 = []
for (let i = 0; i<6; i++) {
    let rundarr = Math.floor(Math.random()*10)+1;
    arr15.push(rundarr);}
console.log(arr15)
const average = arr15.reduce((total, number) => total + number)/arr15.length;
console.log(average)    
